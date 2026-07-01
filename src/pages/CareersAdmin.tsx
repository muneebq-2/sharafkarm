import React, { useEffect, useState, useCallback } from 'react';
import { Link } from '../router';
import {
  ArrowLeft,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Eye,
  EyeOff,
  X,
  Lock,
  FileText,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  RefreshCw,
} from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import {
  JOB_TYPES,
  APPLICATION_STATUSES,
  CV_BUCKET,
  type Job,
  type Application,
  type ApplicationStatus,
} from '../data/careers';

const STATUS_STYLES: Record<ApplicationStatus, string> = {
  pending: 'bg-amber-100 text-amber-700',
  reviewed: 'bg-blue-100 text-blue-700',
  shortlisted: 'bg-green-100 text-green-700',
  rejected: 'bg-red-100 text-red-700',
};

type JobForm = {
  title: string;
  location: string;
  type: string;
  description: string;
  is_published: boolean;
};

const emptyForm: JobForm = {
  title: '',
  location: '',
  type: JOB_TYPES[0],
  description: '',
  is_published: true,
};

/* ---------------------------------- Login --------------------------------- */

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setSubmitting(true);
    setError(null);

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError('Invalid email or password.');
      setSubmitting(false);
    }
    // On success, the auth listener in CareersAdmin swaps in the dashboard.
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card p-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 mx-auto mb-5">
          <Lock className="h-6 w-6 text-primary-700" />
        </div>
        <h1 className="text-2xl font-bold text-dark-900 text-center mb-1">Admin sign in</h1>
        <p className="text-dark-500 text-sm text-center mb-6">
          Manage careers postings for SHARAFKARM Solutions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1.5">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1.5">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button type="submit" disabled={submitting} className="w-full btn-primary text-sm disabled:opacity-60">
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ------------------------------- Job editor ------------------------------- */

