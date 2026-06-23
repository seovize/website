import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Social Media Manager for Texas Businesses | What to Expect",
  description: "What a professional social media manager actually does for Texas small businesses — content planning, design, captions, reels, scheduling, and monthly reporting.",
  alternates: { canonical: "/locations/texas/social-media-manager" },
};

const faqs = [
  { q: "What does a social media manager do for a Texas small business?", a: "A social media manager handles strategy, content planning, graphic design, copywriting, scheduling, community management, and monthly performance reporting — so you do not have to. For Texas small businesses, this typically means 12–24 posts per month across your primary platforms." },
  { q: "Should I hire a freelance social media manager or an agency?", a: "Freelancers are cheaper but limited in capacity and expertise depth. A studio like Seovize combines strategy, design, and copy under one roof — with consistent delivery and accountability that solo freelancers often cannot match, especially for growing businesses." },
  { q: "How much does a social media manager cost in Texas?", a: "Freelance rates vary from $500–$2,000/mo depending on scope. Agency packages start at $1,100/mo for small business plans. The key is understanding exactly what is included — many cheap options deliver generic content with no strategic framework." },
  { q: "How do I know if my social media manager is doing a good job?", a: "Look beyond follower count. Strong indicators are: consistent posting, on-brand visuals, SEO-optimized captions, growing engagement rates, and measurable profile visits or link clicks. Monthly reports should tie activity to business goals." },
];

const roles = [
  { title: "Strategy", desc: "Monthly content calendar, platform selection, audience targeting, and campaign themes aligned to your business goals." },
  { title: "Design", desc: "Custom-designed post graphics, reels thumbnails, and story sets that reflect your brand identity — not generic Canva templates." },
  { title: "Copywriting", desc: "SEO-optimized captions, hashtag research, call-to-action writing, and platform-native voice for each channel." },
  { title: "Publishing", desc: "Scheduled posting at optimal times for your Texas audience across Instagram, Facebook, LinkedIn, TikTok, and X." },
  { title: "Analytics", desc: "Monthly performance reports covering reach, engagement rate, follower growth, and link clicks — with plain-English interpretation." },
  { title: "Optimization", desc: "Monthly strategy review to refine content pillars, adjust formats, and capitalize on what is working in your market." },
];

export default function TexasSocialMediaManagerPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[
        { name: "Texas", href: "/locations/texas" },
        { name: "Social Media Manager", href: "/locations/texas/social-media-manager" },
      ]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Social media manager · Texas</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            What a Social Media Manager Does for Texas Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            A professional social media manager does far more than schedule posts. Here is exactly what Seovize delivers for Texas small businesses — and how to evaluate any social media manager before you hire them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Talk to a social media strategist</Button>
            <Button href="/locations/texas/social-media-management" variant="secondary">See SMM for Texas</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Roles and responsibilities" title="What a social media manager actually handles">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="rounded-[2rem] border border-line bg-navy p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-mint" />
              <h2 className="font-display text-xl font-black text-cloud">{role.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{role.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="navy" eyebrow="Comparison" title="Agency vs freelancer for Texas social media">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-line bg-obsidian p-7">
            <p className="font-display text-xl font-black text-cloud mb-4">Freelance social media manager</p>
            <ul className="space-y-3 text-sm text-mist">
              {["Lower upfront cost", "Limited capacity (1 person)", "Inconsistent if unavailable", "Variable design quality", "Often no strategic framework", "Harder to scale"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-mid" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-mint/30 bg-mint/[0.05] p-7">
            <p className="font-display text-xl font-black text-cloud mb-4">Seovize (remote studio)</p>
            <ul className="space-y-3 text-sm text-mist">
              {["Strategy + design + copy in one team", "Consistent delivery every month", "SEO-optimized content built in", "Brand-quality custom graphics", "Monthly KPI reporting", "Scales with your business"].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Social media manager questions for Texas businesses">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Looking for a social media manager for your Texas business?"
        subhead="We work with Texas small businesses remotely — strategy, design, captions, reels, and reporting. Book a free call to see if we are the right fit."
        primaryLabel="Talk to a social media strategist"
        primaryHref="/contact"
      />
    </>
  );
}
