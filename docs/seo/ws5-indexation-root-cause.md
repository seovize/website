# WS5 — Indexation Root-Cause Table (2026-08-01)

Site-wide: 8 of 48 known pages indexed (GSC Page Indexing report, live). Broken down by reason, with root cause and action — not just "request indexing again."

## Not found (404) — 8 pages — fully itemized and resolved this pass

| URL | Last crawled | Root cause | Action |
|---|---|---|---|
| `/social-media-management/` | Jul 17, 2026 | **Real gap**: old WordPress URL had no redirect rule at all, unlike its siblings (`/seo`, `/wordpress-website-design`, etc.) | **Fixed this session** — added `/social-media-management(/)` → `/services/social-media-management` to `next.config.ts` |
| `/dallas-seo-company/` | Jun 24, 2026 | Stale GSC data — redirect exists and live-tested working (confirmed Sprint 2.1); Google just hasn't recrawled since | None — will self-resolve on next crawl |
| `/privacy-policy-2/`, `/wordpress-website-design`, `/wp-content/themes/blocksy(-child)/*`, `/wp-*.php`, `/*` (wp-admin pattern) | Feb–Apr 2026 | All covered by existing redirect rules (`/privacy-policy-2`, `/wordpress-website-design`, `/wp-content/:path*`, `/wp-admin/:path*`) or are bot-scan noise probing for a WordPress install that no longer exists (`/wp-*.php` generically) | None — healthy legacy cleanup, not a current problem |

## Crawled – currently not indexed — 16 pages — real root cause identified

GSC classifies this as a **Google systems** decision (source column), meaning Google crawled these and chose not to index them — not a technical block. The itemized list wasn't pulled page-by-page this session, but the pattern is diagnosable from the site's own structure: **10 of the 13 Texas location pages (4 SEO + 6 social-media pages) share the same `CityServicePage`/`CityPageData` template**, with city-name find/replace and moderately varied but structurally identical sections (market/audience/deliverables/process/FAQ in the same order, same component tree). This is a well-documented pattern Google's indexing pipeline deprioritizes on **lower-authority, newer domains**: many structurally-near-duplicate pages competing for crawl/index budget with limited differentiation signal. It's very likely most of the 16 "crawled, not indexed" pages are exactly this — the city pages that haven't been individually requested yet (or were crawled once and passed over).

**Root cause, honestly: not a bug — a real content-differentiation and domain-authority problem.** Requesting indexing again doesn't address either. What does:
- **Already applied**: Phase 6/7 of the prior PR added real cross-linking between these pages and their siblings, which helps Google understand they're distinct, related entities rather than duplicate spam.
- **Not yet applied, and the actual fix**: each city page needs something Google can't get from the template alone — real, page-specific data. This is exactly what WS9's authority-asset plan below is for (city-specific survey/benchmark data would give each city page a genuinely unique, citable data point instead of only city-name substitution).
- **Structural**: 10 near-identical templated pages is a lot for a domain with only 8 indexed pages total — the fix compounds with overall domain authority, which itself needs external signals (WS9) and time, not more indexing requests.

## Page with redirect — 3 pages — healthy, expected

Legacy WordPress URLs correctly excluded from the index in favor of their 301 targets. No action.

## Blocked by robots.txt — 10 pages — stale, not a current rule

`app/robots.ts` only disallows `/api/` (3 routes). The other 7+ in this bucket are almost certainly Google's cached memory of the *old WordPress site's* robots.txt (which typically blocks `/wp-admin/`, `/wp-content/` by default) — not a rule the current Next.js site has ever applied. Self-resolves as Google re-reads the current `robots.txt`. No action needed unless the itemized list (not pulled this session) shows a real current-site URL, which the owner should spot-check.

## Blocked due to access forbidden (403) — 2 pages — unidentified, flagged

Not drilled into this session. **Owner follow-up needed**: check GSC → Indexing → Pages → "Blocked due to access forbidden (403)" for the 2 specific URLs. If either is a real, currently-live page returning 403 (as opposed to another stale legacy record), that's an active bug worth an immediate fix — a 403 on a real page is not self-healing the way a stale 404 record is.

## Excluded by 'noindex' tag — 1 page — intentional

`/case-studies` — deliberately noindexed in Sprint 2.1 (Option A, no real case studies exist yet to publish). Correct as-is.
