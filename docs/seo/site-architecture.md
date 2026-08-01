# Seovize — Final Site Architecture (Phase 4)

Documents the architecture as it stands after Phases 1–3, plus the one confirmed gap (San Antonio SEO page). This is **not a redesign** — the 2026 site architecture (29 static routes) is sound; this phase records role/parent/child/schema/indexability decisions per the keyword map above, and calls out the one page to create.

## Priority pages (Phase 6 implementation scope)

| URL | Role | Target cluster | Parent | Child pages | Internal-link sources | Conversion destination | Indexable | Schema | Maintenance owner |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Entry point, brand + service overview | Brand/entity, "Seovize" | — | All service + Texas pages | Nav, all pages | `/contact` | Yes | Organization, WebSite, Person, ProfessionalService (root layout), FAQPage, Speakable | Founder |
| `/services/seo` | General SEO service offer (default entry) | National SEO service | `/` | `/services/semantic-seo` (deeper), `/services/local-seo` | Homepage, industries, blog | `/contact` | Yes | Service, FAQPage, Speakable, BreadcrumbList | Founder |
| `/services/semantic-seo` | Specialist methodology deep-dive | Semantic SEO | `/services/seo` | — | `/services/seo`, blog, homepage | `/contact` | Yes | Service, FAQPage, Speakable, BreadcrumbList | Founder |
| `/services/local-seo` | National local-SEO product page | Local SEO | `/services/seo` | Texas hub (cross-link) | `/services/seo`, Texas hub | `/contact` | Yes | Service, FAQPage, BreadcrumbList | Founder |
| `/locations/texas/dallas-seo` | Dallas SEO service page | Dallas SEO | `/locations/texas` | — | Texas hub, `/services/seo`, Dallas social media page | `/contact` | Yes | ProfessionalService (`cityServiceSchema`), FAQPage, Speakable, BreadcrumbList | Founder |
| `/locations/texas/austin-seo` | Austin SEO service page | Austin SEO | `/locations/texas` | — | Texas hub, `/services/seo` | `/contact` | Yes | Same pattern | Founder |
| `/locations/texas/houston-seo` | Houston SEO service page | Houston SEO | `/locations/texas` | — | Texas hub, `/services/seo` | `/contact` | Yes | Same pattern | Founder |
| `/locations/texas/san-antonio-seo` | San Antonio SEO service page | San Antonio SEO | `/locations/texas` | — | Texas hub, `/services/seo`, San Antonio social media page | `/contact` | Yes | Same pattern | Founder |
| `/locations/texas/social-media-manager` | Texas-wide social media hire page | Texas social media manager | `/locations/texas` | City social media pages | Texas hub, homepage | `/contact` | Yes | ProfessionalService, FAQPage, Speakable | Founder |
| `/services/social-media-management` | National social media service page | Social media management | `/` | Texas social media pages (cross-link) | Homepage, industries | `/contact` | Yes | Service, FAQPage | Founder |

## Architecture gap — correction

An earlier draft of this document incorrectly claimed `/locations/texas/san-antonio-seo` didn't exist (misread from an internal link in `san-antonio-social-media/page.tsx` without checking the filesystem directly). **It does exist** — all four priority cities (Dallas, Austin, Houston, San Antonio) already have both an SEO page and a social-media page. There is no page-creation gap in this set. Phase 6 instead found that Houston, Austin, and San Antonio's SEO pages had the same "Top X SEO Company" title overclaim, `LocalBusiness`-schema copy, and `HowTo` JSON-LD that Sprint 2.1 had already fixed on the Dallas page but not propagated to the other three — that inconsistency is what Phase 6 corrected, not a missing page.

## Everything else (unchanged this phase)

The remaining 20+ routes (`/about`, `/pricing`, `/our-process`, `/blog` + posts, `/industries` + slugs, `/research/texas-digital-marketing-report-2026`, `/compare/seo-agency-vs-freelancer`, `/locations/texas/*-social-media` for El Paso/Fort Worth, `/case-studies` [noindexed per Sprint 2.1], `/privacy-policy`, `/contact`) keep their current role, parent/child relationships, and schema — no evidence from Phases 1–3 supports restructuring them, and the task spec explicitly says not to create pages without unique demand and evidence. `/case-studies` stays noindexed (Sprint 2.1 Option A) until real case studies exist.
