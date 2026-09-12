import { useInfiniteQuery } from "@tanstack/react-query";
import { jobListingInstance } from "@/lib/axios";
import { JobApiResponse } from "@/types/jobs";
import { QueryFunctionContext } from "@tanstack/react-query";

async function fetchJobs({ pageParam }: QueryFunctionContext): Promise<JobApiResponse> {
  const res = await jobListingInstance.get<JobApiResponse>("/job-board-api", {
    params: {
      page: pageParam ?? 1,
    },
  });

  return res.data;
}


export const useInfiniteJobs = () => {
  return useInfiniteQuery<JobApiResponse>({
    queryKey: ["job-postings"],
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
