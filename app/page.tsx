import { JobSearchFilters } from "@/components/jobs/job-filters";
import JobListing from "@/components/jobs/job-listing";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Discover your next career move
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          We track top roles across thousands of companies. Find live openings with salary details, remote filters, and instant match scoring.
        </p>

      </section>

      {/* Main Content (Filters and Listings) */}
      <section className="max-w-[1400px] mx-auto px-4 pb-20">
        <div className="mb-4 text-sm font-medium text-muted-foreground flex items-center justify-between">
          <p>Showing latest opportunities</p>
        </div>
        
        <JobSearchFilters />
        
        <div className="mt-8">
          <JobListing />
        </div>
      </section>
    </div>
  );
}
