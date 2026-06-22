/**
 * Centralized Cache Keys (Tags) for Next.js Data Cache.
 * All agents must use tags from this file for caching and revalidation.
 * NEVER use inline string literals for cache tags.
 */
export const CACHE_TAGS = {
  // Site configuration and general settings
  SITE_METADATA: "site-metadata",

  // Services and offerings info
  SERVICES: "services",

  // Organization info
  ORGANIZATION: "organization",

  // Contact form submissions
  CONTACT: "contact",
} as const;

export type CacheTag = typeof CACHE_TAGS[keyof typeof CACHE_TAGS];
