"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Briefcase, LayoutDashboard, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/10 text-emerald-600 dark:text-emerald-400">
              <Briefcase className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">JobNest</span>
          </Link>

          <nav className="ml-8 hidden items-center gap-2 md:flex">
            <Button variant="ghost" className="h-9 rounded-full bg-secondary/60 px-4 text-foreground hover:bg-secondary">
              <Briefcase className="h-4 w-4" />
              <span className="font-medium">Jobs</span>
            </Button>
            <Button variant="ghost" className="h-9 rounded-full px-4 text-muted-foreground hover:bg-secondary/50 hover:text-foreground">
              <LayoutDashboard className="h-4 w-4" />
              <span className="font-medium">Job Tracker</span>
            </Button>
            <Button variant="ghost" className="h-9 rounded-full px-4 text-muted-foreground hover:bg-secondary/50 hover:text-foreground">
              <Bell className="h-4 w-4" />
              <span className="font-medium">Alerts</span>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="ghost" className="hidden rounded-full px-3 hover:bg-secondary/50 sm:inline-flex">
            Log in
          </Button>
          <Button className="rounded-full bg-emerald-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700">
            Sign up free
          </Button>
        </div>
      </div>
    </header>
  );
}
