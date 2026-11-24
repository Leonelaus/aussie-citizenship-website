"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { AustralianFlag } from "@/components/australian-flag";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }, [pathname]);

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:h-[4.5rem] sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-md"
          onClick={closeMenu}
        >
          <AustralianFlag className="h-6 w-12 shrink-0 rounded-[3px] ring-1 ring-black/10" />
          <span className="truncate font-display text-lg leading-none tracking-tight sm:text-xl">
            Aussie Citizenship
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-muted transition-colors hover:bg-sand hover:text-foreground aria-[current=page]:bg-sand aria-[current=page]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <details ref={menuRef} className="md:hidden">
            <summary className="flex h-11 cursor-pointer list-none items-center rounded-full border border-line bg-card px-3.5 text-sm font-semibold">
              Menu
            </summary>
            <nav
              id="mobile-menu"
              aria-label="Mobile"
              className="absolute inset-x-0 top-full z-50 border-b border-line bg-background px-4 py-3 shadow-[0_24px_40px_-28px_rgba(0,0,0,0.45)]"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground hover:bg-sand aria-[current=page]:bg-sand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
