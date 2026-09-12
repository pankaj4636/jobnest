export interface Job {
  slug: string;
  title: string;
  company_name: string;
  location: string;
  job_types: string[];
  tags: string[];
  remote: boolean;
  description: string;
  url: string;
  created_at: number;
}

export interface JobApiMeta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
  terms: string;
  info: string;
}

export interface JobApiLinks {
  first?: string;
  last?: string | null;
  prev?: string | null;
  next?: string | null;
}

export interface JobApiResponse {
  data: Job[];
  links: JobApiLinks;
  meta: JobApiMeta;
}
