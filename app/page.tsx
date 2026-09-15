import { JobSearchFilters } from "@/components/jobs/job-filters";
import JobListing from "@/components/jobs/job-listing";
import { Button } from "@/components/ui/button";

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

        {/* Feature Banner (NextRaise style) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Get matched to roles like these automatically
            </h2>
            <p className="text-blue-100 mb-6 text-sm md:text-base">
              Free AI resume scoring, tailored resumes, and one-click apply.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 h-12 font-semibold shadow-sm">
              Sign up free
            </Button>
          </div>
          {/* Decorative background blur */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        </div>
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
