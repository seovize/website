import { NextResponse } from "next/server";
import { advanceSequenceStep, getReportDownloadContacts } from "@/lib/services/brevo";
import { sendNurtureEmail } from "@/lib/services/nurture-email";
import { daysSince, determineDueStep } from "@/lib/nurture-sequence";

/**
 * Daily nurture cron for the Texas report signup list. Configured in
 * vercel.json to run once a day. Vercel automatically sends
 * `Authorization: Bearer <CRON_SECRET>` on cron-triggered requests when
 * CRON_SECRET is set — verified below to stop this endpoint being triggered
 * publicly (it sends real email).
 *
 * Processes one due step per contact per run (not a burst catch-up) — see
 * determineDueStep in lib/nurture-sequence.ts. Each contact is handled in its
 * own try/catch so one failure doesn't block the rest of the batch.
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  let contacts: Awaited<ReturnType<typeof getReportDownloadContacts>>;
  try {
    contacts = await getReportDownloadContacts();
  } catch (err) {
    console.error("[cron/nurture] failed to fetch contacts:", err);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }

  const today = new Date().toISOString().slice(0, 10);
  let sent = 0;
  let errors = 0;
  let skippedSameDay = 0;

  for (const contact of contacts) {
    // At most one step per contact per calendar day, even if the contact is
    // badly overdue (cron downtime, manual re-trigger) — prevents cascading
    // through multiple emails in a single run.
    if (contact.lastSentDate === today) {
      skippedSameDay += 1;
      continue;
    }

    const step = determineDueStep(daysSince(contact.signupDate), contact.sequenceStep);
    if (!step) continue;

    try {
      await sendNurtureEmail(step, contact.email, contact.firstName);
      await advanceSequenceStep(contact.email, step.step, today);
      sent += 1;
    } catch (err) {
      errors += 1;
      console.error(`[cron/nurture] failed for ${contact.email} at step ${step.step}:`, err);
    }
  }

  return NextResponse.json({ processed: contacts.length, sent, errors, skippedSameDay });
}
