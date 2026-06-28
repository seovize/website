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
    "/case-studies",
    "/blog",
    "/industries",
    "/industries/law-firms",
    "/industries/real-estate",
    "/industries/med-spas",
    "/industries/consultants",
    "/industries/contractors",
    "/industries/restaurants",
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
