"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Seovize home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint text-lg font-black text-obsidian transition group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(20,184,166,0.5)]">
            SV
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.32em] text-cloud">Seovize</span>
            <span className="hidden text-xs text-mist sm:block">Search + Social Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-mist lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cloud">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button href="/contact" size="sm">Get roadmap</Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line text-mist transition hover:bg-white/5 hover:text-cloud lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-navy px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-mist transition hover:bg-white/5 hover:text-cloud"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 border-t border-line/40 pt-4">
            <Button href="/contact" className="w-full justify-center">Get a growth roadmap</Button>
          </div>
        </div>
      )}
    </header>
  );
}
