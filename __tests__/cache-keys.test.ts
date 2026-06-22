import { expect, test } from "vitest";
import { CACHE_TAGS } from "@/lib/cache-keys";

test("centralized cache keys are correctly defined", () => {
  expect(CACHE_TAGS).toBeDefined();
  expect(CACHE_TAGS.SITE_METADATA).toBe("site-metadata");
  expect(CACHE_TAGS.SERVICES).toBe("services");
  expect(CACHE_TAGS.ORGANIZATION).toBe("organization");
  expect(CACHE_TAGS.CONTACT).toBe("contact");
});
