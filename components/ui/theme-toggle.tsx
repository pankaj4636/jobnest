"use client";

import { useAtom } from "jotai";
import { themeAtom, toggleThemeAtom } from "@/atoms/theme";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [theme] = useAtom(themeAtom);
  const [, toggleTheme] = useAtom(toggleThemeAtom);

  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        onClick={toggleTheme}
        variant="outline"
        className={cn(
          "rounded-full w-12 h-12 p-0 shadow-md border border-border",
          "transition-colors duration-300",
          theme === "dark"
            ? "bg-background text-yellow-300"
            : "bg-background text-gray-800"
        )}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}
