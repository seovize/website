import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/schema";
import { founder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Seovize Works | Our SEO & Social Media Process | Texas",
  description:
    "The Seovize engagement process — a 5-stage founder-led system that moves Texas service businesses from audit to compounding organic growth. Discovery, strategy, content launch, monthly execution, and optimization. No account managers.",
  alternates: { canonical: "/our-process" },
  openGraph: {
    title: "How Seovize Works | Our SEO & Social Media Process",
    description:
      "A transparent look at the Seovize process — from your first Growth Roadmap to a fully running content and SEO system. Every stage is founder-led by Abdul Ghani.",
    url: `${site.domain}/our-process`,
  },
};

const stages = [
  {
    num: "01",
    title: "Discovery & Growth Roadmap",
    duration: "Week 1 · 5 business days",
    color: "mint",
    what: "We audit your entire digital presence — website technical health, keyword gap analysis, competitor entity mapping, existing social media performance, local citation consistency, and schema coverage. This is not a vanity audit. We identify exactly what is costing you rankings and what would move the needle fastest in your specific Texas market.",
    deliverable: "Written Growth Roadmap delivered within 5 business days. Includes: technical SEO priority list, keyword opportunity matrix, social media platform recommendation, and a 90-day action plan ranked by expected impact.",
    client: "You answer a 15-minute intake form and share access to Google Search Console and social accounts. We do the rest.",
    outcomes: [
      "Full technical SEO audit of your website",
      "Competitor keyword and entity analysis",
      "Platform prioritization for your industry and Texas market",
      "90-day written growth roadmap with prioritized action items",
    ],
  },
  {
    num: "02",
    title: "Strategy Architecture",
    duration: "Week 2",
    color: "sky",
    what: "Based on the audit findings, we build your full content and SEO strategy architecture. This is the blueprint everything else runs on — content cluster maps, target keyword groups, schema schema plan, social content themes, editorial calendar structure, and the link between your content strategy and business goals.",
    deliverable: "Strategy document covering: topical cluster map for your service area, content calendar structure for the first 90 days, platform-specific content frameworks, and the SEO schema architecture we will implement.",
    client: "One strategy call (60 minutes) to align on priorities, brand voice, and any business context that shapes the strategy direction.",
    outcomes: [
      "Topical content cluster map for your niche and Texas market",
      "Content calendar structure aligned to your business objectives",
      "Schema architecture plan (Service, FAQ, Local Business, Person)",
      "Platform-specific content frameworks and caption style guide",
    ],
  },
  {
    num: "03",
    title: "Content System Launch",
    duration: "Weeks 3–4",
    color: "mint",
    what: "We build the infrastructure your content runs on: branded post templates designed to your visual identity, the first month's full content calendar with every post designed and captioned, your hashtag and location-tag system, scheduling setup, and the editorial workflow we use every month going forward.",
    deliverable: "Full first month of content: 12–30 custom-designed posts (plan dependent), Reels direction scripts (Growth and Authority plans), SEO-optimized captions, posting schedule configured, and your first analytics baseline set.",
    client: "Review and approve the first content batch. Your feedback in month one is what calibrates every month after — we take brand voice corrections seriously and build them into the workflow permanently.",
    outcomes: [
      "Branded content templates for every post format",
      "First full month of content designed, captioned, and scheduled",
      "Reels scripts and direction (Growth/Authority plans)",
      "Editorial workflow established for ongoing months",
    ],
  },
  {
    num: "04",
    title: "Monthly Execution",
    duration: "Ongoing · Every month",
    color: "sky",
    what: "Every month runs on the same system: content planned against the calendar, posts designed to brand standards, captions written with SEO-optimized copy and Texas location context, scheduled across platforms at optimized times, and community management touchpoints as part of every plan. For SEO clients, this is the monthly content publishing cadence — service pages refreshed, blog posts published, schema updated.",
    deliverable: "Month 1 content goes live. Each subsequent month: new content batch delivered by the 25th for approval, published on schedule, no gaps in posting cadence. Monthly check-in message for any business updates that should shape content.",
    client: "Review and approve monthly content batch within 48 hours. Flag any business updates — new services, promotions, team news — that should be reflected in that month's content.",
    outcomes: [
      "12–30 custom posts per month depending on plan",
      "Consistent posting cadence — no gaps, no silent weeks",
      "SEO-optimized captions with Texas geo signals",
      "Ongoing schema updates and local citation management (SEO plans)",
    ],
  },
  {
    num: "05",
    title: "Analytics, Reporting & Optimization",
    duration: "Monthly · First 5 of every month",
    color: "mint",
    what: "On the first of every month, you receive your analytics report. Not a vanity dashboard with follower counts — a structured report covering reach, engagement rate, profile visits, link clicks, keyword ranking movement, and trend analysis. We use this data to optimize the following month's content, expanding what performed and replacing what didn't.",
    deliverable: "Monthly report delivered by the 5th covering: social reach and engagement trends, platform-specific performance, top-performing content analysis, keyword position movement, and strategic recommendations for the following month.",
    client: "Read the report. If you have questions about why something performed the way it did, ask — we explain the 'why' in plain language, not marketing jargon.",
    outcomes: [
      "Monthly analytics report with plain-language interpretation",
      "Content performance ranking — what to expand, what to cut",
      "Keyword position tracking and Google Search Console trends",
      "Strategy adjustments built into the following month automatically",
    ],
  },
];

