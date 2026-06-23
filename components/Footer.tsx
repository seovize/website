import Link from "next/link";
import { services, site } from "@/lib/site";

const footerServices = services.slice(0, 5);

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/seovize" },
  { label: "Instagram", href: "https://www.instagram.com/seovizeofficial/" },
  { label: "Behance", href: "https://www.behance.net/seovize" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-navy px-5 pb-8 pt-14 text-mist">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 text-cloud">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint font-black text-obsidian">SV</span>
              <span className="font-bold uppercase tracking-[0.28em]">Seovize</span>
            </div>
            <p className="max-w-xs text-sm leading-7">
              Semantic SEO, social media management, and conversion-ready website systems for growth-focused U.S. brands.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-mid transition hover:text-mint"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cloud">Services</p>
            <div className="grid gap-3 text-sm">
              {footerServices.map((s) => (
                <Link key={s.href} href={s.href} className="transition hover:text-cloud">{s.title}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cloud">Company</p>
            <div className="grid gap-3 text-sm">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-cloud">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-cloud">Contact</p>
            <a href={`mailto:${site.email}`} className="break-all text-sm transition hover:text-mint">{site.email}</a>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-cloud transition hover:bg-orange/90"
              >
                Get a roadmap
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line/40 pt-6 text-xs text-slate-mid">
          <p>© {new Date().getFullYear()} Seovize. Built for clarity, speed, and qualified demand.</p>
          <div className="flex gap-5">
            <Link href="/locations/texas" className="hover:text-cloud">Texas</Link>
            <Link href="/industries" className="hover:text-cloud">Industries</Link>
            <Link href="/compare/seo-agency-vs-freelancer" className="hover:text-cloud">Compare</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
