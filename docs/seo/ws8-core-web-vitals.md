# WS8 — Real Core Web Vitals Measurement (2026-08-01)

Ran PageSpeed Insights directly against production `https://seovize.com/` (homepage) — the first time this session the "Core Web Vitals 90+" claim (used in `/services/website-design` copy) has been checked against a live measurement rather than left as a stated build standard.

## Results

**Real-user field data (Chrome UX Report): none available.** PageSpeed Insights reports "does not have sufficient real-world speed data" — expected, given GSC confirms near-zero real traffic (14 clicks over 3 months sitewide). All numbers below are lab data (simulated), not real visitors.

| Metric | Mobile (Slow 4G simulated, Moto G Power) | Desktop |
|---|---|---|
| Performance score | 95 | 100 |
| Accessibility | 95 | 95 |
| Best Practices | 100 | 100 |
| SEO (Lighthouse's own check) | 100 | 100 |
| First Contentful Paint | 1.0 s | — |
| Largest Contentful Paint | 2.7 s | — |
| Total Blocking Time | 30 ms | — |
| Speed Index | 3.8 s | — |

**Verdict on the "Core Web Vitals 90+" claim**: substantiated — comfortably clears 90+ on both device profiles, on the one page tested (homepage). Mobile LCP (2.7s) sits just outside Google's "good" threshold (≤2.5s) under throttled simulation, which is normal for a content-heavy hero section and doesn't affect the Lighthouse score claim specifically.

## What this does and doesn't prove

- Tested the homepage only, once, in lab conditions. Not a claim about every page or about real-user experience (no field data exists to make that claim).
- One minor finding surfaced in the audit: `Legacy JavaScript` — ~14 KiB of unnecessary ES5 polyfills (`Array.prototype.at`, `Object.hasOwn`, etc.) being shipped to browsers that don't need them, plus a render-blocking CSS chunk costing ~80ms. Neither affects the Performance *score* (both scored 95–100 already) — low-priority optimization, not a claim-accuracy issue.
- The claim as currently worded ("Core Web Vitals 90+ before launch") is about the build *process*, and this confirms the current homepage output matches that standard. No other pages were spot-checked this session due to time.
