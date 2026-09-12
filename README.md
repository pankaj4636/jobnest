# Job Board App 🚀

This project allows users to browse job listings fetched from the Arbeitnow API and submit applications via Webhook.site.

## ✨ Features

* **Job Listing:** Displays jobs fetched from the Arbeitnow API.
* **Job Details:** View detailed information for each job.
* **Application Submission:** Apply for jobs using a form that submits data to Webhook.site.
* **Responsive Design:** User interface built with Shadcn UI for a seamless experience across devices.
* **Type Safety:** Fully typed codebase with TypeScript.
* **Efficient Data Fetching:** Utilizes TanStack Query for robust data fetching, caching, and state synchronization.
* **Client-Side State Management:** Leverages Jotai for minimalistic and flexible global state management.
* **Form Handling:** Robust form validation and management using React Hook Form and Zod.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via [Shadcn UI](https://ui.shadcn.com/))
* **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
* **HTTP Client:** [Axios](https://axios-http.com/)
* **Data Fetching & State Management (Server Cache):** [TanStack Query (React Query)](https://tanstack.com/query/latest)
* **Global State Management (Client):** [Jotai](https://jotai.org/)
* **Form Validation:** [Zod](https://zod.dev/)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/)
* **API for Job Listings:** [Arbeitnow API](https://arbeitnow.com/api)
* **API for Application Submissions:** [Webhook.site](https://webhook.site/) (or your specific endpoint)

---

## 📁 Project Structure & Naming Conventions

The project follows a feature-first approach combined with a clear separation of concerns. Key directories include:

* `app/`: Contains all routes, layouts, and pages for the Next.js App Router.
* `atoms/`: Holds Jotai atoms for global state management.
* `providers/`: Houses context providers, including TanStack Query client and any other global providers.
* `components/ui/`: Contains reusable UI components, primarily from Shadcn UI or custom-built atomic components.
* `components/job/`: Contains components specifically related to job listings, job details, and application forms.
* `lib/`: Utility functions and helpers.

**Naming Convention:**
This project adheres to **kebab-case** for file and folder names, inspired by best practices for maintainable and scalable React applications (similar to conventions found in repositories like "bullet-proof-react").

Example:
* `components/job/job-card.tsx`
* `app/(main)/job-listings/page.tsx`

---

---

## ⚠️ Important Notes & Known Limitations

* **Client-Side Operations:**
    * **Search and Filtering:** The Arbeitnow API used for job listings does not natively support search or filtering parameters. Therefore, these functionalities have been implemented **client-side using Jotai** to manage the state of the filtered list.
    * **Fetching Job by Slug/ID:** Similarly, fetching a single job by its slug or ID directly from the API is not supported. This logic is handled on the client-side by finding the job in the list fetched and stored in Jotai.
    * **State Persistence on Refresh:** Consequently, if a user refreshes a job details page, the client-side Jotai state will be cleared. If the job list isn't re-fetched and the specific job isn't present in the initial client-side data, this could lead to a a 404 page.
* **Job Description Rendering:**
    * Job descriptions are fetched from the API and rendered **as-is**. Due to time constraints, rich text rendering (e.g., parsing Markdown) has **not** been implemented. This means descriptions might appear as raw HTML or plain text depending on the API response.

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v18.x or later recommended)
* npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of your project and add the necessary environment variables.

    ```plaintext
    # .env.local

    # Example: API endpoint for job applications
    NEXT_PUBLIC_APPLICATION_WEBHOOK_URL=[https://webhook.site/your-unique-webhook-id](https://webhook.site/your-unique-webhook-id)

    # Example: Arbeitnow API endpoint
    # NEXT_PUBLIC_ARBEITNOW_API_URL=[https://arbeitnow.com/api/job-board-api](https://arbeitnow.com/api/job-board-api)

### Running the Development Server

```bash
pnpm dev