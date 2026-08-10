/**
 * Texas Digital Marketing Report nurture sequence — pure schedule + content.
 *
 * Architecture note: this runs natively on Vercel Cron + Resend instead of
 * Brevo's Marketing Automation UI. Two reasons: (1) the connected Brevo
 * account is on the free "Hobby" plan, where visual automation workflows are
 * typically gated behind a paid tier, and (2) Brevo's contact attributes
 * (SIGNUP_DATE, SEQUENCE_STEP) already function as a perfectly adequate state
 * store, so no new database is needed. Brevo stays the system of record for
 * the lead; this module only decides *when* to send and *what*.
 *
 * Step 0 (Day 0) is the immediate confirmation email sent synchronously by
 * app/api/report-signup/route.ts at signup time — it is NOT part of this
 * schedule. This schedule covers steps 1-6, sent by the daily cron job.
 *
 * CORRECTED (2026-08-11): Sprint 2.1's site-wide claim audit and the 2026-08-02
 * report retraction both swept `app/` only, so this file kept shipping the exact
 * claims those passes removed — to real recipients, daily, via Vercel Cron.
 * Three fabricated statistics in step 1 (a "12% of Texas SMB sites use FAQ
 * schema" figure, and two "roughly a third" ranking-weight figures) had no
 * source and were the same class of invented number that forced the report
 * retraction. Steps 2 and 4 asserted that semantic SEO is "mechanically" and
 * "literally" what gets you cited in AI Overviews — the precise causality
 * overclaim Sprint 2.1 corrected on /services/semantic-seo. Step 6 invited
 * readers to reflect on a report whose contents no longer exist and promised a
 * "next edition" that was never a real programme.
 *
 * Rule this file forgot: every claim surface ships, not just the ones under
 * `app/`. Anything added here is subject to the same evidence bar as page copy —
 * no statistic without a real, citable source, and no guaranteed-citation
 * language about AI answer surfaces.
 */

export interface NurtureStep {
  step: number;
  day: number;
  subject: string;
  buildText: (firstName: string) => string;
  buildHtml: (firstName: string) => string;
}

const CONTACT_URL = "https://seovize.com/contact";

