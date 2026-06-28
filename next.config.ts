import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // ── Old WordPress service/nav pages ──
      { source: "/seo", destination: "/services/seo", permanent: true },
      { source: "/services", destination: "/services/seo", permanent: true },
      { source: "/seo/", destination: "/services/seo", permanent: true },
      { source: "/services/", destination: "/services/seo", permanent: true },

      // ── Old WordPress location page (16,963 impressions) ──
      { source: "/dallas-seo-company", destination: "/locations/texas/dallas-seo", permanent: true },
      { source: "/dallas-seo-company/", destination: "/locations/texas/dallas-seo", permanent: true },

      // ── Old WordPress blog posts (29K+ impressions total) ──
      { source: "/how-many-keywords-should-i-use-for-seo", destination: "/blog/how-many-keywords-should-i-use-for-seo", permanent: true },
      { source: "/how-many-keywords-should-i-use-for-seo/", destination: "/blog/how-many-keywords-should-i-use-for-seo", permanent: true },
      { source: "/how-long-does-it-take-to-learn-seo-breakdown", destination: "/blog/how-long-does-it-take-to-learn-seo", permanent: true },
      { source: "/how-long-does-it-take-to-learn-seo-breakdown/", destination: "/blog/how-long-does-it-take-to-learn-seo", permanent: true },
      { source: "/what-are-reciprocal-links-in-seo-their-impact-on-rankings", destination: "/blog/reciprocal-links-seo", permanent: true },
      { source: "/what-are-reciprocal-links-in-seo-their-impact-on-rankings/", destination: "/blog/reciprocal-links-seo", permanent: true },
      { source: "/slug-in-seo", destination: "/blog/seo-slug-guide", permanent: true },
      { source: "/slug-in-seo/", destination: "/blog/seo-slug-guide", permanent: true },
      { source: "/how-i-helped-amazidshop-com-achieve-top-rankings-on-google", destination: "/case-studies", permanent: true },
      { source: "/how-i-helped-amazidshop-com-achieve-top-rankings-on-google/", destination: "/case-studies", permanent: true },
      { source: "/how-we-ranked-kingmodapk-net", destination: "/case-studies", permanent: true },
      { source: "/how-we-ranked-kingmodapk-net/", destination: "/case-studies", permanent: true },

      // ── Old WordPress utility pages ──
      { source: "/contact", destination: "/contact", permanent: false },
      { source: "/contact-2-2", destination: "/contact", permanent: true },
      { source: "/contact-2-2/", destination: "/contact", permanent: true },
      { source: "/privacy-policy-2", destination: "/privacy-policy", permanent: true },
      { source: "/privacy-policy-2/", destination: "/privacy-policy", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/sample-page/", destination: "/", permanent: true },

      // ── WordPress media/upload paths → 404 via homepage ──
      { source: "/wp-content/:path*", destination: "/", permanent: false },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-login.php", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
