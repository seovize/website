import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

// Temporarily de-surfaced (Sprint 2.1, Option A): no named, verifiable case
// studies exist yet. Rather than publish placeholder metrics as if they were
// real client outcomes, this page stays live (for old inbound links) but is
// noindexed, removed from nav/sitemap/CTAs, and carries no invented figures.
// Replace with real named case studies (client name or described anonymized
// scope, dated, with actual before/after data) when they exist, then restore
// to nav/sitemap.
export const metadata: Metadata = {
  title: "Case Studies",
  description: "Seovize is building out named, verifiable case studies.",
  alternates: { canonical: "/case-studies" },
  robots: { index: false, follow: true },
};

export default function CaseStudiesPage() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-mint">Case studies</p>
        <h1 className="mt-5 font-display text-4xl font-black tracking-tight text-cloud md:text-6xl">
          We&rsquo;re building out real, named case studies.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-mist">
          We&rsquo;d rather publish nothing than publish invented numbers. This page will carry named
          proof — client, scope, dates, and measurable before/after data — once we have engagements we
          can document publicly. In the meantime, {" "}
          <Link href="/contact" className="font-semibold text-mint hover:underline">
            get in touch
          </Link>{" "}
          and {" "}
          <Link href="/about" className="font-semibold text-mint hover:underline">
            Abdul Ghani
          </Link>{" "}
          can walk you through recent work directly.
        </p>
        <p className="mt-4 text-sm text-slate-mid">
          Have a question about a specific engagement? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
