import Link from "next/link";
import { Briefcase, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-[1400px] px-4 py-6 md:py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:items-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-600 dark:text-emerald-400">
                <Briefcase className="h-4 w-4" />
              </div>
              <span className="font-semibold text-foreground tracking-tight">JobNest</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Find opportunities that match your ambitions.
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground md:justify-end">
            <Link href="/" className="transition-colors hover:text-foreground">
              Find Jobs
            </Link>
            <Link href="/" className="transition-colors hover:text-foreground">
              Companies
            </Link>
            <Link href="/" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-2 border-t border-border/20 pt-5 text-[11px] text-muted-foreground sm:flex-row">
          <p>© {currentYear} JobNest. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
