import type { MetadataRoute } from "next";
import { blogPosts, services, site } from "@/lib/site";

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
  ];
  const medPriority = [
    "/case-studies",
    "/blog",
    "/industries",
    "/locations",
  ];

  const serviceRoutes = services.map((s) => s.href);
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`);

  const allRoutes: MetadataRoute.Sitemap = [
    ...highPriority.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    })),
    ...serviceRoutes.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...medHighPriority.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...medPriority.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogRoutes.map((route) => ({
      url: `${site.domain}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return allRoutes;
}
