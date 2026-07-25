import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Seovize",
  description:
    "How Seovize collects, uses, and stores information submitted through seovize.com — contact forms, email delivery, and analytics.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      <section className="px-4 pb-8 pt-16 sm:px-5 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">Legal</p>
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-mid">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-[1.8] text-mist">
          <div>
            <h2 className="font-display text-xl font-black text-cloud">Overview</h2>
            <p className="mt-3">
              This policy explains what information {site.name} ({site.domain}) collects when you use this
              website, why we collect it, and how it&rsquo;s handled. We collect the minimum information
              needed to respond to your request and run the business — no data is sold, and no information
              is shared beyond the service providers listed below that we use to operate the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Information we collect</h2>
            <p className="mt-3">When you submit the contact form on this site, we collect:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Name and email address",
                "Phone number and company name (if provided)",
                "Your website URL and the service you're interested in",
                "Your message and, if selected, your Texas city",
                "The page you arrived from and campaign parameters (UTM tags), used only to understand which content led to your inquiry",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not use cookies for advertising or cross-site tracking, and we do not run third-party
              ad-tracking pixels on this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">How we use your information</h2>
            <p className="mt-3">Submitted contact information is used only to:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Notify us that you've requested a free audit, and respond to you",
                "Send you a confirmation that your request was received",
                "Follow up about the service you asked about",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Service providers we use</h2>
            <p className="mt-3">
              We use a small number of third-party services to operate this site and respond to inquiries.
              Each only receives the data needed for its function:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span><strong className="text-cloud">Resend</strong> — delivers the lead notification and confirmation emails when you submit the contact form.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span><strong className="text-cloud">Brevo</strong> — stores your contact details as our client-relationship record, so we can follow up on your request.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span><strong className="text-cloud">Vercel Analytics</strong> — collects anonymous, aggregate page-view and performance data. It does not use cookies and does not identify individual visitors.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                <span><strong className="text-cloud">Calendly</strong> — if you choose to book a call, Calendly handles that scheduling directly under its own privacy policy.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Data retention</h2>
            <p className="mt-3">
              We keep contact submissions for as long as needed to respond to your inquiry and maintain a
              record of past client and prospect communication. You can request deletion of your information
              at any time — see below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Your rights</h2>
            <p className="mt-3">
              You can request a copy of the information we hold about you, ask us to correct it, or ask us to
              delete it, at any time. Email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
                {site.email}
              </a>{" "}
              and we&rsquo;ll handle it directly — no automated opt-out flow, just a real response from the
              team.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Changes to this policy</h2>
            <p className="mt-3">
              If how we handle data changes materially, we&rsquo;ll update this page and the date at the top.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-black text-cloud">Contact</h2>
            <p className="mt-3">
              Questions about this policy or your data:{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
