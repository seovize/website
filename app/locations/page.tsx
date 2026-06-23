import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Locations | SEO & Social Media by Region",
  description: "Seovize provides remote SEO and social media management for U.S. businesses. Explore our Texas coverage and other service areas.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Locations", href: "/locations" }]} />

      <section className="noise px-5 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mint">Service areas</p>
          <h1 className="font-display text-5xl font-black leading-[1.0] tracking-tight text-cloud md:text-7xl">
            SEO &amp; Social Media by Location
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
            Seovize is a remote-first studio serving U.S. businesses. We build dedicated location-specific SEO and social media strategies for the markets that matter to your business.
          </p>
        </div>
      </section>

      <Section eyebrow="Current service areas">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/locations/texas"
            className="group rounded-[2rem] border border-line bg-navy p-8 transition hover:border-mint/30"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mint">Active</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cloud">Texas</h2>
            <p className="mt-3 text-sm leading-7 text-mist">
              SEO, semantic SEO, social media management, and local search for Texas service businesses and SMBs.
            </p>
            <span className="mt-5 block text-xs font-semibold text-mint group-hover:underline">
              Explore Texas →
            </span>
          </Link>
          <div className="rounded-[2rem] border border-line bg-navy/50 p-8 opacity-60">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">Coming soon</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cloud">Florida</h2>
            <p className="mt-3 text-sm leading-7 text-mist">Dedicated Florida service pages and market coverage coming soon.</p>
          </div>
          <div className="rounded-[2rem] border border-line bg-navy/50 p-8 opacity-60">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-mid">Coming soon</p>
            <h2 className="mt-3 font-display text-3xl font-black text-cloud">New York</h2>
            <p className="mt-3 text-sm leading-7 text-mist">Dedicated New York service pages and market coverage coming soon.</p>
          </div>
        </div>
      </Section>

      <CTABanner
        headline="Your state not listed yet?"
        subhead="We serve businesses nationwide. Location pages help us build targeted SEO content for specific markets — but our services are available to any U.S. business."
        primaryLabel="Get a Growth Roadmap"
        primaryHref="/contact"
      />
    </>
  );
}