const faqs = [
  {
    q: "How long does it take to see results from Seovize?",
    a: "Social media: consistent local engagement and follower growth within the first 30 days; measurable leads attributed to social within 60–90 days. SEO: keyword ranking movement typically begins in weeks 6–10; meaningful organic traffic growth at 3–6 months. Both channels compound — the results at month 6 are significantly stronger than month 1 because authority and content depth build on each other.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "We ask for a 3-month initial commitment — enough time to build the content system, establish baseline analytics, and produce meaningful early results. After the initial 3 months, we move to month-to-month. No annual lock-in, no cancellation fees. We keep clients through results, not contracts.",
  },
  {
    q: "Who actually does the work — is it Abdul Ghani or an account team?",
    a: "Abdul Ghani personally designs every strategy and writes or directs every major content piece. There is no account manager layer between you and senior expertise. For execution tasks — scheduling, design implementation, formatting — we use a small trusted team, but the strategy, the content angles, and the editorial decisions are always founder-led.",
  },
  {
    q: "What information do I need to provide to get started?",
    a: "At onboarding: a 15-minute intake form covering your business, target clients, key services, competitive context, and content preferences. Access to Google Search Console (for SEO clients) and your social media accounts. That is it. We build the strategy from what we learn from the audit — you do not need to write a content brief or provide a strategy document.",
  },
  {
    q: "Can I cancel if I'm not satisfied with the results?",
    a: "Yes. After the 3-month initial period, the engagement is month-to-month. If at any point you feel the results are not meeting expectations, we want to know before you decide to cancel — the analytics report is specifically designed to make performance visible so we can course-correct together. But yes, there is never a lock-in beyond the initial 3-month term.",
  },
  {
    q: "Do you work with businesses outside Texas?",
    a: "Our core market is Texas — Houston, Dallas, Austin, San Antonio, Fort Worth, and El Paso — where we have deep market knowledge, local industry context, and established content systems. We do work with select clients outside Texas when the service is a strong fit, but we are not a generalist agency. Our positioning is built around Texas expertise and that is where we deliver the best results.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Seovize's SEO and Social Media Process Works",
  description:
    "A 5-stage founder-led system for Texas service businesses — from initial audit to compounding organic growth through semantic SEO and social media management.",
  totalTime: "P30D",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    minValue: "1100",
    unitText: "MONTH",
  },
  step: stages.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.what,
  })),
};

