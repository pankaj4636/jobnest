"use client";

import { useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

import { jobDataAtom, searchQueryAtom, filteredJobsAtom } from "@/atoms/job-data";
import { useInfiniteJobs } from "@/services/job-listing";
import JobCardSkeleton from "../ui/job-card-skeleton";
import JobCard from "./job-card";
import { Job } from "@/types/jobs";
import { useAtomValue } from "jotai";

export default function JobListing() {

  const setJobData = useSetAtom(jobDataAtom);
  const filteredJobs = useAtomValue(filteredJobsAtom);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const searchQuery = useAtomValue(searchQueryAtom);
  
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isPending,
    error,
  } = useInfiniteJobs(debouncedQuery);

  useEffect(() => {
    if (!data) return;

    const allJobs: Job[] = data.pages.flatMap((page) => page.data);
    setJobData(allJobs);
  }, [data, setJobData]);

  // Infinite scroll observer
  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMoreRef.current, hasNextPage, fetchNextPage]);

  if (isPending) return <JobCardSkeleton />;
  if (status === "error")
    return <div className="text-red-500">{(error as Error).message}</div>;

  return (
    <div className="flex flex-col gap-4">
      {filteredJobs.length === 0 ? (
        <p className="rounded-xl border border-border/50 bg-card px-6 py-10 text-center text-muted-foreground">
          No jobs match your search. Try adjusting your search or filters.
        </p>
      ) : (
        filteredJobs.map((job) => <JobCard key={job.slug} job={job} />)
      )}

      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 w-full flex justify-center">
          {isFetchingNextPage && <JobCardSkeleton />}
        </div>
      )}
    </div>
  );
}
