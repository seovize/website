import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, faqSchema, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { founder, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Design | Next.js Sites Built for Speed, SEO, and Qualified Demand | Seovize",
  description:
    "Conversion-ready Next.js websites for service businesses — designed around buyer journeys, built with SEO schema from day one, and deployed on Vercel's edge network. Core Web Vitals 90+ before launch. Custom quote.",
  alternates: { canonical: "/services/website-design" },
};

const faqs = [
  {
    q: "Why build with Next.js instead of WordPress, Wix, or Squarespace?",
    a: "Next.js sites load under 1 second on average (vs 3–6 seconds for most WordPress sites), score 90+ on Core Web Vitals, and have zero plugin vulnerability surface. Vercel's edge network delivers content from the server nearest to every visitor globally. Page speed is a confirmed Google ranking factor — a fast Next.js site outperforms a slow WordPress site all else equal, and stays fast without plugin maintenance overhead.",
  },
  {
    q: "How long does a website design project take?",
    a: "A standard marketing site — 6–10 pages, custom design, SEO-optimized — takes 4–6 weeks from kickoff to launch. Larger sites with complex architecture or custom functionality range from 8–12 weeks. We provide a detailed project timeline in the scoping proposal with clear milestones for strategy, wireframes, design review, development, and launch — no surprises.",
  },
  {
    q: "Does your website design include SEO?",
    a: "Yes — SEO is built into the architecture from day one. Every page gets unique meta titles and descriptions, Open Graph tags for social sharing, JSON-LD schema (Organization, Service, BreadcrumbList at minimum), XML sitemap, robots.txt, and Google Search Console setup. Technical SEO foundations are established before the site goes live — not retrofitted after.",
  },
  {
    q: "What does a conversion-ready website cost?",
    a: "Most Seovize marketing site projects range from $4,500 to $12,000. Simple service sites (5–7 pages, no custom functionality) typically $4,500–$6,500. Multi-service sites with blog, industry pages, and content system $7,000–$12,000. We provide a detailed fixed-price quote after a brief scoping call — no discovery call required just to get a number.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We handle full redesigns from WordPress, Wix, Squarespace, or any platform to Next.js. The redesign process includes content audit (keeping what's working SEO-wise), URL structure planning (to preserve existing rankings), a full redirect map to maintain link equity, and careful launch sequencing to minimize ranking disruption during migration.",
  },
  {
    q: "How important is website speed for SEO?",
    a: "Page speed is a confirmed Google ranking factor for both mobile and desktop. More critically, every 1-second delay in page load reduces conversions measurably — meaning a slow site costs you both rankings and leads simultaneously. Core Web Vitals (LCP, INP, CLS) are Google's primary page experience signals. Every Seovize Next.js site is optimized to score 90+ on all three before launch.",
  },
];

const howToSteps = [
  {
    name: "Strategy and Messaging",
    text: "Clarify buyer journey, key differentiators, and conversion goals before any design decisions are made. Define the primary action each page should drive and the trust signals required to earn it. Strategy misalignment is the most common reason websites underperform — no amount of design fixes a wrong strategy.",
  },
  {
    name: "Wireframes and UX Architecture",
    text: "Define page hierarchy, content placement, and buyer pathways before visual design begins. Wireframes prevent expensive rework and ensure every page structure matches buyer intent before a pixel is designed. This step often surfaces structural issues that would have taken 3x longer to fix in development.",
  },
  {
    name: "Design System Build",
    text: "Build a Tailwind-based design system with your brand tokens: colors, typography scale, spacing, component library, and motion system. This ensures visual consistency from page one to page fifty — and makes every future update faster because the system is already defined.",
  },
  {
    name: "Next.js Development",
    text: "Build the full site with SEO meta, JSON-LD schema, Open Graph, XML sitemap, robots.txt, image optimization, and Core Web Vitals performance built into every page. Schema and metadata ship with the first commit — not added after launch as an afterthought.",
  },
  {
    name: "Vercel Deployment",
    text: "Configure Vercel edge network, environment variables, preview deployments for client review, and production domain. Connect GitHub for automatic deploys — every commit triggers a build and generates a preview URL for stakeholder review before anything reaches production.",
  },
  {
    name: "Post-Launch Audit",
    text: "Verify Core Web Vitals scores (90+ target on all three), schema validity via Rich Results Test, mobile UX on actual devices, Google Search Console setup, and conversion tracking. We do not consider a project complete until it passes all six checks — performance on a real mobile device, not just Lighthouse in a desktop browser.",
  },
];

