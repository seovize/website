import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";

export interface IndustryPageData {
  slug: string;
  industry: string;
  eyebrow: string;
  heroAnswer: string;
  intro: string;
  challenges: { title: string; desc: string }[];
  services: { title: string; desc: string }[];
  processSteps: { name: string; text: string }[];
  stats: { stat: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

export function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Industries", href: "/industries" },
          { name: data.industry, href: `/industries/${data.slug}` },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-mint/[0.06] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">{data.eyebrow}</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO & Social Media for<br />
            <span className="text-mint">{data.industry}</span>
          </h1>

          <div className="speakable mt-8 max-w-3xl rounded-[1.5rem] border border-mint/20 bg-navy px-7 py-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-mint">Quick answer</p>
            <p className="text-base leading-8 text-cloud">{data.heroAnswer}</p>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">{data.intro}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[52px] items-center rounded-full bg-orange px-7 text-sm font-bold text-white transition hover:bg-orange/90"
            >
              Get a {data.industry} Strategy →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-[52px] items-center rounded-full border border-line px-7 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              See packages & pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CHALLENGES ───────────────────────────── */}
      <Section eyebrow="Industry context" title={`What makes ${data.industry} SEO different.`}>
        <div className="grid gap-4 md:grid-cols-3">
          {data.challenges.map((c) => (
            <div key={c.title} className="rounded-[2rem] border border-line bg-navy p-7">
              <div className="mb-4 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-xl font-black text-cloud">{c.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <Section variant="navy" eyebrow="What we deliver" title={`Services for ${data.industry}.`}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((s) => (
            <div key={s.title} className="flex flex-col rounded-[2rem] border border-line bg-obsidian p-6">
              <div className="mb-4 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-base font-black text-cloud">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <Section eyebrow="Process" title={`How we build authority for ${data.industry}.`}>
        <div className="space-y-4">
          {data.processSteps.map((step, i) => (
            <div key={step.name} className="flex gap-6 rounded-[2rem] border border-line bg-navy p-7">
              <span className="font-mono grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint text-lg font-bold text-obsidian">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-black text-cloud">{step.name}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── STATS ────────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Why Seovize" title="Expert strategy. Founder-led.">
        <div className="grid gap-4 md:grid-cols-3">
          {data.stats.map((s) => (
            <div key={s.label} className="rounded-[2rem] border border-line bg-obsidian p-8 text-center">
              <p className="font-mono text-4xl font-bold text-mint">{s.stat}</p>
              <p className="mt-2 font-display text-lg font-black text-cloud">{s.label}</p>
              <p className="mt-2 text-xs text-slate-mid">{s.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-0 overflow-hidden rounded-[2rem] border border-line bg-navy md:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center gap-3 border-b border-line bg-obsidian p-8 text-center md:w-56 md:border-b-0 md:border-r">
            <Image
              src="/images/abdul-ghani.jpg"
              alt="Abdul Ghani — Founder of Seovize, semantic SEO and social media specialist"
              width={72}
              height={72}
              className="h-18 w-18 rounded-full object-cover ring-2 ring-mint/30"
            />
            <div>
              <p className="font-display text-lg font-black text-cloud">Abdul Ghani</p>
              <p className="mt-0.5 text-xs text-slate-mid">Founder · Seovize</p>
              <p className="mt-1 font-mono text-[10px] text-mint">20+ years · SEO Specialist</p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-sm leading-8 text-mist">
              Every {data.industry} strategy at Seovize is personally designed by Abdul Ghani — not passed to a junior account manager or templated from another industry&apos;s playbook. {data.industry} businesses have specific compliance considerations, buyer behavior patterns, and competitive dynamics that require genuine expertise to navigate effectively.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title={`${data.industry} SEO questions answered.`}>
        <div className="max-w-3xl">
          <FAQAccordion faqs={data.faqs} />
        </div>
      </Section>

      {/* ── RELATED PAGES ─────────────────────────────────── */}
      <Section eyebrow="Related resources" title="Explore related services and locations.">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {data.relatedPages.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-2xl border border-line bg-navy px-5 py-4 text-sm font-semibold text-mist transition hover:border-mint/30 hover:text-cloud"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline={`Ready to grow your ${data.industry} business online?`}
        subhead="Book a free Growth Roadmap call — a structured review of your current SEO and social media presence, built specifically for your industry."
        primaryLabel={`Get a ${data.industry} Strategy`}
        primaryHref="/contact"
      />
    </>
  );
}
