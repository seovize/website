import Link from "next/link";
import { navItems } from "@/lib/site";
import { Button } from "@/components/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Seovize home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-lg font-black text-slate-950 transition group-hover:rotate-3">
            SV
          </span>
          <span>
            <span className="block text-sm font-bold uppercase tracking-[0.32em] text-white">Seovize</span>
            <span className="block text-xs text-slate-400">Search + Social Systems</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact">Get roadmap</Button>
        </div>
      </div>
    </header>
  );
}
