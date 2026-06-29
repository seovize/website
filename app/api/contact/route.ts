import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") || ""),
    email: String(formData.get("email") || ""),
    website: String(formData.get("website") || ""),
    service: String(formData.get("service") || ""),
    city: String(formData.get("city") || ""),
    message: String(formData.get("message") || ""),
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return NextResponse.redirect(new URL("/contact?success=true", request.url), { status: 303 });
}
