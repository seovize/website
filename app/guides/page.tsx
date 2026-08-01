import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Guides | Seovize",
  description: "Practical, evidence-based guides on social media management pricing, hiring decisions, and organic vs paid strategy for service businesses.",
  alternates: { canonical: "/guides" },
};

const guides = [
  {
    title: "Social Media Management Pricing",
    desc: "What social media management actually costs, published package pricing, and a budgeting checklist.",
    href: "/guides/social-media-management-pricing",
  },
  {
    title: "Hire a Social Media Manager vs an Agency",
    desc: "The real cost, capacity and risk trade-offs between an in-house hire and a studio or agency.",
    href: "/guides/hire-social-media-manager-vs-agency",
  },
  {
    title: "Social Media Content Ideas for Home Services",
    desc: "Repeatable content formats built around real jobs, not generic templates.",
    href: "/guides/social-media-content-ideas-home-services",
  },
  {
    title: "Organic Social vs Paid Social",
    desc: "What each one actually builds, what it costs, and when you need both.",
    href: "/guides/organic-social-vs-paid-social",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Guides", href: "/guides" }]} />
      <section className="noise px-5 pb-16 pt-20 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Guides</p>
          <h1 className="font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
            Decision guides for social media, pricing and strategy.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            Straight answers to the questions service businesses ask before committing budget — no fabricated numbers, no fake averages.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-2xl border border-line bg-navy p-6 transition hover:border-mint/40"
            >
              <p className="font-display text-lg font-bold text-cloud group-hover:text-mint">{g.title}</p>
              <p className="mt-2 text-sm leading-7 text-mist">{g.desc}</p>
            </Link>
          ))}
        </div>
      </Section>
      <CTABanner
        headline="Have a question these guides don't answer?"
        subhead="Ask us directly — we'll give you a straight answer, not a sales pitch."
        primaryLabel="Ask a Question"
        primaryHref="/contact"
      />
    </>
  );
}
