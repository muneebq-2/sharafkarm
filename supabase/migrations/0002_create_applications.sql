-- Job applications + CV storage
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- (Requires 0001_create_jobs_table.sql to have been run first.)

-- =========================================================================
-- 1. Applications table
-- =========================================================================
create table if not exists public.applications (
  id           uuid primary key default gen_random_uuid(),
  job_id       uuid references public.jobs(id) on delete set null,
  job_title    text not null,               -- snapshot, kept even if the job is deleted
  full_name    text not null,
  email        text not null,
  phone        text not null,
  institute    text,                         -- optional academic info
  semester     text,
  cgpa         numeric(3, 2),
  cover_letter text,                         -- optional
  cv_path      text not null,                -- path inside the `applications` storage bucket
  status       text not null default 'pending'
               check (status in ('pending', 'reviewed', 'shortlisted', 'rejected')),
  created_at   timestamptz not null default now()
);

create index if not exists applications_created_at_idx on public.applications (created_at desc);
create index if not exists applications_job_id_idx on public.applications (job_id);

alter table public.applications enable row level security;

-- Anyone (a logged-out visitor) may SUBMIT an application, but never read them.
drop policy if exists "Anyone can submit an application" on public.applications;
create policy "Anyone can submit an application"
  on public.applications for insert
  to anon, authenticated
  with check (true);

-- Only a logged-in admin may read, update the status, or delete applications.
drop policy if exists "Admins can read applications" on public.applications;
create policy "Admins can read applications"
  on public.applications for select
  to authenticated
  using (true);

drop policy if exists "Admins can update applications" on public.applications;
create policy "Admins can update applications"
  on public.applications for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete applications" on public.applications;
create policy "Admins can delete applications"
  on public.applications for delete
  to authenticated
  using (true);

-- =========================================================================
-- 2. Private storage bucket for uploaded CVs
-- =========================================================================
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'applications',
  'applications',
  false,                                  -- private: no public URLs
  10485760,                               -- 10 MB max per file
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- Anyone may upload a CV into this bucket (needed so applicants can apply
-- without logging in). The mime-type / size limits above constrain abuse.
drop policy if exists "Anyone can upload a CV" on storage.objects;
create policy "Anyone can upload a CV"
  on storage.objects for insert
  to anon, authenticated
  with check (bucket_id = 'applications');

-- Only a logged-in admin may read/download uploaded CVs (via signed URLs).
drop policy if exists "Admins can read CVs" on storage.objects;
create policy "Admins can read CVs"
  on storage.objects for select
  to authenticated
  using (bucket_id = 'applications');

drop policy if exists "Admins can delete CVs" on storage.objects;
create policy "Admins can delete CVs"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'applications');
