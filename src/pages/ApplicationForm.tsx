import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from '../router';
import { ArrowLeft, UploadCloud, CheckCircle2, FileText, X } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { SEMESTERS, CV_BUCKET, type Job } from '../data/careers';

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10 MB
const CV_ACCEPT = '.pdf,.doc,.docx';

type FieldErrors = Partial<Record<'full_name' | 'email' | 'phone' | 'cv', string>>;

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();

  // job id comes from the query string: /careers/apply?job=<id>
  const jobId = useMemo(() => new URLSearchParams(window.location.search).get('job'), []);
  const [job, setJob] = useState<Job | null>(null);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    institute: '',
    semester: '',
    cgpa: '',
    cover_letter: '',
  });
  const [cv, setCv] = useState<File | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!jobId || !supabase) return;
    supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .maybeSingle()
      .then(({ data }) => setJob((data as Job) ?? null));
  }, [jobId]);

  const update = (patch: Partial<typeof form>) => setForm((f) => ({ ...f, ...patch }));

  const onCvChange = (file: File | null) => {
    setErrors((e) => ({ ...e, cv: undefined }));
    if (file && file.size > MAX_CV_BYTES) {
      setErrors((e) => ({ ...e, cv: 'File is larger than 10 MB.' }));
      setCv(null);
      return;
    }
    setCv(file);
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!form.full_name.trim()) next.full_name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    if (!cv) next.cv = 'Please attach your CV.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;
    if (!supabase) {
      setSubmitError('Applications are not available right now. Please try again later.');
      return;
    }

    setSubmitting(true);

    // 1. Upload the CV to the private storage bucket.
    const ext = cv!.name.split('.').pop()?.toLowerCase() || 'pdf';
    const safeBase = (jobId || 'general').slice(0, 40);
    const cvPath = `${safeBase}/${crypto.randomUUID()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(CV_BUCKET)
      .upload(cvPath, cv!, { contentType: cv!.type || undefined, upsert: false });

    if (uploadError) {
      setSubmitError(`Could not upload your CV: ${uploadError.message}`);
      setSubmitting(false);
      return;
    }

    // 2. Insert the application row.
    const { error: insertError } = await supabase.from('applications').insert({
      job_id: jobId,
      job_title: job?.title || 'General Application',
      full_name: form.full_name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      institute: form.institute.trim() || null,
      semester: form.semester || null,
      cgpa: form.cgpa ? Number(form.cgpa) : null,
      cover_letter: form.cover_letter.trim() || null,
      cv_path: cvPath,
    });

    if (insertError) {
      setSubmitError(`Could not submit your application: ${insertError.message}`);
      setSubmitting(false);
      return;
    }

    setDone(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const inputClass =
    'w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent';
  const errInputClass = 'border-red-400 focus:ring-red-400';
  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-dark-500 mb-2';

  if (done) {
    return (
      <div className="pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-500 flex items-center justify-center mx-auto mb-7">
            <CheckCircle2 className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-dark-900 mb-3">Application received</h1>
          <p className="text-dark-600 leading-relaxed max-w-md mx-auto mb-8">
            Thank you for applying to SHARAFKARM Solutions. We&rsquo;ll review your application and
            be in touch with shortlisted candidates via email.
          </p>
          <Link to="/careers" className="btn-primary text-sm inline-flex">
            Back to careers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <button
          onClick={() => navigate('/careers')}
          className="inline-flex items-center text-sm font-medium text-dark-500 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to careers
        </button>

        <p className="section-label mb-3">Careers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-3">Job Application</h1>
        <p className="text-dark-600 mb-10">
          {job ? (
            <>
              Applying for <span className="font-semibold text-dark-800">{job.title}</span>
              {job.location ? ` · ${job.location}` : ''}
              {job.type ? ` · ${job.type}` : ''}
            </>
          ) : (
            'Tell us about yourself and attach your CV.'
          )}
        </p>

        {!isSupabaseConfigured && (
          <div className="card p-6 mb-8 text-sm text-dark-600">
            Applications are not configured yet. Please check back soon.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-10">
          {/* 01 — Personal */}
          <section>
            <p className="section-label mb-6">01 · Personal Information</p>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  Full Name <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  value={form.full_name}
                  onChange={(e) => update({ full_name: e.target.value })}
                  className={`${inputClass} ${errors.full_name ? errInputClass : ''}`}
                  placeholder="Your full name"
                />
                {errors.full_name && <p className="text-xs text-red-600 mt-1.5">{errors.full_name}</p>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    Email Address <span className="text-primary-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update({ email: e.target.value })}
                    className={`${inputClass} ${errors.email ? errInputClass : ''}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass}>
                    Phone Number <span className="text-primary-600">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update({ phone: e.target.value })}
                    className={`${inputClass} ${errors.phone ? errInputClass : ''}`}
                    placeholder="+92 300 0000000"
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
                </div>
              </div>
            </div>
          </section>

          {/* 02 — Academic */}
          <section>
            <p className="section-label mb-6">02 · Academic Background</p>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>Institute / University</label>
                <input
                  type="text"
                  value={form.institute}
                  onChange={(e) => update({ institute: e.target.value })}
                  className={inputClass}
                  placeholder="Name of your university or college"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Current Semester</label>
                  <select
                    value={form.semester}
                    onChange={(e) => update({ semester: e.target.value })}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Select semester</option>
                    {SEMESTERS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Current CGPA</label>
                  <input
                    type="number"
                    min={0}
                    max={4}
                    step={0.01}
                    value={form.cgpa}
                    onChange={(e) => update({ cgpa: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. 3.5"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 03 — Documents */}
          <section>
            <p className="section-label mb-6">03 · Documents</p>
            <div className="space-y-5">
              <div>
                <label className={labelClass}>
                  CV / Resume <span className="text-primary-600">*</span>
                </label>
                {cv ? (
                  <div className="flex items-center justify-between gap-3 rounded-lg border border-dark-200 bg-dark-50 px-4 py-3">
                    <span className="inline-flex items-center gap-2 text-sm text-dark-700 min-w-0">
                      <FileText className="h-4 w-4 text-primary-600 shrink-0" />
                      <span className="truncate">{cv.name}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onCvChange(null)}
                      className="text-dark-400 hover:text-red-600 transition-colors shrink-0"
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <label
                    className={`relative flex flex-col items-center justify-center rounded-lg border border-dashed px-6 py-8 text-center cursor-pointer transition-colors hover:border-primary-500 hover:bg-primary-50/40 ${
                      errors.cv ? 'border-red-400' : 'border-dark-300'
                    }`}
                  >
                    <input
                      type="file"
                      accept={CV_ACCEPT}
                      onChange={(e) => onCvChange(e.target.files?.[0] ?? null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="h-7 w-7 text-primary-600 mb-2.5" />
                    <p className="text-sm text-dark-600">
                      <span className="font-semibold text-primary-700">Click to upload</span> your CV
                      or drag it here
                    </p>
                    <p className="text-xs uppercase tracking-wider text-dark-400 mt-1.5">
                      PDF · DOC · DOCX · max 10 MB
                    </p>
                  </label>
                )}
                {errors.cv && <p className="text-xs text-red-600 mt-1.5">{errors.cv}</p>}
              </div>

              <div>
                <label className={labelClass}>Cover Letter</label>
                <textarea
                  rows={5}
                  value={form.cover_letter}
                  onChange={(e) => update({ cover_letter: e.target.value })}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us why you're a great fit (optional)…"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-dark-100 pt-8">
            <p className="text-sm text-dark-500 mb-6 leading-relaxed">
              By submitting this form you confirm that all information provided is accurate. We will
              review your application and reach out to shortlisted candidates via email.
            </p>
            {submitError && <p className="text-sm text-red-600 mb-4">{submitError}</p>}
            <button
              type="submit"
              disabled={submitting || !isSupabaseConfigured}
              className="btn-primary text-sm disabled:opacity-60"
            >
              {submitting ? 'Submitting…' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
