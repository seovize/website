import Link from "next/link";
import { founder, site } from "@/lib/site";

export function FounderSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-line bg-navy">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            {/* Left — founder identity */}
            <div className="flex flex-col justify-between border-b border-line p-10 lg:border-b-0 lg:border-r">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">Founder-led studio</p>
                <h2 className="mt-4 font-display text-4xl font-black leading-tight text-cloud">
                  Every strategy personally designed by{" "}
                  <span className="text-mint">
                    Abdul Ghani
                  </span>
                </h2>
                <p className="mt-5 text-sm leading-7 text-mist">
                  {founder.snippet}
                </p>
              </div>
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-xl font-black text-obsidian">
                    AG
                  </div>
                  <div>
                    <p className="font-bold text-cloud">{founder.name}</p>
                    <p className="text-xs text-slate-mid">{founder.title} · {founder.experience} years</p>
                  </div>
                </div>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-obsidian px-5 py-2.5 text-xs font-semibold text-mist transition hover:border-sky/40 hover:text-cloud"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-sky" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View Verified LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Right — expertise grid */}
            <div className="p-10">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">Core expertise</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {founder.expertise.map((item) => (
                  <div key={item.area} className="rounded-2xl border border-line bg-obsidian p-5">
                    <p className="font-mono text-xs font-bold text-mint">{item.area}</p>
                    <p className="mt-2 text-xs leading-6 text-mist">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {founder.knowsAbout.slice(0, 8).map((k) => (
                  <span key={k} className="rounded-full border border-line px-3 py-1 text-[10px] text-slate-mid">{k}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom quote bar */}
          <div className="border-t border-line bg-obsidian px-10 py-5">
            <p className="text-sm text-mist">
              <span className="font-semibold text-cloud">"Every campaign is personally audited</span> — ensuring zero compliance leakage and maximum technical execution precision."
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="ml-3 font-semibold text-mint hover:underline">
                — {founder.name}, Founder · {site.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
