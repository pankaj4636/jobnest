import { JobSearchFilters } from "@/components/jobs/job-filters";
import JobListing from "@/components/jobs/job-listing";

export default function HomePage() {
  return (
    <div className="mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Job Board</h1>
        <p className="text-muted-foreground mt-1">
          Browse the latest jobs and find your next opportunity.
        </p>
      </header>

      <section>
        <JobSearchFilters />
        <JobListing />
      </section>
    </div>
  );
}
