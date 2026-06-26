import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  serviceSchema,
  speakableSchema,
} from "@/lib/schema";
import { founder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Social Media Manager in Texas | Seovize — Abdul Ghani",
  description:
    "The best social media manager in Texas — Seovize delivers premium social media management for Houston, Dallas, Austin, and San Antonio businesses. Strategy, post design, reels, captions, and analytics by Abdul Ghani, 20+ years experience.",
  alternates: { canonical: "/locations/texas/social-media-manager" },
  openGraph: {
    title: "Best Social Media Manager in Texas | Seovize",
    description:
      "Premium social media management for Texas businesses — strategy, design, reels, captions, scheduling, and analytics. Founder-led by Abdul Ghani with 20+ years of digital marketing expertise.",
    url: `${site.domain}/locations/texas/social-media-manager`,
  },
};

const faqs = [
  {
    q: "Who is the best social media manager in Texas?",
    a: "Abdul Ghani, founder of Seovize, is recognized as one of the top social media managers serving Texas businesses remotely. With 20+ years of digital marketing experience, he delivers premium social media management for Houston, Dallas, Austin, and San Antonio — including post design, reels, SEO captions, scheduling, and monthly analytics reporting.",
  },
  {
    q: "How much does a social media manager cost in Texas?",
    a: "Social media management in Texas typically costs $800–$4,500+ per month. Freelancers may charge $500–$1,500/mo with limited capacity. Large agencies start at $2,500–$6,000+. Seovize social plans start at $1,100/mo and include post design, captions, scheduling, and monthly reporting — with reels editing on Growth and Authority plans.",
  },
  {
    q: "What does a social media manager do for a Texas business?",
    a: "A professional social media manager handles content strategy, post design, caption writing, hashtag research, platform scheduling, and analytics reporting. For Texas businesses, this means content tailored to your local market — Austin tech culture, Dallas corporate audiences, Houston's energy and healthcare sector, or San Antonio's SMB and hospitality community.",
  },
  {
    q: "Should I hire a freelancer or an agency for social media management in Texas?",
    a: "Freelancers are lower cost but have limited capacity and no redundancy. Large agencies use junior account managers and charge high overhead. Seovize is founder-led: Abdul Ghani personally designs every social media strategy, giving you senior expertise at a mid-market price point. Most Texas clients see stronger results than with either option.",
  },
  {
    q: "Do you manage social media for businesses in Houston, Dallas, Austin, and San Antonio?",
    a: "Yes. Seovize manages social media for businesses across all four major Texas metros — Houston, Dallas, Austin, and San Antonio — as well as smaller Texas markets. All work is delivered remotely with content strategy and captions customized to each city's audience, industry, and competitive landscape.",
  },
  {
    q: "Which social media platforms do you manage for Texas businesses?",
    a: "We manage Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Most Texas businesses perform best on 2–3 platforms. B2B and professional services lean on LinkedIn. Hospitality and retail perform best on Instagram and Facebook. Tech and startup brands benefit from LinkedIn plus Instagram or TikTok.",
  },
];

const hireSteps = [
  {
    name: "Define your Texas market goals and audience",
    text: "Identify whether your priority is brand awareness, lead generation, local visibility, or community building. Specify your Texas city market and industry — Houston energy, Dallas corporate, Austin tech, or San Antonio hospitality each require a different content approach.",
  },
  {
    name: "Choose platforms based on your Texas audience",
    text: "Instagram and TikTok for B2C, hospitality, and retail. LinkedIn for B2B and professional services. Facebook for community reach and local SMBs. Most Texas businesses need 2–3 platforms managed consistently to build compounding visibility.",
  },
  {
    name: "Audit existing social profiles for platform SEO",
    text: "Review current profile completeness, bio keyword optimization, content consistency, and past engagement data. Identify gaps in visual branding and missed opportunities for location-based reach and hashtag strategy.",
  },
  {
    name: "Review portfolio and content production capabilities",
    text: "Confirm the manager produces post design, reels editing, and caption writing — not just scheduling. Full-service social media management means strategy, design, copy, and reporting in one engagement, not pieced together from multiple vendors.",
  },
  {
    name: "Confirm analytics, reporting, and communication process",
    text: "Professional social media managers provide monthly performance reports tracking reach, engagement rate, follower growth, link clicks, and lead attribution — not vanity metrics. Agree on a communication cadence and reporting format before starting.",
  },
];

