-- Careers / job postings
-- Run this in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- (Or via the Supabase CLI: `supabase db push`.)

create table if not exists public.jobs (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  location     text not null,
  type         text not null default 'Full-time',
  description  text not null,
  is_published boolean not null default false,
  created_at   timestamptz not null default now()
);

-- Newest jobs first
create index if not exists jobs_created_at_idx on public.jobs (created_at desc);

-- Lock the table down; access is granted only through the policies below.
alter table public.jobs enable row level security;

-- Anyone (logged out visitors) may read ONLY published jobs.
drop policy if exists "Public can read published jobs" on public.jobs;
create policy "Public can read published jobs"
  on public.jobs for select
  to anon, authenticated
  using (is_published = true);

-- A logged-in admin may read everything, including unpublished drafts.
drop policy if exists "Admins can read all jobs" on public.jobs;
create policy "Admins can read all jobs"
  on public.jobs for select
  to authenticated
  using (true);

-- Only a logged-in admin may create, edit, or delete jobs.
drop policy if exists "Admins can insert jobs" on public.jobs;
create policy "Admins can insert jobs"
  on public.jobs for insert
  to authenticated
  with check (true);

drop policy if exists "Admins can update jobs" on public.jobs;
create policy "Admins can update jobs"
  on public.jobs for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Admins can delete jobs" on public.jobs;
create policy "Admins can delete jobs"
  on public.jobs for delete
  to authenticated
  using (true);
