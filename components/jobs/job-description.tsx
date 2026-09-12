import DOMPurify from "dompurify";

export default function JobDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div
      className="prose prose-neutral max-w-none"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
}
