import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Web App Manifest — enables "Add to Home Screen" / app-like install,
// standalone display, and themed splash on mobile.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seovize — SEO & Social Media Systems",
    short_name: "Seovize",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B1020",
    theme_color: "#0B1020",
    categories: ["business", "marketing", "productivity"],
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
