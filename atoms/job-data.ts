// atoms/job-data.ts
import { atom } from "jotai";
import { Job } from "@/types/jobs";

export const jobDataAtom = atom<Job[]>([]);

export const searchQueryAtom = atom<string>("");

export const filterTypeAtom = atom<string[]>([]);

export const remoteOnlyAtom = atom<boolean>(false);

export const filteredJobsAtom = atom((get) => {
  const query = get(searchQueryAtom).toLowerCase();
  const selectedTypes = get(filterTypeAtom);
  const remoteOnly = get(remoteOnlyAtom);
  const jobs = get(jobDataAtom);

  return jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(query) ||
      job.company_name.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query);

    const matchesType =
      selectedTypes.length === 0 ||
      job.job_types.some((type) => selectedTypes.includes(type));

    const matchesRemote = !remoteOnly || job.remote === true;

    return matchesSearch && matchesType && matchesRemote;
  });
});
