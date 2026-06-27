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
import { faqSchema, howToSchema, serviceSchema, speakableSchema } from "@/lib/schema";
import { seoPackages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media Management | Premium Content & Strategy for Growth Brands | Seovize",
  description:
    "Professional social media management — content planning, post design, captions, reels, scheduling, and analytics by Abdul Ghani. Premium strategy for Texas and U.S. service businesses from $1,100/month.",
  alternates: { canonical: "/services/social-media-management" },
  openGraph: {
    title: "Social Media Management | Seovize — Premium Content & Strategy",
    description:
      "Premium social media management for service businesses — content planning, custom post design, captions, reels, and monthly analytics. Founder-led by Abdul Ghani, 20+ years experience.",
    url: `${site.domain}/services/social-media-management`,
  },
};

const faqs = [
  {
    q: "What does a professional social media manager do for service businesses?",
    a: "A professional social media manager creates monthly content calendars, designs branded posts, writes SEO-optimized captions, schedules content at peak engagement times, manages community responses, and delivers monthly analytics reporting. For service businesses, professional social media management replaces the need to hire and manage an in-house content team.",
  },
  {
    q: "Which social media platforms do you manage?",
    a: "Seovize manages Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Most plans focus on 2–3 platforms matched to your audience — Instagram and Facebook for B2C service businesses, LinkedIn for B2B and professional services, and Instagram Reels for visual and lifestyle brands.",
  },
  {
    q: "Do you create short-form video and Instagram Reels?",
    a: "Yes. Our Growth and Authority plans include monthly Reels production — from concept to edited final video. Reels generate 3–5x more organic reach than static posts on Instagram in 2026 and are the primary driver of new follower acquisition for most accounts.",
  },
  {
    q: "How is your social media management different from hiring a freelancer?",
    a: "Seovize is founder-led by Abdul Ghani — a 20+ year digital marketing specialist. Unlike a freelancer managing 15 clients simultaneously, every strategy at Seovize is personally designed with genuine market expertise, branded design systems, and SEO-informed caption writing that improves both social reach and search visibility.",
  },
  {
    q: "Do you provide bilingual social media management for Texas businesses?",
    a: "Yes. For Texas markets with significant Spanish-speaking audiences — particularly San Antonio and Houston — Seovize builds bilingual content strategies with English and Spanish posts, captions, and hashtag systems targeting both language communities.",
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

const socialPackages = seoPackages.map((pkg) => ({
  ...pkg,
  name: pkg.name.replace("SEO", "Social"),
}));

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to manage social media for a service business",
          description: "The Seovize social media management process — from brand audit to monthly compounding reach.",
          steps: howToSteps,
        })}
      />
      <JsonLd data={speakableSchema(`${site.domain}/services/social-media-management`)} />

      <Breadcrumbs items={[{ name: "Services", href: "/services/seo" }, { name: "Social Media Management", href: "/services/social-media-management" }]} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-sky/[0.05] blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Social Media Management</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            Premium social media<br />
            <span className="text-sky">built to grow.</span>
          </h1>

          <div className="speakable mt-8 max-w-3xl rounded-[1.5rem] border border-sky/20 bg-navy px-7 py-6">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-sky">What is social media management?</p>
            <p className="text-base leading-8 text-cloud">
              Professional social media management is a complete system — monthly content calendars, custom post design, SEO-optimized captions, Reels production, scheduling, community engagement, and monthly analytics reporting — that replaces ad-hoc posting with a consistent brand presence that compounds over time.
            </p>
          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            Seovize manages social media for service businesses, Texas brands, and professional practices. Every content strategy is personally designed by Abdul Ghani — 20+ years of digital marketing expertise, zero generic templates, real platform knowledge, and SEO-informed content systems that build search visibility alongside social reach.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Get a Social Strategy Call</Button>
            <Button href="/pricing" variant="secondary">See packages & pricing</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Instagram management", "Facebook strategy", "LinkedIn content", "Instagram Reels", "Custom post design", "Monthly analytics"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-navy/50 px-3 py-1.5 text-[11px] font-medium text-mist">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM BREAKDOWN ────────────────────────────── */}
      <Section eyebrow="Platform strategy" title="The right platform mix for your business type.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { platform: "Instagram", best: "B2C service businesses, hospitality, med spas, real estate, restaurants", format: "Feed posts, Reels, Stories", reach: "Highest organic reach for visual brands in 2026" },
            { platform: "Facebook", best: "Texas SMBs, 35–65 demographics, community-oriented brands, local service businesses", format: "Feed posts, groups, event promotion", reach: "Strong for community groups and local ad targeting" },
            { platform: "LinkedIn", best: "B2B consultants, professional services, corporate-market businesses in Dallas and Houston", format: "Articles, thought leadership posts, company updates", reach: "Highest-value professional audience in Texas corporate markets" },
            { platform: "Instagram Reels", best: "All visual businesses — Reels reach non-followers at 3–5x the rate of static posts", format: "15–90 second vertical video", reach: "Primary new-audience discovery channel on Instagram in 2026" },
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

      {/* ── REELS SECTION ────────────────────────────────── */}
      <Section variant="navy" eyebrow="Instagram Reels" title="Short-form video is non-negotiable in 2026.">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm leading-8 text-mist">
              Instagram Reels generate 3–5x more organic reach than static posts for most accounts in 2026. They are the primary mechanism through which Instagram surfaces accounts to non-followers — meaning Reels are not optional for businesses trying to grow their audience beyond their existing followers.
            </p>
            <p className="mt-5 text-sm leading-8 text-mist">
              Seovize Growth and Authority plans include monthly Reels production: concept development, scripting direction, editing, captions, and hashtag strategy. For Texas service businesses — contractors showing project transformations, med spas showing before/after results, restaurants showcasing dishes — Reels are the fastest path to meaningful Instagram audience growth.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Process and transformation videos (before/after, how it works)",
                "Behind-the-scenes business content",
                "Client testimonial video formats",
                "Texas community and local event content",
                "Expert tips and education (establishes authority)",
              ].map((r) => (
                <div key={r} className="flex items-start gap-3 text-sm text-mist">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                  {r}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-sky/20 bg-obsidian p-7">
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-widest text-sky">Reels reach vs. static posts</p>
            <div className="space-y-4">
              {[
                { label: "Static post (12 posts/mo)", reach: "~2–4x follower count", bar: "w-1/4" },
                { label: "Carousels (10 per month)", reach: "~3–6x follower count", bar: "w-2/5" },
                { label: "Reels (8 per month)", reach: "~10–20x follower count", bar: "w-3/4" },
                { label: "Reels + Static + Carousels", reach: "Maximum platform reach", bar: "w-full" },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between text-xs text-mist">
                    <span>{r.label}</span>
                    <span className="font-mono text-sky">{r.reach}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-line">
                    <div className={`h-1.5 rounded-full bg-sky ${r.bar}`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] text-slate-mid">Estimates based on typical engagement rates for service business accounts (1,000–10,000 followers).</p>
          </div>
        </div>
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
              {["Content strategy", "Instagram Reels", "Caption copywriting", "Meta Ads", "Community management", "Analytics reporting", "Brand voice development", "Bilingual content"].map((k) => (
                <span key={k} className="rounded-full border border-line px-3 py-1.5 text-[10px] text-slate-mid">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <Section variant="navy" eyebrow="Pricing" title="Choose the right social growth level.">
        <PricingCards items={seoPackages} />
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