const techStack = [
  { name: "Next.js 15", role: "Framework", desc: "App Router, RSC, static generation, image optimization" },
  { name: "Tailwind CSS v4", role: "Styling", desc: "Utility-first, zero runtime CSS, design token system" },
  { name: "TypeScript", role: "Type safety", desc: "Strict mode, end-to-end type checking, no implicit any" },
  { name: "Vercel", role: "Deployment", desc: "Edge network, auto-deploy from GitHub, preview URLs" },
  { name: "JSON-LD schema", role: "Structured data", desc: "Service, FAQPage, Organization, BreadcrumbList" },
  { name: "Core Web Vitals", role: "Performance", desc: "LCP < 2.5s, INP < 200ms, CLS < 0.1 — before launch" },
];

const relatedLinks = [
  { label: "SEO Services", href: "/services/seo" },
  { label: "Semantic SEO", href: "/services/semantic-seo" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "About Abdul Ghani", href: "/about" },
  { label: "Compare: Agency vs Freelancer", href: "/compare/seo-agency-vs-freelancer" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
];

export default function WebsiteDesignPage() {
  return (
    <>
      <JsonLd data={serviceSchema("website-design")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How Seovize Builds Conversion-Ready Next.js Websites",
          description: "A 6-step website design and development process covering strategy, wireframes, design system build, Next.js development, Vercel deployment, and post-launch audit.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/website-design`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Services", url: `${site.domain}/services/seo` },
          { name: "Website Design", url: `${site.domain}/services/website-design` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Services", href: "/services/seo" },
          { name: "Website Design", href: "/services/website-design" },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line px-5 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="pointer-events-none absolute -left-40 -top-20 h-[500px] w-[500px] rounded-full bg-sky/[0.04] blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Website design · Next.js + Vercel
          </p>
          <h1 className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-cloud">
            Built for speed, trust,
            <br />
            <span className="text-mint">and qualified demand.</span>
          </h1>

          {/* Speakable answer box */}
          <div className="speakable mt-8 max-w-3xl rounded-2xl border border-mint/20 bg-navy px-6 py-5">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-mint">
              What is a conversion-ready website?
            </p>
            <p className="text-base leading-[1.85] text-cloud">
              A conversion-ready website is designed around the buyer journey — not around aesthetics. Every page is structured to earn trust, answer specific objections, and drive a single clear action. Built on Next.js and deployed on Vercel's edge network, it loads under 1 second globally, scores 90+ on Core Web Vitals, and ships with SEO schema built in from day one.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Get a website project quote →</Button>
            <Button href="/pricing" variant="secondary" size="lg">See all services</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { v: "90+", l: "Core Web Vitals score" },
              { v: "< 1s", l: "Average load time" },
              { v: "4–6 wk", l: "Standard delivery" },
              { v: "Schema", l: "Built in from day one" },
            ].map((s) => (
              <div key={s.l} className="pr-6">
                <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NEXT.JS ──────────────────────────────────── */}
      <Section eyebrow="The technical foundation" title="Why Next.js outperforms WordPress for service businesses.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <div className="mb-5 h-1 w-10 rounded-full bg-slate-mid" />
            <h3 className="mb-5 font-display text-xl font-black text-mist">WordPress / Wix / Squarespace</h3>
            <div className="space-y-3">
              {[
                "3–8 second page load times on average (plugin overhead)",
                "Core Web Vitals scores of 40–70 out of 100 without significant optimization",
                "Constant plugin update cycle creating security vulnerability surface",
                "Database query latency on every page load — scales poorly under traffic",
                "SEO added as plugins rather than built into the architecture",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-mid">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-mid/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-mint/20 bg-navy p-8">
            <div className="mb-5 h-1 w-10 rounded-full bg-mint" />
            <h3 className="mb-5 font-display text-xl font-black text-cloud">Next.js + Vercel</h3>
            <div className="space-y-3">
              {[
                "Sub-1-second load times — static content served from Vercel's global edge network",
                "Core Web Vitals scores of 90–100 with proper image, font, and bundle optimization",
                "Zero plugin surface — pure TypeScript code with no third-party plugin vulnerabilities",
                "Static generation means zero database queries per page — infinitely scalable",
                "SEO meta, schema, sitemap, robots, and OG tags built into the codebase from commit one",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-mist">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONVERSION DESIGN PRINCIPLES ─────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Design approach</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            What conversion-ready actually means.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Buyer journey architecture",
                desc: "Every page is designed for a specific buyer at a specific stage — not as an aesthetic showcase. Navigation, CTAs, and content placement are determined by conversion data, not design preference.",
              },
              {
                title: "Trust signal integration",
                desc: "Credentials, founder identity, process transparency, and case study proof — placed where buyers make go/no-go decisions. Trust is earned at specific moments in the page; those moments are mapped before design begins.",
              },
              {
                title: "Above-the-fold clarity",
                desc: "A visitor decides whether to stay within 3 seconds. The first screen of every page must answer: what is this, who is it for, and what should I do next. No ambiguity, no hero copy that sounds impressive but says nothing.",
              },
              {
                title: "Performance as conversion",
                desc: "Speed is not a technical metric — it is a conversion variable. A 1-second delay reduces conversions measurably. Every Seovize build is optimized for LCP, INP, and CLS before launch day.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-line bg-obsidian p-7">
                <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
                <h3 className="font-display text-lg font-black text-cloud">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-mist">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────── */}
      <Section eyebrow="Technology" title="The stack every Seovize site ships with.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech) => (
            <div key={tech.name} className="rounded-2xl border border-line bg-navy p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-sm font-bold text-cloud">{tech.name}</p>
                <span className="shrink-0 rounded-full bg-mint/[0.1] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-mint">
                  {tech.role}
                </span>
              </div>
              <p className="mt-3 text-xs leading-6 text-mist">{tech.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Process</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:text-5xl md:mb-14">
            How a website project runs.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="rounded-[2rem] border border-line bg-obsidian p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky/30 bg-sky/10 font-mono text-sm font-bold text-sky">
                    {i + 1}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="font-display text-lg font-black text-cloud">{step.name}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-mist">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ───────────────────────────────────── */}
      <Section eyebrow="Investment" title="Transparent project pricing.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              tier: "Service Site",
              range: "$4,500 – $6,500",
              pages: "5–7 pages",
              includes: ["Homepage, About, Services, Contact + 1–2 more", "Custom design system", "SEO meta + Organization schema", "XML sitemap, robots.txt, OG tags", "Vercel deployment + GSC setup"],
            },
            {
              tier: "Authority Site",
              range: "$7,000 – $12,000",
              pages: "10–20 pages",
              featured: true,
              includes: ["Multi-service architecture", "Blog + industry pages", "Full schema coverage (Service, FAQPage, Article)", "Core Web Vitals optimization", "Post-launch 30-day support period"],
            },
            {
              tier: "Custom Build",
              range: "Custom quote",
              pages: "20+ pages",
              includes: ["Complex architecture or custom functionality", "Content production included", "Quarterly SEO roadmap", "Ongoing SEO retainer option", "Scoping call to define project"],
            },
          ].map((tier) => (
            <div
              key={tier.tier}
              className={`relative rounded-[2rem] p-8 ${tier.featured ? "border-2 border-orange/30 bg-navy" : "border border-line bg-navy"}`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  Most common
                </span>
              )}
              <p className="font-display text-xl font-black text-cloud">{tier.tier}</p>
              <p className="mt-1 font-mono text-xs text-mint">{tier.pages}</p>
              <p className="mt-4 font-mono text-2xl font-bold text-cloud">{tier.range}</p>
              <div className="mt-6 space-y-3">
                {tier.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm leading-6 text-mist">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-mid">
          Fixed-price quotes after a 20-minute scoping call. No vague estimates, no change orders for scope defined at kickoff.
        </p>
      </Section>

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div className="rounded-[2rem] border border-line bg-obsidian p-8 text-center">
              <Image
                src="/images/abdul-ghani.jpg"
                alt="Abdul Ghani — Founder of Seovize, Next.js website designer with 20+ years digital marketing experience"
                width={96}
                height={96}
                className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-sky/30"
              />
              <p className="mt-4 font-display text-xl font-black text-cloud">{founder.name}</p>
              <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
              <p className="mt-1 font-mono text-xs text-sky">{founder.experience}+ years · Next.js + SEO</p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky/20 bg-sky/[0.08] px-4 py-2 text-xs font-semibold text-sky transition hover:bg-sky/[0.14]"
              >
                Verified LinkedIn →
              </a>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">This site is the proof</p>
              <h2 className="font-display text-3xl font-black leading-tight text-cloud md:text-4xl">
                Seovize.com was built using the same stack we build for clients.
              </h2>
              <p className="mt-5 text-base leading-[1.85] text-mist">
                Next.js App Router, Tailwind CSS v4, TypeScript, Vercel deployment, full JSON-LD schema coverage, 44 static routes, and Core Web Vitals optimization built in from the first commit. Not a demo — a live, crawlable, indexed production site.
              </p>
              <p className="mt-4 text-base leading-[1.85] text-mist">
                When you commission a website from Seovize, you are getting the same architecture, the same standards, and the same attention to the details that make websites rank and convert — applied to your brand and your buyers.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint hover:underline">
                About Abdul Ghani →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Website design questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── RELATED ──────────────────────────────────────── */}
      <section className="border-t border-line px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-mid">Explore further</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-line bg-navy px-4 py-3 text-sm font-semibold text-mist transition hover:border-sky/30 hover:text-cloud"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to build a website that earns qualified demand?"
        subhead="Book a 20-minute scoping call — walk us through your current site, your target buyers, and what a new site needs to accomplish. You'll leave with a clear project scope and a fixed-price quote."
        primaryLabel="Get a Website Quote"
        primaryHref="/contact"
      />
    </>
  );
}
