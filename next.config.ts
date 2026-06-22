import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/seo",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/contact-2-2",
        destination: "/services/website-design",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
