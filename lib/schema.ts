import { site, services } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    email: site.email,
    slogan: site.tagline,
    description: site.description,
    sameAs: [
      "https://www.linkedin.com/company/seovize",
      "https://www.instagram.com/seovizeofficial/",
      "https://www.behance.net/seovize",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.domain,
    },
    description: service.description,
    areaServed: "United States",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: service.price,
      availability: "https://schema.org/InStock",
    },
  };
}
