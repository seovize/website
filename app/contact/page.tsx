import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConversionTracker } from "@/components/ConversionTracker";
import { JsonLd } from "@/components/JsonLd";
import { LeadSourceFields } from "@/components/LeadSourceFields";
import { site, founder } from "@/lib/site";

const serviceOptions = [
  "SEO Services",
  "Semantic SEO",
  "Local SEO — Texas",
  "Social Media Management",
  "Content Marketing",
  "Website Design",
  "Full Growth System",
];

export const metadata: Metadata = {
  title: "Contact Seovize | Get Your Free SEO & Social Media Audit",
  description:
    "Get a free growth roadmap from Abdul Ghani — Texas SEO expert and Seovize founder. Specializing in semantic SEO, local SEO, and social media management for Texas and U.S. businesses. Response within 1 business day.",
  alternates: { canonical: "/contact" },
};

function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Seovize",
    url: `${site.domain}/contact`,
    description: "Contact Abdul Ghani at Seovize for a free SEO audit, social media strategy, or custom growth roadmap.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      availableLanguage: "English",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "State", name: "Texas" },
      ],
    },
  };
}

const steps = [
  { n: "01", title: "Submit your request", desc: "Fill in the form with your business, target location, and the service you need most." },
  { n: "02", title: "Free audit within 24h", desc: "Abdul Ghani personally reviews your site and prepares a targeted growth roadmap — no generic templates." },
  { n: "03", title: "Strategy call", desc: "We walk through the roadmap together, align on scope and timeline, and decide if it's the right fit." },
];

