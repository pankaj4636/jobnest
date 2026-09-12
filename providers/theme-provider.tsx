"use client";

import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { themeAtom } from "@/atoms/theme";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
