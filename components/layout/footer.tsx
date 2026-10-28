import Link from "next/link";
import { Briefcase, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-[1400px] px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-600 dark:text-emerald-400">
              <Briefcase className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground tracking-tight">JobNest</span>
            <span className="text-xs text-muted-foreground ml-1">
              — Find opportunities that match your ambitions.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Find Jobs
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Companies
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} JobNest. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{" "}
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline-block" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