interface Props {
  searchParams: Promise<{ success?: string; error?: string; service?: string }>;
}

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const sent = params.success === "true";
  const failed = Boolean(params.error);
  // Pre-select the service when arriving from a pricing card / service CTA.
  const preselectedService =
    params.service && serviceOptions.includes(params.service) ? params.service : "";

  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <section className="px-4 pb-20 pt-20 sm:px-5 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">

            {/* ── LEFT — trust + what to expect ─── */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint">
                Free audit · No obligation
              </p>
              <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-cloud md:text-5xl">
                Get your free<br />
                <span className="text-mint">growth roadmap.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-[1.8] text-mist">
                Tell us what you need — SEO, social media management, or a full Texas growth system — and Abdul Ghani will personally review your site and send back a prioritized action plan within one business day.
              </p>

              {/* Trust stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {[
                  { v: "20+", l: "Years experience" },
                  { v: "93", l: "Client projects" },
                  { v: "< 1d", l: "Response time" },
                  { v: "4.3★", l: "Avg client rating" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-line bg-navy px-4 py-4 text-center">
                    <p className="font-mono text-xl font-bold text-cloud">{s.v}</p>
                    <p className="mt-1 text-[10px] font-medium text-slate-mid">{s.l}</p>
                  </div>
                ))}
              </div>

              {/* What happens next */}
              <div className="mt-10">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-mid">
                  What happens next
                </p>
                <div className="space-y-5">
                  {steps.map((s) => (
                    <div key={s.n} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-mint/30 bg-mint/10 font-mono text-xs font-bold text-mint">
                        {s.n}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-cloud">{s.title}</p>
                        <p className="mt-0.5 text-sm text-mist">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client quote */}
              <div className="mt-10 rounded-2xl border border-line bg-navy p-6">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} className="h-3 w-3 text-mint" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-[1.8] text-mist italic">
                  &ldquo;What stood out immediately was the strategic thinking — they approached the project with a forward-looking perspective that ensured the final result would serve my objectives both now and in the future.&rdquo;
                </p>
                <p className="mt-3 text-[11px] font-semibold text-slate-mid">K. McIver · United States · Verified client</p>
              </div>

              {/* Alternative conversion paths */}
              {site.bookingUrl && (
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-mint/40 bg-mint/[0.06] px-6 text-sm font-bold text-mint transition hover:bg-mint/[0.12]"
                >
                  Prefer to talk? Book a call →
                </a>
              )}

              {/* Direct email */}
              <p className="mt-8 text-sm text-mist">
                Prefer email?{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
                  {site.email}
                </a>
              </p>
            </div>

            {/* ── RIGHT — form ─────────────────── */}
            <div>
              {sent ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[2rem] border border-mint/30 bg-navy p-10 text-center">
                  <ConversionTracker event="audit_requested" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/10">
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden="true">
                      <path d="M2 10l7 7L22 2" stroke="#14B8A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-black text-cloud">Request received!</h2>
                  <p className="mt-3 max-w-xs text-sm leading-[1.7] text-mist">
                    {founder.name} will personally review your site and respond within 1 business day with your free growth roadmap.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist transition hover:border-mint/40 hover:text-cloud"
                  >
                    Back to homepage →
                  </Link>
                </div>
              ) : (
                <form
                  action="/api/contact"
                  method="POST"
                  className="rounded-[2rem] border border-line bg-navy p-8 md:p-10"
                >
                  <h2 className="font-display text-xl font-black text-cloud">
                    Tell us about your business
                  </h2>
                  <p className="mt-1 text-sm text-slate-mid">All fields marked * are required.</p>

                  {/* Honeypot — hidden from humans, bots fill it and get dropped server-side.
                      Named distinctly from the real "company" field below. */}
                  <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                    <label>
                      Leave this field empty
                      <input name="hp_field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <LeadSourceFields />

                  {failed && (
                    <div className="mt-5 rounded-xl border border-orange/40 bg-orange/[0.08] px-4 py-3 text-sm text-cloud">
                      Something went wrong sending your request. Please try again, or email us
                      directly at{" "}
                      <a href={`mailto:${site.email}`} className="font-semibold text-mint hover:underline">
                        {site.email}
                      </a>
                      .
                    </div>
                  )}

                  <div className="mt-7 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Name *
                        </span>
                        <input
                          name="name"
                          required
                          placeholder="Your full name"
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Email *
                        </span>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Company <span className="font-normal normal-case text-slate-mid/70">(optional)</span>
                        </span>
                        <input
                          name="company"
                          placeholder="Your business name"
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        />
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Phone <span className="font-normal normal-case text-slate-mid/70">(optional)</span>
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          placeholder="(555) 555-5555"
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        />
                      </label>
                    </div>

                    <label className="grid gap-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                        Website URL *
                      </span>
                      <input
                        name="website"
                        type="url"
                        required
                        placeholder="https://yourwebsite.com"
                        className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                      />
                      <span className="text-[10px] text-slate-mid">We need this to run your audit.</span>
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Service needed *
                        </span>
                        <select
                          name="service"
                          required
                          defaultValue={preselectedService}
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        >
                          <option value="">Select a service…</option>
                          {serviceOptions.map((s) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                      </label>
                      <label className="grid gap-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                          Texas city (if local)
                        </span>
                        <select
                          name="city"
                          className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                        >
                          <option value="">Not Texas-specific</option>
                          <option>Houston</option>
                          <option>Dallas</option>
                          <option>Austin</option>
                          <option>San Antonio</option>
                          <option>Fort Worth</option>
                          <option>Other Texas city</option>
                        </select>
                      </label>
                    </div>

                    <label className="grid gap-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-mid">
                        Message <span className="font-normal normal-case text-slate-mid/70">(optional)</span>
                      </span>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your business, current challenges, and what you're trying to achieve…"
                        className="rounded-xl border border-line bg-obsidian px-4 py-3 text-sm text-cloud placeholder:text-slate-mid/60 focus:border-mint/40 focus:outline-none focus:ring-1 focus:ring-mint/20"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 w-full rounded-full bg-orange py-4 text-sm font-bold text-white shadow-sm transition hover:bg-orange/90 active:scale-[0.99]"
                  >
                    Send request — get free audit →
                  </button>

                  <p className="mt-4 text-center text-[10px] text-slate-mid">
                    No spam. No retainer commitment needed to get the audit. Personal response from Abdul Ghani within 1 business day.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
