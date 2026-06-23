import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Agency vs Freelancer: Which Is Right for Your Business?",
  description: "A clear, honest comparison of SEO agencies vs freelancers — covering cost, capacity, accountability, expertise depth, and what to choose based on your stage and goals.",
  alternates: { canonical: "/compare/seo-agency-vs-freelancer" },
};

const faqs = [
  { q: "Is an SEO freelancer cheaper than an agency?", a: "Usually yes — freelancers typically charge $500–$2,000/mo vs agencies at $1,000–$5,000+/mo. But cheaper does not always mean better value. Freelancers are often limited in capacity, tool access, and the ability to handle technical + content + reporting simultaneously." },
  { q: "When should I hire an SEO freelancer?", a: "A freelancer makes sense for small, straightforward projects — a one-time audit, a single page rewrite, or light ongoing optimization for a simple site. If you need ongoing strategy, content, and technical work, an agency or studio provides more consistent delivery." },
  { q: "What do SEO agencies do that freelancers typically cannot?", a: "Agencies typically provide dedicated teams (strategy, content, technical), project management systems, multi-service integration (SEO + social + content), and more accountability through contracts and reporting infrastructure." },
  { q: "Is Seovize an agency or a freelancer?", a: "Seovize is a remote studio — smaller and more focused than a large agency, but with a dedicated team covering strategy, design, content, and technical SEO. You get agency-level accountability and output without agency-level overhead." },
];

const comparison = [
  { attribute: "Monthly cost", freelancer: "$500–$2,000/mo", agency: "$1,000–$5,000+/mo", studio: "$800–$4,500/mo" },
  { attribute: "Capacity", freelancer: "1 person", agency: "Large team", studio: "Focused team" },
  { attribute: "Strategy depth", freelancer: "Varies widely", agency: "Structured", studio: "Structured" },
  { attribute: "Content production", freelancer: "Often limited", agency: "Yes (extra cost)", studio: "Included" },
  { attribute: "Accountability", freelancer: "Variable", agency: "High (contract)", studio: "High (contract)" },
  { attribute: "Responsiveness", freelancer: "Variable", agency: "Slow (account mgr)", studio: "Fast (direct)" },
  { attribute: "Technical SEO", freelancer: "Often shallow", agency: "Full capability", studio: "Full capability" },
  { attribute: "Transparency", freelancer: "High", agency: "Variable", studio: "High" },
];

export default function CompareAgencyVsFreelancerPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={[{ name: "Compare", href: "/compare/seo-agency-vs-freelancer" }, { name: "Agency vs Freelancer", href: "/compare/seo-agency-vs-freelancer" }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Comparison</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO Agency vs Freelancer
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-mist">
            An honest breakdown of the tradeoffs between hiring a freelance SEO specialist vs a focused studio or agency — and how to decide based on your business stage, budget, and goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Talk to Seovize</Button>
            <Button href="/pricing" variant="secondary">See our packages</Button>
          </div>
        </div>
      </section>

      <Section eyebrow="Comparison" title="Side-by-side breakdown">
        <div className="overflow-auto rounded-[2rem] border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-navy">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-mid">Attribute</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-mid">Freelancer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-mid">Large agency</th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.2em] text-mint">Seovize (studio)</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.attribute} className={`border-b border-line ${i % 2 === 0 ? "bg-obsidian" : "bg-navy"}`}>
                  <td className="px-6 py-4 font-semibold text-cloud">{row.attribute}</td>
                  <td className="px-6 py-4 text-mist">{row.freelancer}</td>
                  <td className="px-6 py-4 text-mist">{row.agency}</td>
                  <td className="px-6 py-4 font-semibold text-cloud">{row.studio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="navy" eyebrow="FAQ" title="Agency vs freelancer questions answered">
        <div className="max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </Section>

      <CTABanner
        headline="Looking for the focused studio option?"
        subhead="Seovize sits between freelancer and large agency — focused team, clear deliverables, real accountability, and pricing that makes sense for serious SMBs."
        primaryLabel="See how Seovize works"
        primaryHref="/contact"
      />
    </>
  );
}