const cityFrameworks = [
  {
    city: "Houston",
    market: "Energy, healthcare & professional services",
    audience: "B2B decision-makers, healthcare professionals, energy executives",
    platforms: "LinkedIn + Instagram",
    content: "Thought leadership, sector expertise, case studies, community content for energy and medical sectors",
    href: "/locations/texas/houston-social-media",
    keyword: "social media management Houston TX",
  },
  {
    city: "Dallas",
    market: "Corporate, real estate & DFW B2B",
    audience: "Corporate buyers, real estate professionals, DFW SMBs",
    platforms: "LinkedIn + Facebook",
    content: "Corporate credibility, real estate market insights, B2B thought leadership, DFW community content",
    href: "/locations/texas/dallas-social-media",
    keyword: "social media management Dallas TX",
  },
  {
    city: "Austin",
    market: "Tech, SaaS & creative brands",
    audience: "SaaS buyers, startup founders, creative professionals, tech-savvy consumers",
    platforms: "LinkedIn + Instagram",
    content: "Startup storytelling, product launches, tech culture content, B2B SaaS authority posts",
    href: "/locations/texas/austin-social-media",
    keyword: "social media management Austin TX",
  },
  {
    city: "San Antonio",
    market: "SMBs, hospitality & community",
    audience: "Local consumers, hospitality guests, contractors, military community, Spanish-speaking audiences",
    platforms: "Instagram + Facebook",
    content: "Community-driven content, local events, service business storytelling, bilingual content strategy",
    href: "/locations/texas/san-antonio-social-media",
    keyword: "social media management San Antonio TX",
  },
];

const deliverables = [
  {
    title: "Content strategy & calendar",
    desc: "Monthly content calendar mapped to your Texas market, buyer journey, and business goals — not generic templates. Each month opens with a strategy review.",
  },
  {
    title: "Custom post design",
    desc: "Brand-consistent graphics designed from your visual identity. Real design systems built for your voice — not recycled Canva templates.",
  },
  {
    title: "SEO-optimized captions",
    desc: "Captions written with semantic intent, location tagging, keyword integration, and hashtag strategy that supports both social reach and search visibility.",
  },
  {
    title: "Reels & short-form video",
    desc: "Scripts, direction, and editing for Instagram Reels and TikTok. Growth and Authority plans include monthly short-form video production cycles.",
  },
  {
    title: "Scheduling & publishing",
    desc: "Platform-optimized timing, cross-posting strategy, and native scheduling for consistent, professional publishing without the operational overhead.",
  },
  {
    title: "Monthly analytics reporting",
    desc: "Performance reports tracking reach, engagement rate, follower growth, link clicks, and lead attribution. Every metric tied to business outcomes — not vanity numbers.",
  },
];

export default function TexasSocialMediaManagerPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to hire the best social media manager for your Texas business",
          description:
            "A step-by-step guide to evaluating and hiring a professional social media manager for your Texas business.",
          steps: hireSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/social-media-manager`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          {
            name: "Social Media Manager",
            url: `${site.domain}/locations/texas/social-media-manager`,
          },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Texas", href: "/locations/texas" },
          {
            name: "Social Media Manager",
            href: "/locations/texas/social-media-manager",
          },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-mint/[0.06] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
            Texas · Social media management
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            Best Social Media Manager<br className="hidden sm:block" />
            in{" "}
            <span className="text-mint">Texas</span>
          </h1>

          {/* Featured snippet answer box — .speakable triggers Speakable schema + Google featured snippet */}
          <div className="speakable mt-8 rounded-2xl border border-mint/25 bg-mint/[0.05] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">
              Quick Answer
            </p>
            <p className="text-base leading-7 text-cloud">
              Seovize is a top-rated social media management studio serving Texas businesses in Houston, Dallas, Austin, and San Antonio. Founded by{" "}
              <Link href="/about" className="font-semibold underline decoration-mint/40 hover:decoration-mint">
                Abdul Ghani
              </Link>{" "}
              — 20+ years of digital marketing expertise — Seovize delivers premium social media strategy, post design, reels, SEO-optimized captions, scheduling, and monthly analytics reporting for growth-focused Texas brands.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90"
            >
              Get a Free Social Media Strategy →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── What a social media manager does ─────────────────────────── */}
      <Section
        eyebrow="What a social media manager does"
        title="Premium social media management — not just posting."
        intro="A professional social media manager does far more than schedule posts. Here is what a complete Texas social media management system delivers every month."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-line bg-navy p-6"
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── How to hire — HowTo schema-eligible section ───────────────── */}
      <Section
        variant="navy"
        eyebrow="How to hire"
        title="How to hire the best social media manager for your Texas business."
        intro="Five steps to evaluating and choosing the right social media partner for your Texas market — whether you are in Houston, Dallas, Austin, or San Antonio."
      >
        <div className="max-w-3xl">
          <ol className="space-y-7">
            {hireSteps.map((step, i) => (
              <li key={step.name} className="flex gap-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-mint/40 font-mono text-xs font-bold text-mint">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-base font-black text-cloud">
                    {step.name}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-mist">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── Texas city breakdown ──────────────────────────────────────── */}
      <Section
        eyebrow="City-by-city strategy"
        title="Social media management tailored to every Texas market."
        intro="Each Texas city has a different economy, buyer profile, and platform mix. Cookie-cutter content does not work here."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {cityFrameworks.map((c) => (
            <div
              key={c.city}
              className="overflow-hidden rounded-[2rem] border border-line bg-navy"
            >
              <div className="border-b border-line bg-obsidian px-7 py-5">
                <div className="flex items-baseline justify-between">
                  <h2 className="font-display text-2xl font-black text-cloud">
                    {c.city}
                  </h2>
                  <span className="font-mono text-[10px] text-mint">{c.platforms}</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-mint">{c.market}</p>
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-mid">
                  Audience
                </p>
                <p className="mt-1 text-sm text-mist">{c.audience}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-mid">
                  Content focus
                </p>
                <p className="mt-1 text-sm text-mist">{c.content}</p>
                <Link
                  href={c.href}
                  className="mt-5 inline-flex text-xs font-bold text-mint hover:underline"
                >
                  {c.city} social media management →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Agency vs freelancer ──────────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="Agency vs freelancer"
        title="Why founder-led social media management wins."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              label: "Freelancer",
              pros: ["Lower upfront cost", "Direct relationship"],
              cons: [
                "Limited capacity — one person",
                "No redundancy if unavailable",
                "Rarely includes SEO integration",
                "Inconsistent as workload grows",
              ],
              color: "border-line",
              featured: false,
            },
            {
              label: "Seovize — Founder-Led",
              pros: [
                "Senior strategy on every account",
                "SEO + social integrated system",
                "Custom design, not templates",
                "Real Texas market expertise",
                "Direct access to Abdul Ghani",
              ],
              cons: [],
              color: "border-mint/40",
              featured: true,
            },
            {
              label: "Large Agency",
              pros: ["More headcount", "Multiple service lines"],
              cons: [
                "Junior staff on your account",
                "Generic templated city content",
                "High overhead costs",
                "Slow communication chains",
              ],
              color: "border-line",
              featured: false,
            },
          ].map((col) => (
            <div
              key={col.label}
              className={`rounded-[2rem] border p-7 ${col.color} ${
                col.featured
                  ? "bg-mint/[0.06] shadow-[0_0_60px_rgba(20,184,166,0.1)]"
                  : "bg-navy"
              }`}
            >
              {col.featured && (
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">
                  Recommended
                </p>
              )}
              <h3 className="font-display text-xl font-black text-cloud">
                {col.label}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {col.pros.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-mist"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                    {p}
                  </li>
                ))}
                {col.cons.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-slate-mid"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-mid/40" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Expert credential ─────────────────────────────────────────── */}
      <Section
        eyebrow="Expert strategy"
        title="Texas social media management led by Abdul Ghani."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint/10 font-display text-lg font-black text-mint">
                AG
              </div>
              <div>
                <p className="font-display font-black text-cloud">
                  {founder.name}
                </p>
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
          <div className="space-y-4">
            {[
              {
                label: "20+ years",
                desc: "Digital marketing and social media strategy experience",
              },
              {
                label: "Semantic-first",
                desc: "Every caption, post, and profile is optimized for both social and search visibility",
              },
              {
                label: "Texas market expertise",
                desc: "Deep knowledge of Houston, Dallas, Austin, and San Antonio business audiences",
              },
              {
                label: "Direct access",
                desc: "Abdul Ghani personally leads every social media strategy — no account managers between you and senior expertise",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-line bg-navy p-5"
              >
                <p className="font-mono text-sm font-bold text-mint">
                  {item.label}
                </p>
                <p className="mt-1 text-sm text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Pricing overview ─────────────────────────────────────────── */}
      <Section
        variant="navy"
        eyebrow="Social media pricing"
        title="How much does social media management cost in Texas?"
        intro="Transparent pricing for Texas businesses. All plans include strategy, design, captions, and scheduling."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                {["Option", "Cost range", "What you get", "Best for"].map(
                  (h) => (
                    <th
                      key={h}
                      className="pb-4 pr-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {[
                {
                  option: "Freelancer",
                  cost: "$500–$1,500/mo",
                  gets: "Basic posting, limited design",
                  best: "Very small budgets",
                },
                {
                  option: "Seovize Social Launch",
                  cost: "$1,100/mo",
                  gets: "12 posts, design, captions, scheduling, reporting",
                  best: "Consistent brand presence",
                },
                {
                  option: "Seovize Social Growth",
                  cost: "$2,100/mo",
                  gets: "20 posts, 6 reels, content calendar, platform SEO",
                  best: "Active lead generation",
                },
                {
                  option: "Seovize Social Authority",
                  cost: "$3,600/mo",
                  gets: "30 posts, 8 reels, campaigns, A/B hooks, KPI dashboard",
                  best: "Competitive Texas markets",
                },
                {
                  option: "Large Agency",
                  cost: "$3,000–$8,000+/mo",
                  gets: "Team management, brand strategy, paid social add-ons",
                  best: "Enterprise budgets",
                },
              ].map((row) => (
                <tr key={row.option}>
                  <td className="py-4 pr-8 font-semibold text-cloud">
                    {row.option}
                  </td>
                  <td className="py-4 pr-8 font-mono text-xs text-mint">
                    {row.cost}
                  </td>
                  <td className="py-4 pr-8 text-mist">{row.gets}</td>
                  <td className="py-4 text-mist">{row.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <Link
            href="/pricing"
            className="inline-flex items-center text-sm font-semibold text-mint hover:underline"
          >
            View full pricing details →
          </Link>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <Section
        eyebrow="FAQ"
        title="Texas social media manager questions answered."
        intro="Common questions from Texas business owners evaluating professional social media management."
      >
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── Internal links ───────────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Also explore" title="Related Texas pages.">
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
            { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
            { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
            { label: "San Antonio Social Media Management", href: "/locations/texas/san-antonio-social-media" },
            { label: "Texas SEO Services", href: "/locations/texas/seo-services" },
            { label: "Social Media Management Service", href: "/services/social-media-management" },
            { label: "Texas Hub", href: "/locations/texas" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line bg-obsidian px-5 py-2.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to hire the best social media manager in Texas?"
        subhead="Book a free strategy session — Abdul Ghani personally reviews every new engagement before it starts."
        primaryLabel="Get a Free Social Media Strategy"
        primaryHref="/contact"
      />
    </>
  );
}
