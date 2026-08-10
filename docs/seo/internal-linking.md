# Seovize — Internal Linking Implementation (Phase 7)

The site already has fairly dense internal linking via each city/service page's `relatedPages` array and the homepage service grid (both pre-existing, `lib/site.ts`-driven). This phase's job was to close the two gaps Phase 3's cannibalization report flagged, not rebuild linking from scratch.

## New links added this phase

| Source URL | Target URL | Existing/new | Proposed anchor | Section | User purpose | SEO relationship |
|---|---|---|---|---|---|---|
| `/services/seo` | `/services/semantic-seo` | New | "semantic SEO" | Hero speakable answer box | Let a visitor who wants the specialist methodology self-select into the right page | Sibling/differentiation link — resolves Phase 3 cannibalization risk #1 |
| `/services/semantic-seo` | `/services/seo` | New | "SEO services" | Hero, directly under the speakable answer box | Let a visitor who wants the full-service (not specialist) engagement self-select | Sibling/differentiation link — same fix, reverse direction |

## Already in place (verified this phase, no change needed)

| Source URL | Target URL(s) | Mechanism |
|---|---|---|
| `/` (homepage) | All `/services/*` pages | `services` grid from `lib/site.ts`, renders all 6 service cards with hrefs |
| `/` (homepage) | `/services/semantic-seo` | Explicit CTA button + "See how it works" link in hero |
| `/locations/texas/dallas-seo` | Texas hub, Dallas social media, Houston/Austin SEO, semantic SEO, local SEO, Texas Digital Marketing Report, Texas hub | `relatedPages` array |
| `/locations/texas/houston-seo` | Houston social media, Texas hub, Dallas/Austin SEO, semantic SEO, local SEO | `relatedPages` array |
| `/locations/texas/austin-seo` | Austin social media, Texas hub, Dallas/Houston SEO, semantic SEO | `relatedPages` array |
| `/locations/texas/san-antonio-seo` | San Antonio social media, Texas hub, Houston/Dallas SEO, local SEO | `relatedPages` array |
| `/locations/texas/san-antonio-social-media` | `/locations/texas/san-antonio-seo` (this link is what caused the Phase 4 false-positive "missing page" — the link was always valid) | `relatedPages` array |
| Every commercial page | `/contact` | `CTABanner` component, present on every service/location page |
| Footer | About, Pricing, Blog, Texas Report, Industries, Compare, Contact | `components/Footer.tsx` |

## Not implemented this phase (deferred, low priority)

- `/services/local-seo` ↔ `/locations/texas/seo-services` cross-link tightening (Phase 3 cannibalization risk #2) — both pages already link to related Texas content but don't cross-link to each other directly. Lower severity than the seo/semantic-seo overlap (no near-duplicate H1/speakable-box collision was found here), deferred to a future content pass rather than risking scope creep this phase.
- A dedicated internal-link audit tool run (e.g., checking for orphan pages via crawler) — covered qualitatively in Phase 8's technical audit instead, since no crawler tool is available in this session.
