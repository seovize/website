import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/pricing", "/case-studies", "/about", "/contact"];
  const serviceRoutes = services.map((service) => service.href);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : route.includes("services") ? 0.9 : 0.7,
  }));
}
