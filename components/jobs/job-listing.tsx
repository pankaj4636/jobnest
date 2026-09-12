"use client";

import { useSetAtom } from "jotai";
import { useEffect, useRef } from "react";

import { jobDataAtom } from "@/atoms/job-data";
import { useInfiniteJobs } from "@/services/job-listing";
import JobCardSkeleton from "../ui/job-card-skeleton";
import JobCard from "./job-card";
import { Job } from "@/types/jobs";
import { useAtomValue } from "jotai";
import { filteredJobsAtom } from "@/atoms/job-data";

export default function JobListing() {

  const setJobData = useSetAtom(jobDataAtom);
  const filteredJobs = useAtomValue(filteredJobsAtom);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isPending,
    error,
  } = useInfiniteJobs();

  useEffect(() => {
    if (!data) return;

    console.log(data, "smaple data");

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredJobs.map((job,index) => (
        <JobCard key={`${job.slug}-${index}`} job={job} />
      ))}

      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 col-span-full">
          {isFetchingNextPage && <JobCardSkeleton />}
        </div>
      )}
    </div>
  );
}
