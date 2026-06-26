import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/Section";
import { founder } from "@/lib/site";

export interface CityPageData {
  service: "seo" | "social-media";
  city: string;
  slug: string;
  market: string;
  marketDetail: string;
  audienceProfile: string;
  heroAnswer: string;
  deliverables: { title: string; desc: string }[];
  processSteps: { name: string; text: string }[];
  stats: { stat: string; label: string; note: string }[];
  faqs: { q: string; a: string }[];
  relatedPages: { label: string; href: string }[];
}

export function CityServicePage({ data }: { data: CityPageData }) {
  const serviceLabel =
    data.service === "seo" ? "SEO Services" : "Social Media Management";
  const serviceShort = data.service === "seo" ? "SEO" : "Social Media";
  const auditLabel = data.service === "seo" ? "SEO Audit" : "Social Media Audit";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Texas", href: "/locations/texas" },
          {
            name: `${data.city} ${serviceLabel}`,
            href: `/locations/texas/${data.slug}`,
          },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-mint/[0.06] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
            {data.city}, Texas · {serviceLabel}
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            {serviceLabel} in{" "}
            <span className="text-mint">{data.city}, Texas</span>
          </h1>

          {/* Featured snippet answer box — .speakable triggers Speakable schema */}
          <div className="speakable mt-8 rounded-2xl border border-mint/25 bg-mint/[0.05] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">
              Quick Answer
            </p>
            <p className="text-base leading-7 text-cloud">{data.heroAnswer}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90"
            >
              Get a Free {data.city} {auditLabel} →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market context ────────────────────────────────────────────── */}
      <Section
        eyebrow={`${data.city} market`}
        title={`The ${data.city} ${serviceLabel.toLowerCase()} landscape.`}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-mint">
              Market Profile
            </p>
            <h2 className="mb-3 font-display text-lg font-black text-cloud">
              {data.market}
            </h2>
            <p className="text-sm leading-7 text-mist">{data.marketDetail}</p>
          </div>
          <div className="rounded-[2rem] border border-line bg-navy p-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-mint">
              Audience Profile
            </p>
            <p className="text-sm leading-7 text-mist">{data.audienceProfile}</p>
          </div>
        </div>
      </Section>

      {/* ── Deliverables ─────────────────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="What you get"
        title={`${serviceLabel} for ${data.city} businesses — what's included.`}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-[2rem] border border-line bg-obsidian p-6"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-mist">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Process — HowTo schema-eligible ───────────────────────────── */}
      <Section
        eyebrow="How it works"
        title={`How we deliver ${serviceLabel.toLowerCase()} for ${data.city} businesses.`}
      >
        <div className="max-w-3xl">
          <ol className="space-y-7">
            {data.processSteps.map((step, i) => (
              <li key={step.name} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mint/40 font-mono text-xs font-bold text-mint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-base font-black text-cloud">
                    {step.name}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-mist">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      {data.stats.length > 0 && (
        <Section variant="navy" eyebrow="Why Seovize" title={`${serviceShort} expertise for ${data.city}.`}>
          <div className="grid gap-4 sm:grid-cols-3">
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[2rem] border border-line bg-obsidian p-7 text-center"
              >
                <p className="font-mono text-3xl font-bold text-mint">{s.stat}</p>
                <p className="mt-2 font-display text-sm font-black text-cloud">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-mist">{s.note}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ── Founder credential ────────────────────────────────────────── */}
      <Section
        eyebrow="Expert strategy"
        title={`${data.city} ${serviceLabel.toLowerCase()} led by Abdul Ghani.`}
      >
        <div className="max-w-2xl rounded-[2rem] border border-line bg-navy p-8">
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint/10 font-display text-lg font-black text-mint">
              AG
            </div>
            <div>
              <p className="font-display font-black text-cloud">{founder.name}</p>
              <p className="text-xs text-mint">
                {founder.title} · {founder.experience} years experience
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-mist">{founder.snippet}</p>
          <Link
            href="/about"
            className="mt-5 inline-flex text-sm font-semibold text-mint hover:underline"
          >
            View full expertise →
          </Link>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="FAQ"
        title={`${data.city} ${serviceLabel.toLowerCase()} questions answered.`}
      >
        <div className="max-w-3xl">
          <FAQAccordion faqs={data.faqs} />
        </div>
      </Section>

      {/* ── Related pages ─────────────────────────────────────────────── */}
      {data.relatedPages.length > 0 && (
        <Section eyebrow="Also explore" title="Related Texas pages.">
          <div className="flex flex-wrap gap-3">
            {data.relatedPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="rounded-full border border-line bg-navy px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
              >
                {p.label} →
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner
        headline={`Ready to grow your ${data.city} business online?`}
        subhead={`Get a free ${data.city} ${auditLabel} — a structured review built specifically for ${data.city}'s market and your competitive landscape.`}
        primaryLabel={`Get Free ${data.city} ${auditLabel}`}
        primaryHref="/contact"
      />
    </>
  );
}
