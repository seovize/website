import Link from "next/link";
import { founder, site } from "@/lib/site";

/* Always renders dark — force-dark class pins CSS vars to dark values
   regardless of the page's light/dark mode toggle. */
export function FounderSection() {
  return (
    <section className="force-dark bg-obsidian px-5 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Top: headline + identity */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
              Founder-led studio
            </p>
            <h2 className="font-display text-4xl font-black leading-[1.0] tracking-tight text-cloud md:text-[3.5rem] md:leading-[1.05]">
              Every strategy personally
              <br />
              designed by{" "}
              <span className="text-mint">Abdul Ghani</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.75] text-mist">
              {founder.snippet}
            </p>

            {/* Credential badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                `${founder.experience}+ years experience`,
                "Entity-first SEO",
                "Texas market expert",
                "Google Ads certified",
                "Founder-audited strategy",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-navy px-3 py-1.5 text-[11px] font-medium text-mist"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Founder identity card */}
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-navy p-8 text-center">
            <div className="relative">
              <svg
                viewBox="0 0 80 80"
                className="h-20 w-20"
                aria-label="Abdul Ghani — Founder of Seovize, Texas SEO Expert"
              >
                <circle cx="40" cy="40" r="38" fill="#14B8A6" fillOpacity=".12" stroke="#14B8A6" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="30" fill="#14B8A6" />
                <text x="40" y="36" textAnchor="middle" fontSize="12" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">Abdul</text>
                <text x="40" y="52" textAnchor="middle" fontSize="12" fontWeight="800" fill="white" fontFamily="system-ui, sans-serif">Ghani</text>
              </svg>
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-navy bg-mint">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <div>
              <p className="font-display text-xl font-black text-cloud">{founder.name}</p>
              <p className="mt-0.5 text-xs text-slate-mid">{founder.title}</p>
              <p className="mt-1 font-mono text-[10px] text-mint">{founder.experience} yrs · Founder · {site.name}</p>
            </div>

            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full border border-line bg-obsidian px-4 py-2 text-xs font-semibold text-mist transition hover:border-sky/40 hover:text-cloud"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-sky" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Verified LinkedIn
            </a>
          </div>
        </div>

        {/* Expertise grid */}
        <div className="mt-14 border-t border-line pt-10">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-mid">
            Core expertise
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {founder.expertise.map((item) => (
              <div key={item.area} className="rounded-xl border border-line bg-navy p-5">
                <p className="font-mono text-xs font-bold text-mint">{item.area}</p>
                <p className="mt-2 text-xs leading-[1.7] text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote bar */}
        <div className="mt-10 rounded-2xl border border-line bg-navy px-8 py-6">
          <p className="text-sm leading-[1.75] text-mist">
            <span className="font-semibold text-cloud">
              &ldquo;Every campaign is personally audited
            </span>{" "}
            — ensuring zero compliance leakage and maximum technical execution precision.&rdquo;
            <Link
              href="/about"
              className="ml-3 font-semibold text-mint hover:underline"
            >
              — {founder.name}, Founder · {site.name}
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
