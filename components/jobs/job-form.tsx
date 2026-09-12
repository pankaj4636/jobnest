"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobApplyInstance } from "@/lib/axios";

const applyJobSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  linkedin: z.string().url("Invalid LinkedIn URL"),
  resume: z
    .any()
    .refine((file) => file?.length === 1, "Resume is required")
    .refine(
      (file) => file && file[0].size <= 5 * 1024 * 1024,
      "File must be ≤ 5MB"
    )
    .refine(
      (file) =>
        file &&
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(file[0].type),
      "Only PDF, DOC, or DOCX allowed"
    ),
});

type ApplyJobFormValues = z.infer<typeof applyJobSchema>;

export default function ApplyJobForm() {
  const form = useForm<ApplyJobFormValues>({
    resolver: zodResolver(applyJobSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedin: "",
      resume: null,
    },
  });

  async function onSubmit(values: ApplyJobFormValues) {

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("linkedin", values.linkedin);
    formData.append("resume", values.resume[0]);

    const toastId = toast.loading("Submitting application...");

    try {
      await jobApplyInstance.post("/api/apply", formData);

      toast.success("Application submitted successfully!", { id: toastId });
      form.reset();
    } catch (error: any) {
      toast.error("Submission failed. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LinkedIn */}
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn URL</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Resume Upload */}
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume Upload</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
