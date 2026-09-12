import axios from "axios";

const jobListingInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JOB_LISTING_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

jobListingInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

const jobApplyInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JOB_APPLY_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "multipart/form-data",
  },
});

jobApplyInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export { jobListingInstance, jobApplyInstance };
