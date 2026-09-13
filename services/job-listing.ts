import { useInfiniteQuery } from "@tanstack/react-query";
import { jobListingInstance } from "@/lib/axios";
import { JobApiResponse, Job } from "@/types/jobs";
import { QueryFunctionContext } from "@tanstack/react-query";

async function fetchJobs({ pageParam, queryKey }: QueryFunctionContext): Promise<JobApiResponse> {
  const page = (pageParam as number) || 1;
  const [_key, searchQuery] = queryKey;
  const appId = process.env.NEXT_PUBLIC_ADZUNA_APP_ID;
  const appKey = process.env.NEXT_PUBLIC_ADZUNA_APP_KEY;

  const res = await jobListingInstance.get(`/jobs/in/search/${page}`, {
    params: {
      app_id: appId,
      app_key: appKey,
      what: (searchQuery as string) || undefined,
    },
  });

  const adzunaJobs = res.data.results || [];
  
  const mappedJobs: Job[] = adzunaJobs.map((job: any) => ({
    slug: job.id.toString(),
    title: job.title,
    company_name: job.company?.display_name || "Unknown Company",
    location: job.location?.display_name || "Remote",
    job_types: [], 
    tags: [job.category?.label].filter(Boolean),
    remote: job.location?.display_name?.toLowerCase().includes("remote") || false,
    description: job.description,
    url: job.redirect_url,
    created_at: new Date(job.created).getTime() / 1000,
  }));

  return {
    data: mappedJobs,
    meta: {
      current_page: page,
      from: 1,
      path: "",
      per_page: mappedJobs.length,
      to: mappedJobs.length,
      terms: "",
      info: "",
    },
    links: {
      next: mappedJobs.length > 0 ? `http://dummy.com?page=${page + 1}` : null,
    }
  };
}

export const useInfiniteJobs = (searchQuery: string = "") => {
  return useInfiniteQuery<JobApiResponse>({
    queryKey: ["job-postings", searchQuery],
    queryFn: fetchJobs,
    getNextPageParam: (lastPage) => {
      const nextUrl = lastPage.links?.next;
      if (!nextUrl) return undefined;

      const url = new URL(nextUrl);
      const nextPage = url.searchParams.get("page");
      return nextPage ? Number(nextPage) : undefined;
    },
    initialPageParam: 1,
  });
};
