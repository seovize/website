import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/Section";
import {
  breadcrumbSchema,
  faqSchema,
  howToSchema,
  localBusinessSchema,
  offerCatalogServiceSchema,
  speakableSchema,
} from "@/lib/schema";
import { founder, site, socialPackages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management for Small Businesses in Texas | Seovize",
  description:
    "Done-for-you social media management for Texas small businesses — content strategy, custom post design, SEO captions, reels, scheduling, and monthly reporting. Plans from $1,100/mo, founder-led by Abdul Ghani. Serving Houston, Dallas, Austin, San Antonio, and all of Texas.",
  alternates: { canonical: "/locations/texas/social-media-management" },
  openGraph: {
    title: "Social Media Management for Small Businesses in Texas | Seovize",
    description:
      "Founder-led social media management for Texas small businesses — strategy, design, SEO captions, reels, scheduling, and reporting from $1,100/mo. Serving all of Texas.",
    url: `${site.domain}/locations/texas/social-media-management`,
  },
};

const faqs = [
  {
    q: "What is social media management for a small business in Texas?",
    a: "Social media management for a Texas small business is a done-for-you service that handles content strategy, post design, caption writing, scheduling, community engagement, and monthly reporting across platforms like Instagram, Facebook, and LinkedIn. Instead of the owner posting sporadically, a dedicated manager produces a consistent, on-brand content system mapped to the local Texas market — Houston, Dallas, Austin, San Antonio, and beyond — that builds visibility and generates inbound leads.",
  },
  {
    q: "How much does social media management cost for a small business in Texas?",
    a: "Social media management for Texas small businesses typically ranges from $800 to $4,500 per month. Freelancers charge $500–$1,500/mo with limited capacity. Seovize plans start at $1,100/mo (Social Launch — 12 posts, design, captions, scheduling, and reporting) and scale to $3,600/mo (Social Authority — 30 posts, 8 reels, campaigns, and a KPI dashboard). Large agencies typically charge $3,000–$8,000+/mo for comparable scope.",
  },
  {
    q: "Which social media platforms work best for Texas small businesses?",
    a: "It depends on the business type. Restaurants, med spas, salons, retail, and real estate perform best on Instagram and Facebook with Reels-led content. B2B, professional services, consultants, and law firms get the highest ROI from LinkedIn. Most Texas small businesses do best concentrating on 2 platforms done well rather than spreading thin across 5. Seovize recommends the platform mix during the free strategy session — no guesswork.",
  },
  {
    q: "Do I need a big budget or a large following to start?",
    a: "No. Social media management is most valuable for small businesses that are starting from a small or inconsistent presence — that is exactly when a consistent content system compounds fastest. You do not need an existing following or a large ad budget. The Social Launch plan at $1,100/mo is built specifically for Texas small businesses that want professional, consistent content without agency overhead.",
  },
  {
    q: "How is Seovize different from a freelancer or a big Texas agency?",
    a: "Freelancers are affordable but single-capacity and rarely integrate SEO. Large agencies put junior staff on small accounts and charge high overhead for templated city content. Seovize is founder-led: Abdul Ghani, with 20+ years of digital marketing experience, personally designs every small-business social strategy — combining social content with SEO captions and entity-first thinking, at a mid-market price point with senior-level execution.",
  },
  {
    q: "How long until social media management produces results for a Texas small business?",
    a: "Consistency produces compounding results. Most Texas small businesses see meaningful engagement and follower growth within 60–90 days of consistent, strategic posting, with inbound inquiries typically following at month 3–4 once the audience trusts the brand. Social media is a brand-and-demand channel — it builds the awareness that makes your SEO and word-of-mouth convert better over time.",
  },
];

