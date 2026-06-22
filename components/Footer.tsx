import Link from "next/link";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-12 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white font-black text-slate-950">SV</span>
            <span className="font-bold uppercase tracking-[0.28em]">Seovize</span>
          </div>
          <p className="max-w-md text-sm leading-6">
            SEO, semantic SEO, social media management, and conversion website systems for growth-focused brands.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">Explore</p>
          <div className="grid gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">Contact</p>
          <a href={`mailto:${site.email}`} className="text-sm hover:text-white">{site.email}</a>
          <p className="mt-6 text-xs">© {new Date().getFullYear()} Seovize. Built for clarity, speed, and qualified demand.</p>
        </div>
      </div>
    </footer>
  );
}
