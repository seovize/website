import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";
import { founder } from "@/lib/site";
import type { IndustryData } from "@/lib/industry-data";

const PRIORITY_COLOR: Record<string, string> = {
  Primary: "text-mint border-mint/30 bg-mint/[0.07]",
  Secondary: "text-sky border-sky/30 bg-sky/[0.07]",
  Supporting: "text-mist border-line bg-white/[0.03]",
};

export function IndustryServicePage({ data }: { data: IndustryData }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Industries", href: "/industries" },
          { name: `${data.industry} Social Media`, href: `/industries/${data.slug}` },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky/[0.04] blur-[100px]" />
        <div className="pointer-events-none absolute -left-10 top-20 h-64 w-64 rounded-full bg-mint/[0.05] blur-[80px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
            Texas · {data.industry} industry
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            Social Media Management<br />
            for{" "}
            <span className="text-mint">{data.plural} in Texas</span>
          </h1>
          <p className="mt-4 text-base font-semibold italic text-mist/80 md:text-lg">{data.tagline}</p>

          {/* Speakable answer box */}
          <div className="speakable mt-8 rounded-2xl border border-mint/20 bg-mint/[0.04] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">{data.heroAnswer}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90"
            >
              Get a free Texas audit →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              See pricing from $1,100/mo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Expert insight ───────────────────────────────── */}
      <Section eyebrow="The real challenge" title={`Why ${data.industry} social media is different.`}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
            <p className="text-sm leading-[1.9] text-mist">{data.insight}</p>
          </div>
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-4 h-1 w-10 rounded-full bg-sky" />
            <p className="text-sm leading-[1.9] text-mist">{data.insightDetail}</p>
          </div>
        </div>
      </Section>

      {/* ── Platform strategy ───────────────────────────── */}
      <Section variant="navy" eyebrow="Platform strategy" title={`The right platforms for ${data.plural}.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {data.platforms.map((p) => (
            <div key={p.name} className="rounded-[2rem] border border-line bg-obsidian p-7">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-xl font-black text-cloud">{p.name}</p>
                <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${PRIORITY_COLOR[p.priority]}`}>
                  {p.priority}
                </span>
              </div>
              <p className="text-sm leading-[1.8] text-mist">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Content types ───────────────────────────────── */}
      <Section eyebrow="What we create" title="Content that converts followers into clients.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.contentTypes.map((ct, i) => (
            <div key={ct.title} className="rounded-[2rem] border border-line bg-navy p-7">
              <span className="font-mono text-xs font-bold text-mint/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-black text-cloud">{ct.title}</h3>
              <p className="mt-2 text-sm leading-[1.8] text-mist">{ct.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Deliverables ─────────────────────────────────── */}
      <Section variant="navy" eyebrow="What's included" title="Every deliverable, every month.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.deliverables.map((d) => (
            <div key={d.title} className="flex gap-4 rounded-[2rem] border border-line bg-obsidian p-6">
              <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-mint/20 ring-1 ring-mint/40" />
              <div>
                <p className="font-semibold text-cloud">{d.title}</p>
                <p className="mt-1 text-sm leading-[1.7] text-mist">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Texas context ───────────────────────────────── */}
      <Section eyebrow="Texas market" title={`${data.industry} social media across Texas.`}>
        <div className="rounded-[2rem] border border-line bg-navy p-8 md:p-10">
          <p className="text-base leading-[1.9] text-mist">{data.texasContext}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-8 sm:grid-cols-4">
            {["Houston", "Dallas", "Austin", "San Antonio"].map((city) => (
              <Link
                key={city}
                href={`/locations/texas/${city.toLowerCase().replace(" ", "-")}-social-media`}
                className="group text-center"
              >
                <p className="font-display text-lg font-black text-cloud transition group-hover:text-mint">{city}</p>
                <p className="mt-1 text-xs text-slate-mid">View social media page →</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Founder card ─────────────────────────────────── */}
      <Section variant="navy" eyebrow="Who you work with" title="Founder-led strategy. Senior expertise.">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-obsidian">
          <div className="grid md:grid-cols-[auto_1fr] md:divide-x md:divide-line">
            <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
              <div className="relative">
                <Image
                  src="/images/abdul-ghani.jpg"
                  alt={`${founder.name} — Seovize founder and ${data.industry} social media strategist`}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
                />
                <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-obsidian bg-mint">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                    <path d="M1 5l3.5 3.5 6.5-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div>
                <p className="font-display text-xl font-black text-cloud">{founder.name}</p>
                <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
                <p className="mt-1 font-mono text-xs text-mint">{founder.experience}+ years</p>
              </div>
            </div>
            <div className="p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">
                Why founder-led matters for {data.industry.toLowerCase()} social media
              </p>
              <p className="text-sm leading-[1.9] text-mist">
                At Seovize, {founder.name} personally designs every social media strategy — including your {data.industry.toLowerCase()} content plan. There is no account manager passing a brief to a junior writer who has never run a campaign. Every platform recommendation, every content angle, and every piece of copy reflects 20+ years of digital marketing expertise applied to your specific Texas market and industry context.
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-mist">
                When you work with Seovize, you work with the person who built the strategy. That direct line between strategy and execution is why our clients see results that agency-managed social media accounts routinely miss.
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center text-sm font-semibold text-mint hover:underline"
              >
                About {founder.name} →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title={`${data.industry} social media questions answered.`}>
        <div className="max-w-3xl">
          <FAQAccordion faqs={data.faqs} />
        </div>
      </Section>

      {/* ── Related pages ───────────────────────────────── */}
      <Section variant="navy" eyebrow="Related services" title="Explore the full Texas SEO and social system.">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {data.relatedPages.map((rp) => (
            <Link
              key={rp.href}
              href={rp.href}
              className="flex items-center justify-between rounded-2xl border border-line bg-obsidian px-5 py-4 text-sm font-semibold text-mist transition hover:border-mint/30 hover:text-cloud"
            >
              {rp.label}
              <span className="text-mint/60">→</span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline={`Ready to grow your Texas ${data.industry.toLowerCase()} business online?`}
        subhead={`Get a free growth roadmap built specifically for ${data.plural.toLowerCase()} in your Texas market — Houston, Dallas, Austin, or San Antonio.`}
        primaryLabel="Get My Free Audit"
        primaryHref="/contact"
      />
    </>
  );
}
