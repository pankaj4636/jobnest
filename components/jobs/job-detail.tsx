import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Job } from "@/types/jobs";
import ApplyJobForm from "./job-form";
import JobDescription from "./job-description";
import { Briefcase, Building2, MapPin, Home, Tag, Hash } from "lucide-react";

interface JobDetailPageProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailPageProps) {
  return (
    <section className="max-w-5xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-2xl items-start font-bold flex gap-2 text-gray-900 dark:text-gray-100">
        <Briefcase className="shrink-0 w-6 h-6 text-blue-600 dark:text-blue-400 mt-2" />
        {job.title}
      </h1>
      <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        {job.company_name}
      </p>
      <p className="text-sm flex items-center gap-2 text-gray-500 dark:text-gray-400">
        <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        {job.location}
      </p>

      <div className="flex flex-wrap gap-2">
        {job.remote && (
          <Badge
            variant="outline"
            className="flex items-center gap-1 text-blue-700 border-blue-200 dark:text-blue-400 dark:border-blue-700"
          >
            <Home className="w-3.5 h-3.5" />
            Remote
          </Badge>
        )}
        {job.job_types.map((type) => (
          <Badge
            key={type}
            className="flex items-center gap-1 text-green-500 bg-green-100  border-green-200 dark:text-red-300 dark:border-red-700"
          >
            <Tag className="w-3.5 h-3.5" />
            {type}
          </Badge>
        ))}

        {job.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="flex items-center gap-1 text-gray-700 border-gray-300 dark:text-gray-300 dark:border-gray-700"
          >
            <Hash className="w-3.5 h-3.5" />
            {tag}
          </Badge>
        ))}
      </div>

      <JobDescription description={job.description} />

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Apply Now
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-lg flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <Briefcase className="w-5 h-5" />
              Apply for {job.title}
            </DialogTitle>
          </DialogHeader>
          <ApplyJobForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}
