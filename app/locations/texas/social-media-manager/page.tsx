import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { founder } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Social Media Manager in Texas | Seovize",
  description:
    "Looking for the best social media manager in Texas? Seovize delivers premium social media management for Texas businesses — post design, reels, captions, scheduling, and analytics.",
  alternates: { canonical: "/locations/texas/social-media-manager" },
};

const faqs = [
  { q: "Who is the best social media manager in Texas?", a: "Abdul Ghani, founder of Seovize, is a recognized social media strategist and digital marketing expert with 20+ years of experience. Seovize delivers premium social media management for Texas businesses remotely — including post design, captions, reels, scheduling, and analytics." },
  { q: "How much does a social media manager cost in Texas?", a: "Social media management in Texas typically ranges from $800 to $4,000+ per month depending on the number of platforms, content volume, and whether video/reels production is included. Seovize social plans start at $1,100/mo." },
  { q: "What is the difference between an agency and a freelancer for social media?", a: "A freelancer is a single individual — lower cost but limited capacity and no redundancy. An agency has a team but often uses account managers and junior staff. Seovize is founder-led: you get agency-quality systems with direct access to a senior strategist on every decision." },
  { q: "Do you manage social media for businesses in Austin, Dallas, and Houston?", a: "Yes. Seovize manages social media for businesses across Austin, Dallas, Houston, San Antonio, and other Texas markets. All work is delivered remotely with market-specific content strategy for your city and industry." },
  { q: "What platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, TikTok, and X (Twitter). Most plans focus on 2-3 platforms based on where your audience is most active." },
];

const frameworks = [
  { city: "Austin", focus: "Tech & SaaS brands", platform: "LinkedIn + Instagram", edge: "B2B content authority + startup storytelling" },
  { city: "Dallas", focus: "Corporate & Real Estate", platform: "LinkedIn + Facebook", edge: "Enterprise trust signals + local market proof" },
  { city: "Houston", focus: "Energy & Professional", platform: "LinkedIn + Instagram", edge: "Sector-specific content + E-E-A-T signals" },
  { city: "San Antonio", focus: "SMBs & Hospitality", platform: "Instagram + Facebook", edge: "Community-driven content + local event coverage" },
];

export default function TexasSocialMediaManagerPage() {
  return (
    <>
      <JsonLd data={serviceSchema("social-media-management")} />
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[{ name: "Texas", href: "/locations/texas" }, { name: "Social Media Manager", href: "/locations/texas/social-media-manager" }]} />

      <section className="noise relative overflow-hidden px-5 pb-16 pt-20 md:pt-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-mint/[0.06] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Texas · Social media</p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-6xl">
            Social Media Manager<br />
            for{" "}
            <span className="bg-gradient-to-r from-mint to-sky bg-clip-text text-transparent">
              Texas Businesses
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-mist">
            Looking for the best social media manager in Texas? Seovize delivers premium social media management for
            Houston, Dallas, Austin, and San Antonio businesses — content strategy, post design, reels, and analytics
            managed by{" "}
            <Link href="/about" className="font-semibold text-cloud underline decoration-mint/40 hover:decoration-mint">
              {founder.name}
            </Link>
            , a top Texas digital marketing expert with {founder.experience} years of experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-orange px-7 py-3.5 text-sm font-bold text-cloud shadow-[0_0_40px_rgba(249,115,22,0.3)] transition hover:bg-orange/90">
              Get Social Media Strategy →
            </Link>
            <Link href="/pricing" className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="What a social media manager does" title="Premium social media management — not just posting." intro="A professional social media manager does far more than schedule posts. Here is what a complete Texas social media management system looks like.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Content strategy", desc: "Monthly content calendar mapped to your business goals, Texas market, and buyer journey — not generic inspirational quotes." },
            { title: "Post design", desc: "Custom-designed graphics that match your brand identity. No Canva templates. Real design systems built for your visual voice." },
            { title: "SEO-optimized captions", desc: "Captions written with semantic intent — hashtag strategy, location tags, and keyword integration that supports search visibility." },
            { title: "Reels & short-form video", desc: "Scripts, direction, and editing for short-form video content. Growth and Authority plans include monthly reels production." },
            { title: "Scheduling & publishing", desc: "Platform-optimized timing, cross-posting strategy, and native scheduling for consistent publishing without the overhead." },
            { title: "Analytics & reporting", desc: "Monthly performance reports tracking reach, engagement, follower growth, and lead attribution — not vanity metrics." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-line bg-navy p-6">
              <div className="mb-3 h-1 w-8 rounded-full bg-mint" />
              <h3 className="font-display text-lg font-black text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Texas city breakdown" title="Social media strategy by Texas market.">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">City Market</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Service Focus</th>
                <th className="pb-4 pr-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Primary Platform</th>
                <th className="pb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Seovize Edge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {frameworks.map((row) => (
                <tr key={row.city}>
                  <td className="py-4 pr-6 font-semibold text-cloud">{row.city}</td>
                  <td className="py-4 pr-6 text-mist">{row.focus}</td>
                  <td className="py-4 pr-6 font-mono text-xs text-mint">{row.platform}</td>
                  <td className="py-4 text-mist">{row.edge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Agency vs freelancer" title="Why founder-led beats both.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Freelancer", pros: ["Lower cost", "Direct relationship"], cons: ["Limited capacity", "No redundancy", "No SEO integration"], color: "border-line" },
            { label: "Seovize (Founder-led)", pros: ["Senior strategy on every account", "SEO + social connected", "Systems, not manual work", "Real Texas market expertise"], cons: [], color: "border-mint/40", featured: true },
            { label: "Large Agency", pros: ["More resources", "Brand recognition"], cons: ["Account managers, not experts", "Generic city page SEO", "High overhead costs"], color: "border-line" },
          ].map((col) => (
            <div key={col.label} className={`rounded-[2rem] border p-7 ${col.color} ${col.featured ? "bg-mint/[0.06] shadow-[0_0_60px_rgba(20,184,166,0.1)]" : "bg-navy"}`}>
              {col.featured && <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-mint">Recommended</p>}
              <h3 className="font-display text-xl font-black text-cloud">{col.label}</h3>
              <ul className="mt-5 space-y-2">
                {col.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-mist">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />{p}
                  </li>
                ))}
                {col.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-mid">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-mid/50" />{c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Texas social media manager questions.">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner headline="Ready to hire the best social media manager in Texas?" subhead="Book a free strategy session. Abdul Ghani personally reviews every new engagement before it starts." primaryLabel="Get Social Media Strategy" primaryHref="/contact" />
    </>
  );
}
