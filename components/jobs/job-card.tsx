import { Job } from "@/types/jobs";
import { Building2, Home, MapPin, Tag, ExternalLink, Clock, Lock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  // Try to parse created_at if it exists, otherwise fallback to a generic time for UI purposes
  const timeAgo = job.created_at ? formatDistanceToNow(new Date(job.created_at), { addSuffix: true }) : "Recently";

  return (
    <div className="flex flex-col md:flex-row group w-full bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300">
      
      {/* Left Pane - Main Content */}
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl border border-border/50 flex items-center justify-center bg-secondary/20 shrink-0 text-xl font-bold text-muted-foreground uppercase overflow-hidden">
            {job.company_name.substring(0, 1)}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {timeAgo}
              </span>
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded flex items-center gap-1">
                ✦ Be an early applicant
              </span>
            </div>
            <Link href={`/job/${job.slug}`} className="hover:text-primary transition-colors inline-block">
              <h2 className="text-lg font-bold tracking-tight text-foreground line-clamp-1">
                {job.title}
              </h2>
            </Link>
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 mt-0.5">
              {job.company_name}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          {job.remote && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Home className="w-4 h-4 shrink-0" />
              <span className="truncate">Remote</span>
            </div>
          )}
          {job.job_types[0] && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Tag className="w-4 h-4 shrink-0" />
              <span className="truncate">{job.job_types[0]}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3 mt-auto items-center">
          <Button asChild variant="outline" className="rounded-full px-6 h-9 font-medium text-sm">
            <Link href={`/job/${job.slug}`}>
              View details
            </Link>
          </Button>
          <div className="flex-1" />
          <Button asChild className="rounded-full px-6 h-9 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm border-none shadow-none">
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </Button>
        </div>
      </div>

    </div>
  );
}