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
 */

export interface NurtureStep {
  step: number;
  day: number;
  subject: string;
  buildText: (firstName: string) => string;
  buildHtml: (firstName: string) => string;
}

const REPORT_URL = "https://seovize.com/research/texas-digital-marketing-report-2026";
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
      `Hi ${name},\n\nA few patterns show up over and over in the Texas businesses we audit:\n\n1. Keyword-stuffed pages with no real topical depth — Google (and now AI search) rewards genuine coverage of a subject, not a page repeating "SEO Dallas" ten times.\n2. No schema markup at all — fewer than 12% of Texas SMB sites use FAQ schema, despite it powering roughly a third of local search results.\n3. Zero Google Business Profile activity beyond the initial setup — GBP signals now account for close to a third of local ranking weight.\n\nMost of these are fixable in a day, not a quarter.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>A few patterns show up over and over in the Texas businesses we audit:</p>
        <ol>
          <li>Keyword-stuffed pages with no real topical depth</li>
          <li>No schema markup at all — fewer than 12% of Texas SMB sites use FAQ schema</li>
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
      `Hi ${name},\n\nRanking #1 for one keyword is fragile — an algorithm update or a better-funded competitor can undo it overnight.\n\nWe build semantic SEO instead: content structured around entities and topic clusters, so your site has durable authority across an entire subject, not a single fragile ranking.\n\nThat's also, mechanically, how you get cited inside AI Overviews and ChatGPT answers — those systems pull from sources with topical depth, not single-keyword pages.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Ranking #1 for one keyword is fragile — an algorithm update or a better-funded competitor can undo it overnight.</p>
        <p>We build <strong>semantic SEO</strong> instead: content structured around entities and topic clusters, so your site has durable authority across an entire subject, not a single fragile ranking.</p>
        <p>That's also, mechanically, how you get cited inside AI Overviews and ChatGPT answers.</p>
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
      `Hi ${name},\n\nFair question — AI Overviews have cut organic clicks meaningfully. But that changes *how* people find you, not *whether* they search.\n\nSemantic SEO — entity-first content, structured data — is literally the discipline that gets you cited inside AI answers. Losing clicks to AI Overviews kills agencies still doing keyword-stuffing SEO. It doesn't touch the kind we do.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Fair question — AI Overviews have cut organic clicks meaningfully. But that changes <em>how</em> people find you, not <em>whether</em> they search.</p>
        <p>Semantic SEO — entity-first content, structured data — is literally the discipline that gets you cited inside AI answers. Losing clicks to AI Overviews kills agencies still doing keyword-stuffing SEO. It doesn't touch the kind we do.</p>
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
      `Hi ${name},\n\nLast note from this sequence. If the Texas report was useful and you want the same depth applied to your own site, get the free audit: ${CONTACT_URL}\n\nNo pressure either way — you'll still get a note when the next report edition publishes.\n\n— Seovize`,
    buildHtml: (name) =>
      wrapHtml(`
        <p>Hi ${name},</p>
        <p>Last note from this sequence. If the <a href="${REPORT_URL}" style="color:#14B8A6">Texas report</a> was useful and you want the same depth applied to your own site:</p>
        <p><a href="${CONTACT_URL}" style="color:#14B8A6;font-weight:600">Get your free audit →</a></p>
        <p>No pressure either way — you'll still get a note when the next report edition publishes.</p>
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
