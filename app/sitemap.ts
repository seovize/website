import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { blogPosts, industries, services, site } from "@/lib/site";

/**
 * Vercel's default build clone is `git clone --depth=10` (10 commits, not
 * full history — see vercel.com/docs/builds and the VERCEL_DEEP_CLONE env
 * var). This isn't just a "no history found" risk: verified directly by
 * cloning this repo with --depth=3 and running `git log -1 -- <file>`
 * against a page whose real last-touching commit was NOT among those 3 —
 * git did not error or return empty, it silently reported the shallow
 * boundary commit's date as if it were that file's real history (a wrong
 * date, off by almost a month, for that test). So per-file git dates cannot
 * be trusted at all in a shallow clone, not merely "sometimes missing" —
 * checked once per build and gates every file-date lookup below.
 */
const IS_SHALLOW_REPO = (() => {
  try {
    return execSync("git rev-parse --is-shallow-repository", {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim() === "true";
  } catch {
    // git unavailable at all — treat the same as "cannot be trusted"
    return true;
  }
})();

/**
 * Truthful lastModified: reads the real last-commit date of the route's own
 * page.tsx from git history, when that's actually available and accurate.
 * Returns undefined — omitting lastModified entirely — rather than ever
 * guessing or fabricating a date, in three known cases:
 *
 * 1. The build's git checkout is shallow (see IS_SHALLOW_REPO above) — file
 *    dates from a shallow clone cannot be trusted, proven above, so none are
 *    used at all in that case.
 * 2. The route has no literal page.tsx (e.g. /industries/law-firms is
 *    rendered by app/industries/[slug]/page.tsx, not a per-slug file) — there
 *    is no single file whose git history represents that specific page's
 *    content history, so no date is asserted.
 * 3. git itself isn't available in the environment running the build.
 *
 * In every case the caller omits `lastModified` for that URL rather than
 * substituting a shared fallback date, which would misrepresent unrelated
 * pages as having been updated on the same day.
 *
 * Known limitation even when a date IS found (full clone only): git's
 * last-commit date for a file reflects the last time its bytes changed for
 * any reason (including a formatting or lint fix), not necessarily the last
 * *meaningful* content update. This is the documented trade-off of using
 * file history at all — still real and non-fabricated, just coarser than a
 * maintained per-page "updated on" field would be.
 */
function getLastModified(route: string): Date | undefined {
  if (IS_SHALLOW_REPO) return undefined;
  const filePath = path.join(process.cwd(), "app", route, "page.tsx");
  if (!existsSync(filePath)) return undefined;
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      cwd: process.cwd(),
      encoding: "utf8",
    }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

function urlEntry(
  route: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] {
  const entry: MetadataRoute.Sitemap[number] = {
    url: `${site.domain}${route}`,
    changeFrequency,
    priority,
  };
  if (lastModified) entry.lastModified = lastModified;
  return entry;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const highPriority = [""];
  const medHighPriority = [
    "/pricing",
    "/about",
    "/contact",
    "/locations/texas",
    "/locations/texas/social-media-management",
    "/locations/texas/seo-services",
    "/locations/texas/social-media-manager",
    "/compare/seo-agency-vs-freelancer",
    "/locations/texas/houston-seo",
    "/locations/texas/houston-social-media",
    "/locations/texas/dallas-seo",
    "/locations/texas/dallas-social-media",
    "/locations/texas/austin-seo",
    "/locations/texas/austin-social-media",
    "/locations/texas/san-antonio-seo",
    "/locations/texas/san-antonio-social-media",
  ];
  const medPriority = [
    "/blog",
    "/industries",
    ...industries.map((i) => i.href),
    "/industries/home-services-social-media-management",
    "/guides",
    "/guides/social-media-management-pricing",
    "/guides/hire-social-media-manager-vs-agency",
    "/guides/social-media-content-ideas-home-services",
    "/guides/organic-social-vs-paid-social",
    "/locations",
    // Added — verified public, indexable, self-canonical, and (for the first
    // two) linked from the site footer. /locations/texas/el-paso-social-media
    // and /locations/texas/fort-worth-social-media were investigated too but
    // excluded: both are real, differentiated, indexable pages, but neither
    // is linked from anywhere on the site (orphaned), so they fail the
    // "linked from the site" inclusion bar until that's fixed separately.
    "/privacy-policy",
    "/research/texas-digital-marketing-report-2026",
    "/our-process",
  ];

  const serviceRoutes = services.map((s) => s.href);
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const allRoutes: MetadataRoute.Sitemap = [
    ...highPriority.map((route) => urlEntry(route, "weekly", 1, getLastModified(route))),
    ...serviceRoutes.map((route) => urlEntry(route, "monthly", 0.9, getLastModified(route))),
    ...medHighPriority.map((route) => urlEntry(route, "monthly", 0.8, getLastModified(route))),
    ...medPriority.map((route) => urlEntry(route, "monthly", 0.7, getLastModified(route))),
    // Blog posts carry an explicit, maintained `date` field in lib/site.ts —
    // the "preferred" tier (a real publication date from a trusted data
    // source), so these always get a lastModified and never need the git
    // fallback or an omission.
    ...blogRoutes.map((route, i) => urlEntry(route, "monthly", 0.6, new Date(blogPosts[i].date))),
  ];

  return allRoutes;
}
