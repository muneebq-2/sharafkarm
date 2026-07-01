export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  is_published: boolean;
  created_at: string;
}

/** Selectable job types in the admin form. */
export const JOB_TYPES = ['Full-time', 'Part-time', 'Internship', 'Contract', 'Remote'] as const;

export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'rejected';

export const APPLICATION_STATUSES: ApplicationStatus[] = [
  'pending',
  'reviewed',
  'shortlisted',
  'rejected',
];

export const SEMESTERS = [
  '1st Semester',
  '2nd Semester',
  '3rd Semester',
  '4th Semester',
  '5th Semester',
  '6th Semester',
  '7th Semester',
  '8th Semester',
] as const;

export interface Application {
  id: string;
  job_id: string | null;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  institute: string | null;
  semester: string | null;
  cgpa: number | null;
  cover_letter: string | null;
  cv_path: string;
  status: ApplicationStatus;
  created_at: string;
}

/** Supabase Storage bucket that holds uploaded CVs. */
export const CV_BUCKET = 'applications';
