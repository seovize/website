import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactEmail, sendLeadConfirmation } from "@/lib/services/contact";

function redirect(request: Request, query: string) {
  return NextResponse.redirect(new URL(`/contact?${query}`, request.url), { status: 303 });
}

export async function POST(request: Request) {
  const formData = await request.formData();

  // Honeypot: bots fill the hidden "company" field. Pretend success, drop silently.
  if (String(formData.get("company") || "").trim() !== "") {
    return redirect(request, "success=true");
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    website: formData.get("website"),
    service: formData.get("service"),
    city: formData.get("city"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return redirect(request, "error=validation");
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return redirect(request, "error=send");
  }

  // Confirmation auto-reply to the lead — best-effort, never blocks the lead.
  try {
    await sendLeadConfirmation(parsed.data);
  } catch (err) {
    console.error("[contact] confirmation auto-reply failed (non-blocking):", err);
  }

  // Best-effort secondary delivery (e.g. CRM/Slack). Never blocks the lead.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
      });
    } catch (err) {
      console.error("[contact] webhook failed (non-blocking):", err);
    }
  }

  return redirect(request, "success=true");
}
