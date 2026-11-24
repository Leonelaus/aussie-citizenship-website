"use client";

import { useLayoutEffect } from "react";
import { applyStoredTheme } from "@/lib/site";

export function ThemeToggle() {
  useLayoutEffect(() => {
    applyStoredTheme();
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // The theme still changes for this visit if storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch colour theme"
      className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-card text-foreground transition-colors hover:bg-sand"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3.5v1.8M12 18.7v1.8M3.5 12h1.8M18.7 12h1.8M6 6l1.3 1.3M16.7 16.7 18 18M18 6l-1.3 1.3M7.3 16.7 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M15.5 3.8A7.8 7.8 0 1 0 20.2 15 6.2 6.2 0 0 1 15.5 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