const howToSteps = [
  {
    name: "Free Texas market strategy session",
    text: "We start by understanding your small business — your offer, your ideal Texas customer, your competitors, and your goals (awareness, leads, or local visibility). We identify the right 2-platform mix for your business type and market, whether you're a Houston med spa, a Dallas contractor, or an Austin consultant.",
  },
  {
    name: "Content pillars and monthly calendar",
    text: "We define 3–5 content pillars (expertise, client proof, behind-the-scenes, local/community, and offers) and build a 30-day content calendar mapped to your buyer journey and Texas market moments — local events, seasons, and industry cycles that drive engagement in your specific community.",
  },
  {
    name: "Custom design and SEO caption writing",
    text: "We design brand-consistent post graphics and write captions with semantic intent — location tags, service keywords, and a hashtag system that supports both social reach and local search visibility. Every caption is written by hand to reflect your voice, never spun or AI-generic.",
  },
  {
    name: "Reels and short-form video direction",
    text: "Short-form video drives 3–5x more reach than static posts for most small business accounts in 2026. We script, direct, and edit Reels and TikToks that showcase your work, your team, and your results — the content format that wins attention in crowded Texas local markets.",
  },
  {
    name: "Scheduling, publishing, and engagement",
    text: "We publish at times optimal for your Texas audience, manage cross-posting, and handle community engagement — responding to comments and DMs that turn followers into customers. Consistent publishing is the single biggest predictor of social media success, and we make it automatic.",
  },
  {
    name: "Monthly reporting and optimization",
    text: "Each month you receive a clear report on reach, engagement rate, follower growth, link clicks, and inbound inquiries — tied to business outcomes, not vanity metrics. We use the data to refine the next month's content, doubling down on what drives real inquiries for your Texas small business.",
  },
];

const industries = [
  {
    name: "Restaurants & Cafés",
    desc: "Mouth-watering Reels, daily specials, and local-event content that fills tables across Texas dining scenes from Austin to Houston.",
    href: "/industries/restaurants",
  },
  {
    name: "Med Spas & Wellness",
    desc: "Before/after transformations, treatment education, and trust-building content for Texas med spas, salons, and wellness brands.",
    href: "/industries/med-spas",
  },
  {
    name: "Real Estate Agents",
    desc: "Listing showcases, neighborhood spotlights, and market-update Reels that build authority for Texas agents and brokers.",
    href: "/industries/real-estate",
  },
  {
    name: "Law Firms",
    desc: "LinkedIn authority content, FAQ explainers, and credibility-building posts for Texas attorneys and professional services.",
    href: "/industries/law-firms",
  },
  {
    name: "Contractors & Home Services",
    desc: "Project showcases, before/after results, and review-driven content that wins trust for Texas trades and home-service businesses.",
    href: "/industries/contractors",
  },
  {
    name: "Consultants & Experts",
    desc: "Thought-leadership content and authority systems that position Texas consultants and expert-led brands as the obvious choice.",
    href: "/industries/consultants",
  },
];

const cities = [
  { city: "Houston", market: "Energy, healthcare & services", href: "/locations/texas/houston-social-media" },
  { city: "Dallas", market: "Corporate, real estate & DFW B2B", href: "/locations/texas/dallas-social-media" },
  { city: "Austin", market: "Tech, startups & creative", href: "/locations/texas/austin-social-media" },
  { city: "San Antonio", market: "SMBs, hospitality & community", href: "/locations/texas/san-antonio-social-media" },
];

const deliverables = [
  "Monthly content strategy and 30-day calendar mapped to your Texas market",
  "12–30 custom-designed posts per month (plan-dependent) in your brand system",
  "Hand-written, SEO-optimized captions with local tags and hashtag strategy",
  "Reels and short-form video scripting, direction, and editing",
  "Platform scheduling, publishing, and community engagement",
  "Monthly performance report tied to inquiries and business outcomes",
];

const relatedLinks = [
  { label: "Best Social Media Manager in Texas", href: "/locations/texas/social-media-manager" },
  { label: "Houston Social Media Management", href: "/locations/texas/houston-social-media" },
  { label: "Dallas Social Media Management", href: "/locations/texas/dallas-social-media" },
  { label: "Austin Social Media Management", href: "/locations/texas/austin-social-media" },
  { label: "San Antonio Social Media Management", href: "/locations/texas/san-antonio-social-media" },
  { label: "Texas SEO Services", href: "/locations/texas/seo-services" },
  { label: "Social Media Management Service", href: "/services/social-media-management" },
  { label: "Cost of Social Media Management in Texas", href: "/blog/social-media-management-cost-texas" },
];

