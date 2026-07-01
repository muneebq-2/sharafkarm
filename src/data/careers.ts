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
