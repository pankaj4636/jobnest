"use client";

import { useAtom } from "jotai";
import {
  searchQueryAtom,
  filterTypeAtom,
  remoteOnlyAtom,
} from "@/atoms/job-data";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

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
    <div className="space-y-4 p-4">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jobs by title, company, location..."
      />

      <div className="flex gap-4 flex-wrap items-center">
        {jobTypes.map((type) => (
          <label key={type} className="flex items-center gap-2">
            <Checkbox
              checked={filters.includes(type)}
              onCheckedChange={() => toggleType(type)}
            />
            <span>{type}</span>
          </label>
        ))}

        <label className="flex items-center gap-2">
          <Checkbox
            checked={remoteOnly}
            onCheckedChange={() => setRemoteOnly((prev) => !prev)}
          />
          <span>Remote</span>
        </label>
      </div>
    </div>
  );
}
