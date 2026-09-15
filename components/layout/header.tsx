"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Briefcase, LayoutDashboard, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-[1400px] px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight">JobNest</span>
          </Link>
          <div className="ml-8 hidden md:flex items-center gap-2">
            <Button variant="ghost" className="rounded-full px-4 h-9 bg-secondary/50 text-foreground flex items-center gap-2 hover:bg-secondary">
              <Briefcase className="w-4 h-4" />
              Jobs
            </Button>
            <Button variant="ghost" className="rounded-full px-4 h-9 text-muted-foreground flex items-center gap-2 hover:bg-secondary/50 hover:text-foreground">
              <LayoutDashboard className="w-4 h-4" />
              Job Tracker
            </Button>
            <Button variant="ghost" className="rounded-full px-4 h-9 text-muted-foreground flex items-center gap-2 hover:bg-secondary/50 hover:text-foreground">
              <Bell className="w-4 h-4" />
              Alerts
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden sm:inline-flex rounded-full hover:bg-secondary/50">Log in</Button>
          <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-none font-medium">Sign up free</Button>
        </div>
      </div>
    </header>
  );
}
