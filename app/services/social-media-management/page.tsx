import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { PricingCards } from "@/components/PricingCards";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { socialPackages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management for Local Service Businesses",
  description:
    "Strategy, content creation, publishing, community management and reporting for local service businesses across Texas and the U.S.",
  alternates: { canonical: "/services/social-media-management" },
  openGraph: {
    title: "Social Media Management for Local Service Businesses | Seovize",
    description:
      "A complete organic social system for service businesses that need consistent visibility and trust — strategy, content, publishing, community management and reporting.",
    url: `${site.domain}/services/social-media-management`,
  },
};

const faqs = [
  {
    q: "Which social media platforms do you manage?",
    a: "Seovize manages Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Most plans focus on 2–3 platforms matched to your audience — Instagram and Facebook for B2C service businesses, LinkedIn for B2B and professional services, and Instagram Reels for visual and lifestyle brands.",
  },
  {
    q: "Do you create short-form video and Instagram Reels?",
    a: "Yes. Our Growth and Authority plans include monthly Reels production — from concept to edited final video. Short-form video reaches a meaningfully larger non-follower audience than static posts on Instagram, which is why it's usually the format that drives new follower growth fastest — though the exact multiplier varies too much by account and niche for us to quote a fixed number.",
  },
  {
    q: "How is your social media management different from hiring a freelancer?",
    a: "Seovize is founder-led by Abdul Ghani — a 20+ year digital marketing specialist. A freelancer juggling a large, mixed client roster has less time per account than a founder-led studio built around fewer, more attended relationships; every strategy at Seovize is personally designed with genuine market expertise, branded design systems, and SEO-informed caption writing that improves both social reach and search visibility.",
  },
  {
    q: "Do you provide bilingual social media management for Texas businesses?",
    a: "Bilingual content is scoped per engagement rather than offered as a default capability — we won't claim Spanish-language delivery without confirming it's genuinely staffed for your account. If it matters for your market, raise it during the initial call and we'll give you a straight answer.",
  },
  {
    q: "How quickly will we see results from social media management?",
    a: "Engagement improvements (more likes, comments, reach) are typically visible within 30–60 days of consistent professional management. Follower growth and lead generation from organic social require 3–6 months of consistent, quality posting. Social media is a long-term brand investment, not an instant lead channel.",
  },
];

const howToSteps = [
  { name: "Brand audit and platform strategy", text: "Review existing social media presence, audience data, and competitor social positioning. Define the right platform mix, posting frequency, and content pillars for your specific business and audience." },
  { name: "Content pillar development", text: "Build 3–5 core content pillars aligned with your brand, your buyer's journey, and platform algorithm preferences. For Texas businesses: expertise, client results, community, behind-the-scenes, and promotional content." },
  { name: "Monthly content calendar", text: "Build a 30-day content calendar with planned post types, topics, and creative direction for each week. Calendar is shared for review before production begins each month." },
  { name: "Post design and caption production", text: "Design all graphics in your brand system. Write all captions with SEO-informed language, location tags, platform-specific hashtag systems, and CTAs. Reels are scripted and produced in applicable plans." },
  { name: "Schedule and publish", text: "Content is scheduled at platform-optimal posting times for your specific audience. Instagram: Tuesday–Thursday 11am–1pm and 7–9pm. LinkedIn: Tuesday–Thursday mornings. Timing is refined monthly based on your account data." },
  { name: "Report, analyze, and optimize", text: "Monthly analytics report covering reach, impressions, engagement rate, follower growth, link clicks, and lead attribution. Report drives next month's content strategy adjustments." },
];

