"use client";

import { jobDataAtom } from "@/atoms/job-data";
import JobDetail from "@/components/jobs/job-detail";
import { Job } from "@/types/jobs";
import { useAtomValue } from "jotai";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const jobs = useAtomValue(jobDataAtom);

  const job = jobs.find((job: Job) => job.slug === slug);

  if (!job) {
    return notFound();
  }

  return (
    <div className="p-6 mx-auto space-y-6">
      <section className="pt-4">
        <Link href="/" className="hover:underline">
          ← Back to job listings
        </Link>
      </section>
      <JobDetail job={job} />
    </div>
  );
}