export default function TexasSocialMediaManagementPage() {
  return (
    <>
      <JsonLd
        data={offerCatalogServiceSchema({
          serviceType: "Social Media Management",
          name: "Social Media Management for Small Businesses in Texas",
          description: metadata.description as string,
          url: `${site.domain}/locations/texas/social-media-management`,
          areaServed: [
            { type: "State", name: "Texas" },
            { type: "City", name: "Houston" },
            { type: "City", name: "Dallas" },
            { type: "City", name: "Austin" },
            { type: "City", name: "San Antonio" },
          ],
          packages: socialPackages.map((p) => ({
            name: p.name,
            price: p.price,
            description: p.features.join(", "),
          })),
        })}
      />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How social media management works for a Texas small business",
          description:
            "A 6-step done-for-you process Seovize uses to manage social media for small businesses across Texas — from strategy to monthly reporting.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/locations/texas/social-media-management`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.domain },
          { name: "Texas", url: `${site.domain}/locations/texas` },
          { name: "Social Media Management", url: `${site.domain}/locations/texas/social-media-management` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Texas", href: "/locations/texas" },
          { name: "Social Media Management", href: "/locations/texas/social-media-management" },
        ]}
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-mint/[0.06] blur-[110px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
            Texas · Small business social media
          </p>
          <h1 className="font-display text-[clamp(2.6rem,5.4vw,4.4rem)] font-black leading-[1.02] tracking-[-0.02em] text-cloud">
            Social Media Management for
            <br />
            <span className="text-mint">Small Businesses in Texas</span>
          </h1>

          {/* Speakable / featured-snippet answer box */}
          <div className="speakable mt-8 max-w-3xl rounded-2xl border border-mint/25 bg-mint/[0.05] p-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-mint">
              What is social media management for a Texas small business?
            </p>
            <p className="text-base leading-[1.8] text-cloud">
              Social media management for a Texas small business is a done-for-you service that handles content
              strategy, custom post design, SEO caption writing, Reels, scheduling, and monthly reporting — so owners
              get a consistent, professional presence without doing it themselves. Seovize, founded by{" "}
              <Link href="/about" className="font-semibold underline decoration-mint/40 hover:decoration-mint">
                {founder.name}
              </Link>{" "}
              ({founder.experience} years experience), serves Houston, Dallas, Austin, San Antonio, and all of Texas —
              from $1,100/mo.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">Get a free Texas strategy session →</Button>
            <Button href="/pricing" variant="secondary" size="lg">See plans &amp; pricing</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
            {[
              { v: "$1,100", l: "Starting plan / month" },
              { v: "All TX", l: "Cities served remotely" },
              { v: "20+ yrs", l: "Founder experience" },
              { v: "60–90d", l: "To compounding growth" },
            ].map((s) => (
              <div key={s.l} className="pr-6">
                <p className="font-mono text-2xl font-bold text-cloud">{s.v}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-mid">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────── */}
      <Section
        eyebrow="Why it matters"
        title="Most Texas small businesses lose to inconsistency — not competition."
        intro="The single biggest reason small business social media fails is not bad content. It is inconsistency — posting for two weeks, going quiet for a month, and losing all algorithmic momentum."
      >
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-base leading-[1.85] text-mist">
              Texas is one of the most competitive small business landscapes in the country — over 3 million small
              businesses across Houston, Dallas, Austin, San Antonio, and hundreds of growing communities. The brands
              that win locally are not the ones with the biggest budgets. They are the ones that show up consistently,
              look professional, and stay top-of-mind when a customer is finally ready to buy.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mist">
              That consistency is exactly what a social media management system delivers. Instead of squeezing content
              creation into an already-full week, you hand it to a dedicated manager who produces an on-brand,
              strategically planned presence every single month — while you run your business.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-mist">
              And because Seovize is built on a semantic SEO foundation, your social content does double duty: it builds
              your local brand <em>and</em> reinforces the search and entity signals that help Texas customers — and 2026
              AI assistants like Google Gemini — find and recommend you.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { stat: "Consistency", label: "The #1 predictor of small-business social success — and the hardest thing for busy owners to maintain alone." },
              { stat: "2 platforms", label: "Done well beats 5 done poorly. We concentrate effort where your Texas customers actually are." },
              { stat: "Reels-led", label: "Short-form video earns 3–5x the reach of static posts for most local accounts in 2026." },
              { stat: "Local intent", label: "Geo-tagged, community-aware content that signals genuine Texas-market relevance to both customers and algorithms." },
            ].map((item) => (
              <div key={item.stat} className="flex items-start gap-4 rounded-2xl border border-line bg-navy p-5">
                <span className="shrink-0 rounded-lg bg-mint/[0.1] px-3 py-1.5 font-mono text-xs font-bold text-mint">
                  {item.stat}
                </span>
                <p className="text-sm leading-7 text-mist">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DELIVERABLES ──────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">What's included</p>
          <h2 className="mb-10 font-display text-3xl font-black leading-tight text-cloud md:mb-14 md:text-5xl">
            A complete done-for-you social system.
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-line bg-obsidian p-6">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint/[0.12] font-mono text-xs font-bold text-mint">
                  {i + 1}
                </span>
                <p className="text-sm leading-7 text-mist">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <Section
        eyebrow="Built for your industry"
        title="Social media management tailored to Texas small business types."
        intro="A restaurant needs different content than a law firm. We build the strategy around your specific business and the Texas customers you serve."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="group flex flex-col rounded-[2rem] border border-line bg-navy p-7 transition hover:-translate-y-0.5 hover:border-mint/30"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">{ind.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{ind.desc}</p>
              <span className="mt-5 text-xs font-semibold text-mint group-hover:underline">View industry →</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── CITIES ────────────────────────────────────────── */}
      <section className="bg-navy px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Across Texas</p>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-cloud md:text-5xl">
            City-specific strategy for every Texas market.
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-8 text-mist md:mb-14">
            We serve small businesses across all of Texas remotely — with dedicated strategies for each major metro and
            their surrounding communities.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <Link
                key={c.city}
                href={c.href}
                className="group rounded-[2rem] border border-line bg-obsidian p-6 transition hover:border-mint/30"
              >
                <h3 className="font-display text-xl font-black text-cloud">{c.city}</h3>
                <p className="mt-1 text-xs text-mint">{c.market}</p>
                <span className="mt-5 inline-flex text-xs font-semibold text-mist group-hover:text-cloud">
                  {c.city} social media →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-mid">
            Outside these metros? We serve Fort Worth, El Paso, Arlington, Plano, Corpus Christi, and small businesses
            in communities across the entire state.
          </p>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <Section
        eyebrow="The process"
        title="How a Texas small business social engagement runs."
        intro="A clear, six-step system — from your free strategy session to monthly optimization."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="rounded-[2rem] border border-line bg-navy p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 bg-mint/10 font-mono text-sm font-bold text-mint">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="font-display text-lg font-black text-cloud">{step.name}</h3>
              <p className="mt-3 text-sm leading-[1.85] text-mist">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PRICING ───────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Pricing" title="Plans built for Texas small business budgets.">
        <PricingCards items={socialPackages} />
        <p className="mt-6 text-center text-xs text-slate-mid">
          All plans include strategy, custom design, hand-written SEO captions, scheduling, and monthly reporting.
          Month-to-month — no long lock-in contracts. See the{" "}
          <Link href="/blog/social-media-management-cost-texas" className="text-mint hover:underline">
            full Texas pricing breakdown
          </Link>
          .
        </p>
      </Section>

      {/* ── FOUNDER ───────────────────────────────────────── */}
      <Section eyebrow="Who runs your strategy" title="Founder-led — not handed to a junior.">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div className="rounded-[2rem] border border-line bg-navy p-8 text-center">
            <Image
              src="/images/abdul-ghani.jpg"
              alt="Abdul Ghani — Founder of Seovize, social media management and SEO specialist serving Texas small businesses"
              width={96}
              height={96}
              className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-mint/30"
            />
            <p className="mt-4 font-display text-xl font-black text-cloud">{founder.name}</p>
            <p className="mt-1 text-sm text-slate-mid">{founder.title}</p>
            <p className="mt-1 font-mono text-xs text-mint">{founder.experience} years · Texas-focused</p>
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
            <p className="text-base leading-[1.85] text-mist">{founder.snippet}</p>
            <p className="mt-4 text-base leading-[1.85] text-mist">
              For Texas small businesses, that means your social strategy is designed by someone who has spent two
              decades understanding how content, search, and buyer psychology connect — not a template, and not a
              rotating cast of junior account managers. Every plan starts with a personal strategy session and stays
              founder-led.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mint hover:underline">
              Read Abdul Ghani's full background →
            </Link>
          </div>
        </div>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <Section variant="navy" eyebrow="FAQ" title="Texas small business social media questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── RELATED ───────────────────────────────────────── */}
      <section className="border-t border-line px-5 py-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-mid">Explore further</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-line bg-navy px-4 py-3 text-sm font-semibold text-mist transition hover:border-mint/30 hover:text-cloud"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to show up consistently across Texas?"
        subhead="Book a free Texas strategy session — a personal review of your current presence, your competitors, and the platform mix and content system that would grow your small business. No obligation."
        primaryLabel="Get Your Free Strategy Session"
        primaryHref="/contact"
      />
    </>
  );
}
