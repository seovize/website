# Seovize — Page-Level Content Briefs (Phase 5)

Covers the Phase 6 priority list. Most of these pages already went through Sprint 2.1's claim/methodology corrections, so briefs below focus on **what changes in this phase** (differentiation, internal links, the one net-new page), not a rewrite from zero.

---

### `/` (Homepage)
- **Audience:** Any of the 4 priority markets, either service
- **Primary intent:** Brand/entity discovery + service overview
- **Primary cluster:** Brand ("Seovize")
- **Secondary queries:** seo services, social media management Texas
- **Direct answer required:** What Seovize is, who runs it, what it does — already present in the hero speakable box
- **Title/H1:** Keep current ("Seovize | Semantic SEO & Social Media Systems — Texas & U.S.")
- **Entities:** Abdul Ghani, Seovize, Texas, semantic SEO, social media management
- **Objections:** "Is this a real agency or one freelancer?" (founder-led framing already addresses this); "Are these fake stats?" (resolved Sprint 2.1)
- **Deliverables shown:** service grid, process steps, pricing preview
- **Internal links in:** none (root)
- **Internal links out (this phase):** add explicit links to `/services/local-seo` and the new San Antonio page from the services grid / Texas section if not already present
- **Schema:** Organization, WebSite, Person, ProfessionalService (root layout) + FAQPage, Speakable — unchanged
- **Content to remove:** none remaining (Sprint 2.1 already removed fabricated stats and the case-studies section)

---

### `/services/seo`
- **Primary cluster:** National SEO service
- **Differentiation move (Phase 6):** Position explicitly as the *general/entry* SEO offer; strengthen the technical-SEO section (since Phase 2 deferred a standalone technical SEO page) with concrete Core Web Vitals / crawlability deliverables so it fully absorbs that intent
- **Add:** one explicit "want the specialist deep-dive?" link to `/services/semantic-seo`
- **Objections:** "How is this different from your semantic SEO page?" — answer directly in copy, don't let the visitor guess
- **Unsupported claims to remove:** none remaining post-Sprint-2.1
- **Schema:** Service, FAQPage, Speakable, BreadcrumbList — unchanged (HowTo already removed Sprint 2.1)

---

### `/services/semantic-seo`
- **Primary cluster:** Semantic SEO
- **Differentiation move:** Position as the specialist page for buyers who already searched this specific term — assume more sophistication, less "what is SEO" explainer overlap with `/services/seo`
- **Add:** a "start here" backlink context from `/services/seo`
- **Schema:** unchanged (methodology language already corrected Sprint 2.1)

---

### `/services/local-seo`
- **Primary cluster:** Local SEO (national)
- **Move:** keep GBP-methodology content here only; Texas hub should summarize + link rather than duplicate (cannibalization fix from Phase 3)
- **Objection:** "We don't have a physical office — can we still do local SEO?" — already addressed on-page ("No fake address required")
- **Schema:** unchanged

---

### `/locations/texas/dallas-seo`, `/locations/texas/austin-seo`, `/locations/texas/houston-seo`
- **Primary cluster:** respective city SEO cluster
- **Status:** content already corrected in Sprint 2.1 (Dallas: removed "top Dallas SEO expert," LocalBusiness schema, unscoped suburb-page promises). Austin/Houston use the same `CityServicePage` template and don't carry the same specific overclaims Dallas had, but should be spot-checked against the same claim list before Phase 9 sign-off.
- **This phase's change:** none required beyond the internal-link additions below (Phase 7) and the indexing-request action (Phase 8) — these pages are content-complete.

---

### `/locations/texas/san-antonio-seo` — existing page, consistency fixes (correction: see `site-architecture.md`, this page was never missing)
- **Target audience:** San Antonio hospitality, healthcare, SMB, and contractor businesses (same industry set already used on `san-antonio-social-media`)
- **Primary intent:** Commercial/hire
- **Primary cluster:** San Antonio SEO
- **Secondary queries:** San Antonio SEO company, San Antonio SEO agency, local SEO San Antonio
- **Searcher problem:** Finding an SEO provider with real San Antonio market knowledge, not a generic city-page template
- **Required direct answer:** What Seovize delivers for San Antonio businesses, by whom, remotely, honestly scoped
- **Recommended title:** "SEO Services San Antonio Texas | Seovize"
- **Meta description:** "San Antonio SEO services — semantic SEO, local content, and service-area systems for San Antonio businesses in hospitality, healthcare, and contracting. Strategy by Abdul Ghani, 20+ years experience."
- **H1:** "SEO Services for San Antonio Businesses"
- **Heading outline:** market context → deliverables → process → FAQ → CTA (same structure as the other three city pages, via `CityServicePage`)
- **Entities:** San Antonio, Alamo City, hospitality, healthcare, bilingual content (San Antonio's existing social-media page already establishes bilingual framing — reuse, don't invent new claims)
- **Customer objections:** "Do you know San Antonio specifically, or is this templated?" — address with real, specific San Antonio market context (same rigor Dallas/Houston/Austin pages use, no invented stats)
- **Deliverables:** keyword mapping, service-area content scoped to where the client operates (no unscoped suburb-page promises — carrying forward the Sprint 2.1 Dallas fix), ProfessionalService schema (serviceArea only, no fake address), citation building, monthly reporting
- **Evidence requirements:** none beyond founder credentials (20+ years, LinkedIn) — no fabricated stats
- **Internal links in:** Texas hub, San Antonio social media page, homepage
- **Internal links out:** `/services/seo`, `/locations/texas/seo-services`, `/locations/texas/san-antonio-social-media`, Texas Digital Marketing Report
- **Schema:** `cityServiceSchema()` (ProfessionalService only, matching the Sprint 2.1 fix — no LocalBusiness type), FAQPage, Speakable, BreadcrumbList
- **CTA:** "Get a Free San Antonio SEO Audit"
- **Content to remove/avoid:** no "top San Antonio SEO expert" superlative (per Sprint 2.1 pattern), no suburb-page promises beyond what's real

---

### `/services/social-media-management`
- **Primary cluster:** Social media management (national)
- **Status:** content-complete, no changes required this phase beyond internal-link additions (Phase 7)

---

### Technical SEO page — explicitly not briefed

Per the Phase 2 gate decision, no standalone technical-SEO page is created this phase (insufficient evidence of separate intent). If a future GSC pull shows real technical-SEO query volume, revisit.
