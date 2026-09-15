"use client";

import { useAtom } from "jotai";
import {
  searchQueryAtom,
  filterTypeAtom,
  remoteOnlyAtom,
} from "@/atoms/job-data";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Filter } from "lucide-react";

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Internship",
  "Freelance",
];

export function JobSearchFilters() {
  const [query, setQuery] = useAtom(searchQueryAtom);
  const [filters, setFilters] = useAtom(filterTypeAtom);
  const [remoteOnly, setRemoteOnly] = useAtom(remoteOnlyAtom);

  const toggleType = (type: string) => {
    setFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="w-full bg-card rounded-2xl p-4 shadow-sm border border-border/50 mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search title or company..."
          className="w-full pl-10 h-12 bg-secondary/30 border-secondary/50 rounded-xl text-base focus-visible:ring-primary focus-visible:bg-background transition-colors"
        />
      </div>

      <div className="flex gap-3 flex-wrap items-center overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex items-center gap-2 border-r pr-3 mr-1 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" /> Filters
        </div>
        
        {jobTypes.map((type) => {
          const isActive = filters.includes(type);
          return (
            <button
              key={type}
              onClick={() => toggleType(type)}
              className={`flex items-center gap-1.5 px-4 h-9 rounded-full text-sm font-medium transition-all duration-200 border ${
                isActive 
                  ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                  : "bg-background border-border text-foreground hover:bg-secondary/80"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              {type}
            </button>
          );
        })}

        <button
          onClick={() => setRemoteOnly((prev) => !prev)}
          className={`flex items-center gap-1.5 px-4 h-9 rounded-full text-sm font-medium transition-all duration-200 border ${
            remoteOnly 
              ? "bg-primary text-primary-foreground border-primary shadow-sm" 
              : "bg-background border-border text-foreground hover:bg-secondary/80"
          }`}
        >
          <MapPin className="w-3.5 h-3.5" />
          Remote Only
        </button>
      </div>
    </div>
  );
}
