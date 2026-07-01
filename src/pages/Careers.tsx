import React, { useEffect, useState } from 'react';
import { Link } from '../router';
import { ArrowLeft, MapPin, Briefcase } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { Job } from '../data/careers';

const APPLY_EMAIL = 'sharafkarmsolutions@gmail.com';

const Careers: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      if (!isSupabaseConfigured || !supabase) {
        setError('Careers are not configured yet. Please check back soon.');
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (!active) return;

      if (fetchError) {
        setError('Could not load openings right now. Please try again later.');
      } else {
        setJobs((data as Job[]) ?? []);
      }
      setLoading(false);
    };

    load();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-dark-500 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to home
        </Link>

        <p className="section-label mb-3">Careers</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Join our team</h1>
        <p className="text-dark-600 max-w-2xl mb-12 leading-relaxed">
          We&rsquo;re always looking for talented engineers, designers, and estimators who want to
          build a career in civil engineering and project consultancy. Explore our current openings
          below.
        </p>

        {loading ? (
          <p className="text-dark-500 text-sm">Loading openings&hellip;</p>
        ) : error ? (
          <div className="card p-8 text-center">
            <p className="text-dark-600">{error}</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="card p-10 text-center">
            <Briefcase className="h-10 w-10 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-dark-900 mb-2">No open positions right now</h3>
            <p className="text-dark-600 text-sm max-w-md mx-auto mb-6">
              We don&rsquo;t have any openings at the moment, but we&rsquo;d still love to hear from
              you. Send us your CV and we&rsquo;ll reach out when a role opens up.
            </p>
            <a
              href={`mailto:${APPLY_EMAIL}?subject=Open Application`}
              className="btn-primary text-sm inline-flex"
            >
              Send your CV
            </a>
          </div>
        ) : (
          <div className="space-y-5">
            {jobs.map((job) => (
              <article key={job.id} className="card card-hover p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-dark-500 mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-dark-600 text-sm leading-relaxed">{job.description}</p>
                  </div>
                  <Link
                    to={`/careers/apply?job=${job.id}`}
                    className="btn-primary text-sm inline-flex items-center gap-2 shrink-0 self-start"
                  >
                    Apply
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