export default function OurProcessPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={speakableSchema(`${site.domain}/our-process`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Our Process", url: `${site.domain}/our-process` },
        ])}
      />

      <Breadcrumbs items={[{ name: "Our Process", href: "/our-process" }]} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-mint/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-sky/[0.04] blur-[80px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
            How Seovize works
          </p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            A system built to compound.<br />
            <span className="text-mint">Not a service you babysit.</span>
          </h1>

          {/* Speakable answer */}
          <div className="speakable mt-8 rounded-2xl border border-mint/20 bg-mint/[0.04] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">Quick answer</p>
            <p className="text-base leading-[1.8] text-cloud">
              Seovize runs a 5-stage founder-led engagement: Discovery & Growth Roadmap (Week 1), Strategy Architecture (Week 2), Content System Launch (Weeks 3–4), Monthly Execution (ongoing), and Analytics & Optimization (monthly). Every stage is led personally by Abdul Ghani — no account manager layer. Texas service businesses from $1,100/month.
            </p>
          </div>

          {/* Trust snapshot */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { stat: "5 days", label: "Growth Roadmap delivered" },
              { stat: "3 months", label: "Initial commitment" },
              { stat: "Month-to-month", label: "After initial term" },
              { stat: "0", label: "Account manager layers" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl border border-line bg-navy p-5 text-center">
                <p className="font-mono text-xl font-bold text-cloud">{item.stat}</p>
                <p className="mt-1 text-xs text-slate-mid">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process stages ────────────────────────────────── */}
      <Section eyebrow="The process" title="Five stages. Zero guesswork.">
        <div className="space-y-6">
          {stages.map((stage, i) => (
            <div
              key={stage.num}
              className="overflow-hidden rounded-[2rem] border border-line bg-navy"
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                {/* Left — stage header */}
                <div className="flex flex-col justify-between border-b border-line p-8 md:border-b-0 md:border-r">
                  <div>
                    <span className="font-mono text-5xl font-bold text-mint/20">{stage.num}</span>
                    <h2 className="mt-4 font-display text-2xl font-black text-cloud">{stage.title}</h2>
                    <p className="mt-2 rounded-full border border-line px-3 py-1 text-[11px] font-semibold text-slate-mid inline-block">
                      {stage.duration}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-mid">Your deliverable</p>
                    <p className="mt-2 text-sm leading-[1.7] text-mist">{stage.deliverable}</p>
                  </div>
                </div>

                {/* Right — detail */}
                <div className="p-8">
                  <p className="text-sm leading-[1.9] text-mist">{stage.what}</p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {stage.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-mint/30 ring-1 ring-mint/50" />
                        <p className="text-xs leading-[1.7] text-mist">{o}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl border border-line bg-obsidian/60 p-4">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-mid">Your role at this stage</p>
                    <p className="text-xs leading-[1.7] text-mist">{stage.client}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Why founder-led matters ──────────────────────── */}
      <Section variant="navy" eyebrow="Why it works" title="The founder-led advantage.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-obsidian p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">Most agencies</p>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-line" />
            <ul className="space-y-3">
              {[
                "Account manager takes your brief, passes it to a content team",
                "Content team applies templates, not strategy",
                "Monthly report is a dashboard screenshot with no interpretation",
                "Strategy changes require an upsell conversation",
                "Your business context gets lost between handoffs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-slate-mid">—</span>
                  <p className="text-sm text-mist">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-mint/20 bg-obsidian p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-mint">Seovize</p>
            <div className="mb-4 h-0.5 w-10 rounded-full bg-mint" />
            <ul className="space-y-3">
              {[
                "Abdul Ghani reads the audit results and designs your strategy directly",
                "Every content angle is chosen because it serves your specific market",
                "Monthly reports include written interpretation and next-month adjustments",
                "Strategy evolves based on performance data, not a renewal pitch",
                "One direct line — no telephone game between strategy and execution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-mint">✓</span>
                  <p className="text-sm text-cloud">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Founder card */}
        <div className="mt-6 overflow-hidden rounded-[2rem] border border-line bg-obsidian">
          <div className="grid md:grid-cols-[auto_1fr] md:divide-x md:divide-line">
            <div className="flex flex-col items-center justify-center gap-3 p-10 text-center">
              <div className="relative">
                <Image
                  src="/images/abdul-ghani.jpg"
                  alt="Abdul Ghani — Seovize founder and lead strategist"
                  width={88}
                  height={88}
                  className="h-22 w-22 rounded-full object-cover ring-2 ring-mint/30"
                />
              </div>
              <div>
                <p className="font-display text-lg font-black text-cloud">{founder.name}</p>
                <p className="mt-0.5 text-sm text-slate-mid">{founder.title}</p>
                <p className="mt-1 font-mono text-xs text-mint">20+ years · Texas market</p>
              </div>
            </div>
            <div className="p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">
                A note on how I work with clients
              </p>
              <p className="text-sm leading-[1.9] text-mist">
                Every client engagement starts with me reading your business the way a buyer reads it — checking your Google rankings, your social presence, your competitor's content, and the gap between where you are and where you could be. The Growth Roadmap I deliver is not a template. It is a document I write based specifically on what I find.
              </p>
              <p className="mt-4 text-sm leading-[1.9] text-mist">
                That same level of attention continues through every month of the engagement. Your content is not passed to a writer who has never heard of your Texas market or your industry. I design it, I oversee it, and I read your analytics every month to decide what changes.
              </p>
              <p className="mt-4 font-semibold text-cloud text-sm">— Abdul Ghani, Founder, Seovize</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Timeline visual ──────────────────────────────── */}
      <Section eyebrow="Your first 90 days" title="What happens when you start.">
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-line md:left-1/2" />
          <div className="space-y-8">
            {[
              { day: "Day 1", title: "Intake form + account access", side: "left", desc: "You complete the 15-minute intake form. We request Google Search Console and social account access. Audit begins." },
              { day: "Day 5", title: "Growth Roadmap delivered", side: "right", desc: "Written audit and 90-day strategy in your inbox. Strategy call scheduled within 48 hours of delivery." },
              { day: "Day 10", title: "Strategy finalized", side: "left", desc: "Strategy call completed. Content themes, platform priorities, and keyword targets confirmed and locked." },
              { day: "Day 21", title: "First content batch live", side: "right", desc: "Month 1 content designed, captioned, approved by you, and scheduled across platforms. Content system is running." },
              { day: "Day 30", title: "First analytics snapshot", side: "left", desc: "Baseline analytics set. First performance data — reach, engagement, profile visits — ready for month 2 comparison." },
              { day: "Month 3", title: "First compounding signals", side: "right", desc: "Keyword ranking movement visible in Search Console. Social reach growing consistently. Review results together and set next 90-day targets." },
            ].map((item) => (
              <div key={item.day} className={`relative flex gap-6 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}>
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-mint bg-obsidian">
                  <div className="h-3 w-3 rounded-full bg-mint" />
                </div>
                <div className={`flex-1 rounded-2xl border border-line bg-navy p-6 ${item.side === "right" ? "md:mr-auto md:max-w-sm" : "md:ml-auto md:max-w-sm"}`}>
                  <p className="font-mono text-xs font-bold text-mint">{item.day}</p>
                  <p className="mt-1 font-display text-lg font-black text-cloud">{item.title}</p>
                  <p className="mt-2 text-sm leading-[1.7] text-mist">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Process FAQ" title="Questions about working with us.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Ready to see the Growth Roadmap for your Texas business?"
        subhead="Start with a free audit. You'll have a written 90-day strategy in 5 business days — no obligation to continue."
        primaryLabel="Get My Free Growth Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
