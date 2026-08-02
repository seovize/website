# WS1 — Live Production Conversion Verification (2026-08-01)

## Live test results (tested directly against `seovize.com`, not Preview)

**`/contact`** — submitted a real test entry (SEO Services, test email/URL). Result: honest failure.
> "Something went wrong sending your request. Please try again, or email us directly at seovizeofficial@gmail.com."
> URL: `seovize.com/contact?error=send`

No false success. This matches current production code (`git show main:app/api/contact/route.ts` — not yet updated by PR #2, but the pre-existing logic there also fails closed). **Practical impact: every real contact-form submission on the live site right now returns an error to the visitor**, because no lead-capture credentials are configured (confirmed via Vercel dashboard: the `website` project has zero environment variables in any environment — not "misconfigured," genuinely absent).

**`/research/texas-digital-marketing-report-2026`** (report signup) — submitted a real test entry. Result: **false success.**
> Redirected to `?report=sent` — the "you're on the list" state — despite Brevo being completely unconfigured.

Confirmed by reading the exact code currently live on `main`:
```ts
// Persist to Brevo first — this is the actual lead capture. Best-effort:
// don't fail the user-facing flow if Brevo has a hiccup.
try {
  await upsertReportSignup(parsed.data);
} catch (err) {
  console.error("[report-signup] Brevo upsert failed (non-blocking):", err);
}
...
return redirect(request, "report=sent"); // always, regardless of the try/catch above
```
`upsertReportSignup()` throws on every single call right now (no `BREVO_API_KEY`), gets caught, logged to a console nobody is watching, and the visitor is told it worked anyway. **This is an active, currently-deployed false-success bug** — not a hypothetical one. Every real signup since this feature shipped has told the visitor "you're on the list" while saving nothing. They never receive the report, are never added to any list, and the business has no record they ever tried.

This is exactly what Sprint 2.1 (PR #2, unmerged) fixes — its version of this route requires the Brevo upsert to succeed before returning `report=sent`, with the confirmation email as the only best-effort part. **The fix already exists; it just isn't live**, because PR #2 hasn't merged.

## States that can and can't be verified live

Per the task's request to "test success, partial success, failure, duplicate and timeout states" — only **failure** (contact) and **false-success** (report-signup) are observable live right now, because no real credentials exist to produce an actual success. The other states (real success, partial success, duplicate suppression, timeout) are validated by the 17 automated tests added in Sprint 2.1 (`app/api/contact/route.test.ts`, `app/api/report-signup/route.test.ts`), which mock the provider calls to exercise each path deterministically — that's the only way to test those states without live credentials, and it's already done.

## Exact minimum setup steps (owner action required)

1. **Resend**: log into resend.com → API Keys → Create API Key → copy it once (shown only at creation).
2. **Brevo**: log into app.brevo.com → Settings (gear icon) → SMTP & API → API Keys → Generate a new API key → copy it.
3. **Vercel**: vercel.com/seovize/website → Settings → Environment Variables → Add:
   - `RESEND_API_KEY` = (value from step 1)
   - `BREVO_API_KEY` = (value from step 2)
   - Scope: check **Production**, **Preview**, and **Development** (or at minimum Production + Preview, so this can be verified on a Preview deploy before it goes live).
4. Redeploy (Vercel redeploys automatically on the next push/merge to a connected branch, or trigger a manual redeploy from the Deployments tab — no code change needed since the code already reads these exact variable names).
5. Re-test both forms live after redeploy to confirm real success states before considering this closed.

No values were printed, viewed, or handled by me at any point — only variable *names* and their presence/absence were checked (Vercel dashboard confirms which keys exist, never their contents).

## Priority

**The report-signup false-success bug is the more urgent of the two** — it's actively misleading real visitors into believing they've signed up, with silent data loss, versus the contact form which at least fails honestly and points people to a real email address. Both are already fixed in PR #2; this is an argument for prioritizing that PR's review, not for me to act unilaterally.