const JobModal: React.FC<{
  initial: Job | null;
  onClose: () => void;
  onSaved: () => void;
}> = ({ initial, onClose, onSaved }) => {
  const [form, setForm] = useState<JobForm>(
    initial
      ? {
          title: initial.title,
          location: initial.location,
          type: initial.type,
          description: initial.description,
          is_published: initial.is_published,
        }
      : emptyForm
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (patch: Partial<JobForm>) => setForm((f) => ({ ...f, ...patch }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setSaving(true);
    setError(null);

    const payload = {
      title: form.title.trim(),
      location: form.location.trim(),
      type: form.type,
      description: form.description.trim(),
      is_published: form.is_published,
    };

    const { error: saveError } = initial
      ? await supabase.from('jobs').update(payload).eq('id', initial.id)
      : await supabase.from('jobs').insert(payload);

    if (saveError) {
      setError(saveError.message);
      setSaving(false);
      return;
    }
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-dark-900/50 p-4 py-10">
      <div className="card w-full max-w-lg p-6 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-dark-900">
            {initial ? 'Edit posting' : 'New posting'}
          </h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-dark-500 hover:bg-dark-100" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1.5">Job title</label>
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => update({ title: e.target.value })}
              className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="e.g. Structural Design Engineer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-1.5">Location</label>
              <input
                type="text"
                required
                value={form.location}
                onChange={(e) => update({ location: e.target.value })}
                className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g. Islamabad / Remote"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-700 mb-1.5">Type</label>
              <select
                value={form.type}
                onChange={(e) => update({ type: e.target.value })}
                className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {JOB_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-700 mb-1.5">Description</label>
            <textarea
              required
              rows={5}
              value={form.description}
              onChange={(e) => update({ description: e.target.value })}
              className="w-full rounded-lg border border-dark-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
              placeholder="Role summary, responsibilities, requirements…"
            />
          </div>

          <label className="flex items-center gap-2.5 text-sm text-dark-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => update({ is_published: e.target.checked })}
              className="h-4 w-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
            />
            Published (visible on the public careers page)
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3 pt-1">
            <button type="submit" disabled={saving} className="btn-primary text-sm disabled:opacity-60">
              {saving ? 'Saving…' : initial ? 'Save changes' : 'Create posting'}
            </button>
            <button type="button" onClick={onClose} className="btn-secondary text-sm">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* ----------------------------- Applications ------------------------------- */

const ApplicationCard: React.FC<{
  app: Application;
  onStatusChange: (id: string, status: ApplicationStatus) => void;
  onDelete: (app: Application) => void;
}> = ({ app, onStatusChange, onDelete }) => {
  const [cvLoading, setCvLoading] = useState(false);
  const [cvError, setCvError] = useState<string | null>(null);
  const [showLetter, setShowLetter] = useState(false);

  const openCv = async () => {
    if (!supabase) return;
    setCvLoading(true);
    setCvError(null);
    // Private bucket -> generate a short-lived signed URL for the admin.
    const { data, error } = await supabase.storage
      .from(CV_BUCKET)
      .createSignedUrl(app.cv_path, 120);
    setCvLoading(false);
    if (error || !data) {
      setCvError('Could not open CV.');
      return;
    }
    window.open(data.signedUrl, '_blank', 'noopener');
  };

  const submitted = new Date(app.created_at).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="card p-5">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h3 className="text-base font-bold text-dark-900">{app.full_name}</h3>
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${STATUS_STYLES[app.status]}`}
            >
              {app.status}
            </span>
          </div>
          <p className="text-sm text-dark-500 inline-flex items-center gap-1.5 mb-0.5">
            <Briefcase className="h-3.5 w-3.5" /> {app.job_title}
          </p>
          <p className="text-xs text-dark-400">Applied {submitted}</p>
        </div>

        <div className="flex flex-col items-stretch gap-2 shrink-0 w-full sm:w-auto">
          <select
            value={app.status}
            onChange={(e) => onStatusChange(app.id, e.target.value as ApplicationStatus)}
            className="rounded-lg border border-dark-200 px-3 py-2 text-sm bg-white capitalize focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {APPLICATION_STATUSES.map((s) => (
              <option key={s} value={s} className="capitalize">
                {s}
              </option>
            ))}
          </select>
          <button
            onClick={openCv}
            disabled={cvLoading}
            className="btn-secondary text-sm inline-flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <FileText className="h-4 w-4" />
            {cvLoading ? 'Opening…' : 'View CV'}
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-dark-100 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${app.email}`}
          className="inline-flex items-center gap-2 text-dark-600 hover:text-primary-700 min-w-0"
        >
          <Mail className="h-4 w-4 shrink-0" />
          <span className="truncate">{app.email}</span>
        </a>
        <a
          href={`tel:${app.phone}`}
          className="inline-flex items-center gap-2 text-dark-600 hover:text-primary-700"
        >
          <Phone className="h-4 w-4 shrink-0" />
          {app.phone}
        </a>
        {(app.institute || app.semester || app.cgpa != null) && (
          <p className="inline-flex items-center gap-2 text-dark-600 sm:col-span-2">
            <GraduationCap className="h-4 w-4 shrink-0" />
            {[app.institute, app.semester, app.cgpa != null ? `CGPA ${app.cgpa}` : null]
              .filter(Boolean)
              .join(' · ')}
          </p>
        )}
      </div>

      {app.cover_letter && (
        <div className="mt-3">
          <button
            onClick={() => setShowLetter((v) => !v)}
            className="text-sm font-medium text-primary-700 hover:text-primary-800"
          >
            {showLetter ? 'Hide cover letter' : 'Show cover letter'}
          </button>
          {showLetter && (
            <p className="mt-2 text-sm text-dark-600 leading-relaxed whitespace-pre-wrap bg-dark-50 rounded-lg p-4">
              {app.cover_letter}
            </p>
          )}
        </div>
      )}

      <div className="mt-3 flex items-center justify-between">
        {cvError ? <span className="text-xs text-red-600">{cvError}</span> : <span />}
        <button
          onClick={() => onDelete(app)}
          className="text-xs text-dark-400 hover:text-red-600 inline-flex items-center gap-1.5 transition-colors"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      </div>
    </div>
  );
};

const ApplicationsPanel: React.FC = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | ApplicationStatus>('all');

  const load = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setApps((data as Application[]) ?? []);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const changeStatus = async (id: string, status: ApplicationStatus) => {
    if (!supabase) return;
    setApps((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a))); // optimistic
    await supabase.from('applications').update({ status }).eq('id', id);
  };

  const remove = async (app: Application) => {
    if (!supabase) return;
    if (!window.confirm(`Delete application from “${app.full_name}”? This cannot be undone.`)) return;
    await supabase.storage.from(CV_BUCKET).remove([app.cv_path]);
    await supabase.from('applications').delete().eq('id', app.id);
    load();
  };

  const visible = filter === 'all' ? apps : apps.filter((a) => a.status === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {(['all', ...APPLICATION_STATUSES] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
              filter === f
                ? 'bg-primary-600 text-white'
                : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
            }`}
          >
            {f}
            {f !== 'all' && (
              <span className="ml-1.5 opacity-70">
                {apps.filter((a) => a.status === f).length}
              </span>
            )}
          </button>
        ))}
        <button
          onClick={load}
          className="ml-auto p-2 rounded-lg text-dark-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
          aria-label="Refresh"
          title="Refresh"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {loading ? (
        <p className="text-dark-500 text-sm">Loading…</p>
      ) : error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : visible.length === 0 ? (
        <div className="card p-10 text-center">
          <p className="text-dark-600">
            {filter === 'all' ? 'No applications yet.' : `No ${filter} applications.`}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {visible.map((app) => (
            <ApplicationCard
              key={app.id}
              app={app}
              onStatusChange={changeStatus}
              onDelete={remove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ------------------------------- Dashboard -------------------------------- */

const Dashboard: React.FC<{ email: string | undefined }> = ({ email }) => {
  const [tab, setTab] = useState<'jobs' | 'applications'>('jobs');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Job | null>(null);

  const loadJobs = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    if (fetchError) {
      setError(fetchError.message);
    } else {
      setJobs((data as Job[]) ?? []);
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  const openNew = () => {
    setEditing(null);
    setModalOpen(true);
  };
  const openEdit = (job: Job) => {
    setEditing(job);
    setModalOpen(true);
  };

  const togglePublish = async (job: Job) => {
    if (!supabase) return;
    await supabase.from('jobs').update({ is_published: !job.is_published }).eq('id', job.id);
    loadJobs();
  };

  const remove = async (job: Job) => {
    if (!supabase) return;
    if (!window.confirm(`Delete “${job.title}”? This cannot be undone.`)) return;
    await supabase.from('jobs').delete().eq('id', job.id);
    loadJobs();
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-dark-900">Careers admin</h1>
          <p className="text-dark-500 text-sm mt-1">Signed in as {email}</p>
        </div>
        <div className="flex items-center gap-3">
          {tab === 'jobs' && (
            <button onClick={openNew} className="btn-primary text-sm inline-flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New posting
            </button>
          )}
          <button
            onClick={signOut}
            className="btn-secondary text-sm inline-flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-8 border-b border-dark-100">
        {([
          { key: 'jobs', label: 'Job Postings' },
          { key: 'applications', label: 'Applications' },
        ] as const).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              tab === t.key
                ? 'border-primary-600 text-primary-700'
                : 'border-transparent text-dark-500 hover:text-dark-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'applications' ? (
        <ApplicationsPanel />
      ) : loading ? (
        <p className="text-dark-500 text-sm">Loading…</p>
      ) : error ? (
        <p className="text-red-600 text-sm">{error}</p>
      ) : jobs.length === 0 ? (
        <div className="card p-10 text-center">
          <p className="text-dark-600 mb-4">No postings yet.</p>
          <button onClick={openNew} className="btn-primary text-sm inline-flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create your first posting
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="card p-5 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <h3 className="text-base font-bold text-dark-900">{job.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      job.is_published
                        ? 'bg-green-100 text-green-700'
                        : 'bg-dark-100 text-dark-500'
                    }`}
                  >
                    {job.is_published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-sm text-dark-500">
                  {job.location} · {job.type}
                </p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => togglePublish(job)}
                  className="p-2 rounded-lg text-dark-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                  aria-label={job.is_published ? 'Unpublish' : 'Publish'}
                  title={job.is_published ? 'Unpublish' : 'Publish'}
                >
                  {job.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => openEdit(job)}
                  className="p-2 rounded-lg text-dark-500 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                  aria-label="Edit"
                  title="Edit"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => remove(job)}
                  className="p-2 rounded-lg text-dark-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                  aria-label="Delete"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <JobModal
          initial={editing}
          onClose={() => setModalOpen(false)}
          onSaved={() => {
            setModalOpen(false);
            loadJobs();
          }}
        />
      )}
    </div>
  );
};

/* --------------------------------- Page ----------------------------------- */

const CareersAdmin: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setReady(true);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-dark-500 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to home
        </Link>

        {!isSupabaseConfigured ? (
          <div className="card p-8 text-center max-w-md mx-auto">
            <h1 className="text-lg font-bold text-dark-900 mb-2">Not configured yet</h1>
            <p className="text-dark-600 text-sm">
              Supabase credentials are missing. Add <code>VITE_SUPABASE_URL</code> and{' '}
              <code>VITE_SUPABASE_ANON_KEY</code> to your environment to enable the admin panel.
            </p>
          </div>
        ) : !ready ? (
          <p className="text-dark-500 text-sm">Loading…</p>
        ) : session ? (
          <Dashboard email={session.user.email} />
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};

export default CareersAdmin;