const deliverables = [
  { title: "Monthly content calendar", desc: "30-day content plan aligned with your business goals, audience behavior, Texas events, and platform algorithm priorities — reviewed before production begins." },
  { title: "Custom post design", desc: "Fully branded graphics for each post — designed in your brand system, sized for each platform format (feed, Stories, LinkedIn banners). No Canva templates, no stock imagery misuse." },
  { title: "SEO-optimized captions", desc: "Captions written with keyword-informed language, local Texas context, platform-specific formatting, and hashtag systems covering niche, location, and industry reach layers." },
  { title: "Instagram Reels production", desc: "Short-form video content — concept, scripting, editing direction, and final video — for Instagram and TikTok. Growth and Authority plans include 4–8 Reels per month." },
  { title: "Community management", desc: "Response to comments and DMs during business hours. Active community engagement signals to platform algorithms that your account deserves broader reach." },
  { title: "Scheduling and publishing", desc: "All content scheduled at peak engagement times using professional social media management tools. Nothing is manually posted at random — every post is timed to audience behavior data." },
  { title: "Platform SEO", desc: "Profile optimization for search within each platform: bio keyword integration, link-in-bio strategy, hashtag architecture, and post formatting that surfaces your account in platform discovery." },
  { title: "Monthly analytics report", desc: "Reach, impressions, engagement rate, follower growth, link clicks, and lead attribution. What worked, what did not, and what we are changing next month." },
];

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ name: "Social Media Management", href: "/services/social-media-management" }]} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Social Media Management</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            Social Media Management<br />
            <span className="text-sky">for Local Service Businesses.</span>
          </h1>

          <div className="mt-8 max-w-3xl rounded-[1.5rem] border border-sky/20 bg-navy px-7 py-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-sky">What&apos;s included?</p>
            <p className="text-base leading-8 text-cloud">
              A complete organic social system — not random posting. Strategy, content creation, publishing, community management and reporting, built for local service businesses that need consistent visibility and trust.
            </p>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Seovize manages social media for local service businesses across Texas and the U.S. Every content strategy is personally designed by Abdul Ghani — no account managers, no generic templates, real platform knowledge applied to your specific business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Discuss Social Media Management</Button>
            <Button href="/pricing" variant="secondary">See packages & pricing</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Content strategy", "Content creation", "Publishing", "Community management", "Reporting"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-navy/50 px-3 py-1.5 text-[11px] font-medium text-mist">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANSWER-FIRST: WHAT IS SOCIAL MEDIA MANAGEMENT ──── */}
      <Section eyebrow="Direct answer">
        <h2 className="font-display text-2xl font-black text-cloud md:text-3xl">What is social media management?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-mist">
          Social media management is the ongoing work of planning, creating, publishing and monitoring content on a business&apos;s social accounts — separate from paid advertising. At Seovize this means a monthly content calendar, designed posts and captions, scheduled publishing, response to comments and messages, and a monthly report on what worked.
        </p>
        <ul className="mt-5 max-w-2xl space-y-2 text-sm text-mist">
          <li>— Strategy: content pillars and platform mix set before any posting starts</li>
          <li>— Content: designed graphics, written captions, short-form video where included in your plan</li>
          <li>— Publishing: scheduled and posted by Seovize on the approved calendar</li>
          <li>— Community management: comment and DM responses during business hours</li>
          <li>— Reporting: a monthly review of reach, engagement and what changes next month</li>
        </ul>
        <p className="mt-4 text-sm text-mist">
          See <Link href="/guides/organic-social-vs-paid-social" className="font-semibold text-mint hover:underline">how this differs from paid social advertising</Link>.
        </p>
      </Section>

      {/* ── PLATFORM BREAKDOWN ────────────────────────────── */}
      <Section eyebrow="Platform strategy" title="The right platform mix for your business type.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { platform: "Instagram", best: "B2C service businesses, hospitality, med spas, real estate, restaurants", format: "Feed posts, Reels, Stories", reach: "Highest organic reach for visual brands in 2026" },
            { platform: "Facebook", best: "Texas SMBs, 35–65 demographics, community-oriented brands, local service businesses", format: "Feed posts, groups, event promotion", reach: "Strong for community groups and local ad targeting" },
            { platform: "LinkedIn", best: "B2B consultants, professional services, corporate-market businesses in Dallas and Houston", format: "Articles, thought leadership posts, company updates", reach: "Highest-value professional audience in Texas corporate markets" },
            { platform: "Instagram Reels", best: "All visual businesses — Reels reach a larger share of non-followers than static posts", format: "15–90 second vertical video", reach: "The main new-audience discovery format on Instagram, not a replacement for a feed strategy" },
            { platform: "TikTok", best: "Younger demographics, hospitality, lifestyle brands, restaurants with a strong visual story", format: "Short-form vertical video", reach: "Fastest-growing platform for 18–34 Texas audience" },
            { platform: "Google Business Profile", best: "All local and service-area businesses", format: "Weekly posts, updates, offers", reach: "Improves local search pack visibility — often overlooked by competitors" },
          ].map((p) => (
            <div key={p.platform} className="rounded-[2rem] border border-line bg-navy p-6">
              <p className="font-mono text-xs font-bold text-mint">{p.platform}</p>
              <p className="mt-3 text-sm font-semibold text-cloud">Best for:</p>
              <p className="mt-1 text-sm leading-6 text-mist">{p.best}</p>
              <p className="mt-3 text-sm font-semibold text-cloud">Format:</p>
              <p className="mt-1 text-sm text-mist">{p.format}</p>
              <p className="mt-3 text-[11px] text-slate-mid">{p.reach}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHO IT'S FOR ──────────────────────────────────── */}
      <Section eyebrow="Fit" title="Who this is built for — and who it isn't.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-mint/20 bg-mint/[0.04] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mint">Good fit</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-mist">
              <li>— Local or regional service businesses with a real service area and a way to capture leads</li>
              <li>— Businesses that can supply raw photos, video or updates monthly, even informally</li>
              <li>— Owners who want senior strategy, not a rotating junior account team</li>
              <li>— Businesses building visibility over months, not expecting overnight lead volume</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-navy p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-mid">Not a good fit</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-mist">
              <li>— National e-commerce brands needing a full creative production studio</li>
              <li>— Businesses that can&apos;t supply any raw content, photos or updates at all</li>
              <li>— Anyone expecting a fixed follower or lead count guaranteed in writing</li>
              <li>— Businesses that need same-day crisis community management coverage</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── ANSWER-FIRST: POSTING FREQUENCY ──────────────── */}
      <Section variant="navy" eyebrow="Direct answer">
        <h2 className="font-display text-2xl font-black text-cloud md:text-3xl">How often should a local business post on social media?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-mist">
          There&apos;s no universal number that&apos;s right for every account — the right frequency depends on your platform mix, plan tier and how much raw content you can supply. What holds across accounts is the general pattern: consistency over months matters more than volume in any single week. A business that posts on a steady, sustainable cadence every week outperforms one that posts daily for two weeks and then goes quiet.
        </p>
        <ul className="mt-5 max-w-2xl space-y-2 text-sm text-mist">
          <li>— Your specific cadence is set during onboarding, based on your plan tier and platform mix</li>
          <li>— A schedule you can sustain indefinitely beats a heavier one you&apos;ll abandon in a month</li>
          <li>— The failure mode to avoid: bursts of activity followed by silence</li>
        </ul>
      </Section>

      {/* ── DELIVERABLES ─────────────────────────────────── */}
      <Section variant="navy" eyebrow="Deliverables" title="Everything included in social media management.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div key={item.title} className="flex flex-col rounded-[2rem] border border-line bg-obsidian p-6">
              <div className="mb-4 h-1 w-8 rounded-full bg-sky" />
              <h3 className="font-display text-base font-black text-cloud">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <Section eyebrow="Process" title="How Seovize social media management works.">
        <div className="space-y-4">
          {howToSteps.map((step, i) => (
            <div key={step.name} className="flex gap-6 rounded-[2rem] border border-line bg-navy p-7">
              <span className="font-mono grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky text-lg font-bold text-obsidian">
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

      {/* ── CONTENT INPUTS ───────────────────────────────── */}
      <Section eyebrow="What we need from you" title="Content inputs that make this work.">
        <p className="max-w-3xl text-sm leading-8 text-mist">
          Social content is only as good as what it has to work with. This is what a typical engagement
          needs from your side — usually less than an hour a month once the system is running.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { title: "Photos and video from completed jobs", desc: "Phone photos are fine. Before/after shots, finished work, team on-site — raw material, not polished assets." },
            { title: "Approval turnaround", desc: "A monthly content calendar reviewed and approved within an agreed window, so publishing stays on schedule." },
            { title: "Business updates", desc: "New services, promotions, or team changes worth reflecting in that month's content." },
            { title: "Direct brand feedback", desc: "Voice and tone corrections in month one calibrate every month after — early feedback saves rework later." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-navy p-6">
              <h3 className="font-display text-base font-black text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── ONBOARDING ────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Getting started" title="What onboarding actually looks like.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1. Discovery call", desc: "We talk through your services, service area, current platforms and what content you already have to work with." },
            { step: "2. Platform and pillar setup", desc: "We confirm the platform mix and content pillars, and request account access or admin rights where needed." },
            { step: "3. First calendar for review", desc: "We build the first month's calendar and send it for your approval before anything publishes." },
            { step: "4. Publishing begins", desc: "Once approved, Seovize handles design, captioning and scheduling — you don't need to log in and post anything yourself." },
          ].map((s) => (
            <div key={s.step} className="rounded-2xl border border-line bg-obsidian p-6">
              <p className="font-display text-sm font-black text-mint">{s.step}</p>
              <p className="mt-2 text-sm leading-6 text-mist">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-mid">
          Exact onboarding timing depends on how quickly platform access and the first round of content are provided — this isn&apos;t a fixed countdown, it moves at the pace you can supply what&apos;s needed.
        </p>
      </Section>

      {/* ── EXCLUSIONS ───────────────────────────────────── */}
      <Section variant="navy" eyebrow="What's not included" title="Scope boundaries, stated up front.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="text-sm leading-7 text-mist">
              Organic social media management does not include paid ad spend or campaign management —
              that&apos;s a separate service with its own scope, budget and reporting process. It also
              doesn&apos;t include full video production (on-site filming crews) or graphic design work
              outside the social content system, such as print materials or full website builds.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-obsidian p-6">
            <p className="text-sm leading-7 text-mist">
              Reach, follower growth and engagement depend on your industry, market and starting point —
              no fixed multiplier or guaranteed number applies across accounts. Video volume, platform
              mix and reporting depth vary by plan; specifics are confirmed before an engagement starts.
            </p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-mist">
          This is also not a local SEO service — social posts and Google Business Profile optimization are
          different disciplines with different mechanics, even though they reinforce each other (consistent
          business information, local content, and reviews feed both). See{" "}
          <Link href="/services/local-seo" className="font-semibold text-mint hover:underline">how local SEO and social media work together</Link>{" "}
          if active local-search demand is the goal.
        </p>
      </Section>

      {/* ── FOUNDER SIGNAL ───────────────────────────────── */}
      <Section eyebrow="Who manages your social media" title="Strategy by the founder. Content built for your brand.">
        <div className="flex flex-col gap-0 overflow-hidden rounded-[2rem] border border-line bg-navy md:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center gap-4 border-b border-line bg-obsidian p-10 text-center md:w-64 md:border-b-0 md:border-r">
            <Image
              src="/images/abdul-ghani.jpg"
              alt="Abdul Ghani — Founder of Seovize and social media management specialist with 20+ years experience"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover ring-2 ring-sky/30"
            />
            <div>
              <p className="font-display text-xl font-black text-cloud">Abdul Ghani</p>
              <p className="mt-1 text-xs text-slate-mid">Founder · Seovize</p>
              <p className="mt-1 font-mono text-xs text-sky">20+ years · Social Strategist</p>
            </div>
            <a
              href="https://www.linkedin.com/in/sardarabdulghani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-navy px-4 py-2 text-xs font-semibold text-mist transition hover:text-cloud"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-sky" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Verified LinkedIn
            </a>
          </div>
          <div className="p-10">
            <p className="text-sm leading-8 text-mist">
              Social media management at Seovize is not a production service that follows a template. Abdul Ghani personally designs each client&apos;s content pillar strategy, reviews each month&apos;s calendar, and applies 20+ years of audience behavior knowledge to every platform decision.
            </p>
            <p className="mt-5 text-sm leading-8 text-mist">
              The difference shows in the details: captions written with SEO keyword intent, not just trending phrases. Hashtag systems built on real search behavior data. Post timing based on your account&apos;s historical engagement patterns, not generic recommendations. Content that reflects your brand&apos;s actual voice — not a social media manager&apos;s interpretation of it.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Content strategy", "Instagram Reels", "Caption copywriting", "Community management", "Analytics reporting", "Brand voice development"].map((k) => (
                <span key={k} className="rounded-full border border-line px-3 py-1.5 text-[10px] text-slate-mid">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Pricing" title="Choose the right social growth level.">
        <PricingCards items={socialPackages} />
        <p className="mt-6 text-sm text-slate-mid">
          Curious{" "}
          <Link href="/guides/social-media-management-pricing" className="font-semibold text-mint hover:underline">
            what affects social media management pricing
          </Link>
          , or deciding between a{" "}
          <Link href="/guides/hire-social-media-manager-vs-agency" className="font-semibold text-mint hover:underline">
            manager, freelancer or agency
          </Link>
          ? Or see{" "}
          <Link href="/pricing" className="font-semibold text-mint hover:underline">
            full pricing details →
          </Link>
        </p>
      </Section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <Section eyebrow="Industries" title="Built for how your industry actually works.">
        <Link
          href="/industries/home-services-social-media-management"
          className="group flex flex-col gap-2 rounded-2xl border border-line bg-navy p-6 transition hover:border-mint/40 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-display text-lg font-bold text-cloud group-hover:text-mint">Social media for home service companies</p>
            <p className="mt-1 text-sm text-mist">Contractors, HVAC, cleaning, roofing — before/after proof, reviews and seasonal planning.</p>
          </div>
          <span className="text-sm font-semibold text-mint">See the system →</span>
        </Link>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <Section eyebrow="FAQ" title="Social media management questions answered.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      {/* ── RELATED LINKS ─────────────────────────────────── */}
      <Section eyebrow="Related services & locations" title="Social media management by city.">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { label: "Texas Social Media Manager", href: "/locations/texas/social-media-manager" },
            { label: "Houston Social Media", href: "/locations/texas/houston-social-media" },
            { label: "Dallas Social Media", href: "/locations/texas/dallas-social-media" },
            { label: "Austin Social Media", href: "/locations/texas/austin-social-media" },
            { label: "San Antonio Social Media", href: "/locations/texas/san-antonio-social-media" },
            { label: "Texas Social Media Hub", href: "/locations/texas/social-media-management" },
            { label: "SEO Services", href: "/services/seo" },
            { label: "Content Marketing", href: "/services/content-marketing" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-2xl border border-line bg-navy px-5 py-4 text-sm font-semibold text-mist transition hover:border-sky/30 hover:text-cloud"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              {link.label}
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        headline="Ready to build a social media presence that actually grows?"
        subhead="Book a free Social Strategy call — a structured review of your current platforms, content gaps, and what a monthly management engagement would look like."
        primaryLabel="Get a Social Strategy Call"
        primaryHref="/contact"
      />
    </>
  );
}
