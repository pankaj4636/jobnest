"use client";

import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

export const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

export const toggleThemeAtom = atom(null, (get, set) => {
  const current = get(themeAtom);
  const next = current === "light" ? "dark" : "light";
  set(themeAtom, next);

  if (typeof window !== "undefined") {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(next);
  }
});
