import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Job } from "@/types/jobs";
import { Building2, Home, MapPin, Tag, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col flex-1 p-4">
        <div className="mb-4">
          <Link href={`/job/${job.slug}`} className="hover:underline">
            <h2 className="text-lg font-semibold mb-1 line-clamp-2">
              {job.title}
            </h2>
          </Link>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
            <Building2 className="w-4 h-4 text-gray-500 shrink-0" />
            <span className="truncate">{job.company_name}</span>
          </p>
          <p className="text-sm flex items-center gap-2 mt-1">
            <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
            <span className="truncate">{job.location}</span>
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mt-auto">
          {job.remote && (
            <Badge
              variant="outline"
              className="bg-gray-100 text-gray-700 border-gray-300 flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Remote
            </Badge>
          )}

          {job.job_types.map((type) => (
            <Badge
              key={type}
              variant="secondary"
              className="bg-blue-100 text-blue-800 border-blue-200 flex items-center gap-1"
            >
              <Tag className="w-3.5 h-3.5" />
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2 mt-auto">
        <Button asChild variant="default" className="flex-1">
          <a href={job.url} target="_blank" rel="noopener noreferrer">
            Apply Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/job/${job.slug}`}>
            Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}