function wrapHtml(bodyHtml: string): string {
  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#0B1020;line-height:1.7;max-width:560px">
      ${bodyHtml}
      <p style="color:#475569;font-size:13px;margin-top:28px">— Seovize · Build authority. Capture demand.</p>
    </div>`.trim();
}

export const nurtureSchedule: NurtureStep[] = [
  {
    step: 1,
    day: 2,
    subject: "The 3 mistakes costing Texas businesses the most traffic",
    buildText: (name) =>
      `Hi ${name},\n\nA few patterns show up over and over in the Texas businesses we audit:\n\n1. Keyword-stuffed pages with no real topical depth — Google (and now AI search) rewards genuine coverage of a subject, not a page repeating "SEO Dallas" ten times.\n2. No schema markup at all — structured data won't rank a page by itself, but without it you aren't eligible for the rich results your competitors are showing up in.\n3. Zero Google Business Profile activity beyond the initial setup — Google's own local guidance weighs relevance, distance and prominence, and a profile nobody has touched since setup undercuts two of the three.\n\nMost of these are fixable in a day, not a quarter.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>A few patterns show up over and over in the Texas businesses we audit:</p>
        <ol>
          <li>Keyword-stuffed pages with no real topical depth</li>
          <li>No schema markup at all — no rich-result eligibility as a result</li>
          <li>Zero Google Business Profile activity beyond the initial setup</li>
        </ol>
        <p>Most of these are fixable in a day, not a quarter.</p>
      `),
  },
  {
    step: 2,
    day: 5,
    subject: "Why we don't chase keyword rankings anymore",
    buildText: (name) =>
      `Hi ${name},\n\nRanking #1 for one keyword is fragile — an algorithm update or a better-funded competitor can undo it overnight.\n\nWe build semantic SEO instead: content structured around entities and topic clusters, so your site has durable authority across an entire subject, not a single fragile ranking.\n\nIt also improves your odds of being cited inside AI Overviews and ChatGPT answers — those systems draw from sources with clear structure and topical depth. Worth being straight with you: nobody controls whether they cite you, and any agency promising that is selling something. The work makes you easier to draw from, not guaranteed to be drawn from.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Ranking #1 for one keyword is fragile — an algorithm update or a better-funded competitor can undo it overnight.</p>
        <p>We build <strong>semantic SEO</strong> instead: content structured around entities and topic clusters, so your site has durable authority across an entire subject, not a single fragile ranking.</p>
        <p>It also improves your odds of being cited inside AI Overviews and ChatGPT answers — though nobody controls whether they cite you, and any agency promising that is selling something.</p>
      `),
  },
  {
    step: 3,
    day: 9,
    subject: "What a real audit actually looks like",
    buildText: (name) =>
      `Hi ${name},\n\nNo generic template. The free audit covers your actual site: technical issues found, top keyword opportunities, and one clear competitor gap.\n\n"What stood out immediately was the strategic thinking — they approached the project with a forward-looking perspective." — K. McIver, verified client\n\nWant one for your site? ${CONTACT_URL}\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>No generic template. The free audit covers your actual site: technical issues found, top keyword opportunities, and one clear competitor gap.</p>
        <blockquote style="border-left:3px solid #14B8A6;margin:16px 0;padding-left:16px;color:#334155;font-style:italic">
          "What stood out immediately was the strategic thinking — they approached the project with a forward-looking perspective."<br/>— K. McIver, verified client
        </blockquote>
        <p><a href="${CONTACT_URL}" style="color:#14B8A6;font-weight:600">Want one for your site? →</a></p>
      `),
  },
  {
    step: 4,
    day: 13,
    subject: "Is SEO even worth it with AI Overviews now?",
    buildText: (name) =>
      `Hi ${name},\n\nFair question — more searches now end without a click than they used to. But that changes *how* people find you, not *whether* they search.\n\nSemantic SEO — entity-first content, structured data — is the discipline aimed squarely at that surface: making your content clear enough for an answer engine to draw from. It isn't a guarantee of citation, and nobody can honestly offer one. But keyword-stuffing SEO has nothing to offer that surface at all.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Fair question — more searches now end without a click than they used to. But that changes <em>how</em> people find you, not <em>whether</em> they search.</p>
        <p>Semantic SEO — entity-first content, structured data — is the discipline aimed squarely at that surface: making your content clear enough for an answer engine to draw from. It isn't a guarantee of citation, and nobody can honestly offer one. But keyword-stuffing SEO has nothing to offer that surface at all.</p>
      `),
  },
  {
    step: 5,
    day: 16,
    subject: "What it's like working with Abdul",
    buildText: (name) =>
      `Hi ${name},\n\nEvery strategy comes from Abdul Ghani directly — 20+ years in SEO, no account managers relaying between you and the person doing the work.\n\nIf you want to see how that works for your business, the free audit is the fastest way in: ${CONTACT_URL}\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Every strategy comes from Abdul Ghani directly — 20+ years in SEO, no account managers relaying between you and the person doing the work.</p>
        <p><a href="${CONTACT_URL}" style="color:#14B8A6;font-weight:600">See how that works for your business →</a></p>
      `),
  },
  {
    step: 6,
    day: 18,
    subject: "Want a free audit instead of more emails?",
    buildText: (name) =>
      `Hi ${name},\n\nLast note from this sequence. If this way of thinking about search is useful and you want it applied to your own site, the free audit is the fastest way in: ${CONTACT_URL}\n\nNo pressure either way — and thanks for reading.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Last note from this sequence. If this way of thinking about search is useful and you want it applied to your own site:</p>
        <p><a href="${CONTACT_URL}" style="color:#14B8A6;font-weight:600">Get your free audit →</a></p>
        <p>No pressure either way — and thanks for reading.</p>
      `),
  },
];

/**
 * Pure: given how many days have elapsed since signup and the step already
 * reached, return the next step that's now due, or null if none is due yet.
 * Steps are processed one at a time even if multiple are overdue (e.g. cron
 * was down for a week) — this sends the next email in order, not a burst.
 */
export function determineDueStep(daysSinceSignup: number, currentStep: number): NurtureStep | null {
  const next = nurtureSchedule.find((s) => s.step === currentStep + 1);
  if (!next) return null;
  return daysSinceSignup >= next.day ? next : null;
}

export function daysSince(isoDate: string): number {
  const then = new Date(`${isoDate}T00:00:00Z`).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}
