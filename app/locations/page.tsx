import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Locations | Texas SEO & Social Media by Seovize",
  description: "Seovize serves Texas businesses in Houston, Dallas, Austin, and San Antonio with remote SEO, semantic SEO, and social media management systems.",
  alternates: { canonical: "/locations/texas" },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Locations", href: "/locations/texas" }]} />
      <Section eyebrow="Locations" title="Remote studio. Texas-wide reach.">
        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/locations/texas" className="group rounded-[2rem] border border-line bg-navy p-8 transition hover:border-mint/30">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-mint">Primary market</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cloud">Texas</h2>
            <p className="mt-3 text-sm leading-7 text-mist">Houston · Dallas · Austin · San Antonio — dedicated SEO and social media management strategies for each Texas metro.</p>
            <span className="mt-5 inline-block text-xs font-semibold text-mint group-hover:underline">Explore Texas →</span>
          </Link>
          <div className="rounded-[2rem] border border-line bg-navy p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-mid">Nationwide</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cloud">U.S. Brands</h2>
            <p className="mt-3 text-sm leading-7 text-mist">Seovize works with growth-focused brands across the United States — remote-first, founder-led, and built for results regardless of location.</p>
            <Link href="/contact" className="mt-5 inline-block text-xs font-semibold text-mint hover:underline">Start a conversation →</Link>
          </div>
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
