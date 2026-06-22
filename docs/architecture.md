# SEOvize Backend Architecture: Multi-Agent Guidelines

This document outlines the strict architecture and conventions required for all backend development on this repository. Both Claude Code and Google Antigravity MUST adhere to these rules without exception.

---

## 1. Core Stack Boundaries

* **Database Query Layer**: All database access must go through **Drizzle ORM**. Abstracted or raw queries outside of Drizzle are not allowed.
* **Schema & Input Validation**: Use **Zod** to define all API payloads, database schemas, and environment variables. Do not use unchecked or loose types.
* **Business Logic & Mutations**: Use **Next.js Server Actions** for mutations. Server Actions must serve *only* as a routing and validation boundary. Business logic must be separated into pure, testable functions in `lib/services/` or `lib/actions/`.
* **Testing**: Use **Vitest** for all unit tests. Tests must be fast and runnable in isolation.

---

## 2. Database & Migrations

> [!WARNING]
> NEVER run destructive database commands (e.g., `drizzle-kit push` or direct SQL drops in production/staging environments).

* **Migration Workflow**:
  1. Define or modify Drizzle schemas in `lib/db/schema.ts`.
  2. Generate SQL migration files using:
     ```bash
     npx drizzle-kit generate
     ```
  3. All database changes must be reviewed and approved by a human developer before being run on any database instance.

---

## 3. Server Actions & Validation

* Keep Server Actions minimal. They should only:
  1. Retrieve/verify session context (auth).
  2. Parse and validate inputs using a Zod schema.
  3. Call pure backend functions to perform the business logic/DB updates.
  4. Return a structured response (e.g., `{ success: true, data }` or `{ success: false, error: string }`).

Example pattern:
```typescript
"use server";

import { contactFormSchema } from "@/lib/validation";
import { saveContactSubmission } from "@/lib/services/contact";

export async function submitContactFormAction(formData: unknown) {
  // 1. Validate payload
  const validation = contactFormSchema.safeParse(formData);
  if (!validation.success) {
    return { success: false, error: "Invalid form input data." };
  }

  try {
    // 2. Delegate to pure logic function
    const result = await saveContactSubmission(validation.data);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: "Internal server error occurred." };
  }
}
```

---

## 4. Deterministic Caching on Vercel

* **No Path Revalidation**: Do not use `revalidatePath` as it is too broad and prone to caching side effects.
* **Tag-based Revalidation**: Always use Next.js's `revalidateTag` for on-demand revalidation.
* **Centralized Cache Keys**:
  * All cache tags must be defined in `lib/cache-keys.ts` as exported string constants.
  * NEVER use hardcoded inline strings for tags.
  * Adding a new cache tag requires adding it to `lib/cache-keys.ts` first.

Example revalidation:
```typescript
import { revalidateTag } from "next/cache";
import { CACHE_TAGS } from "@/lib/cache-keys";

// Correct usage:
revalidateTag(CACHE_TAGS.SITES);
```

---

## 5. Agent Guardrails & TDD

* **Write Tests First (TDD)**: When implementing a new endpoint, schema, or logic function:
  1. Define the Zod schema.
  2. Create a test file under `__tests__/` or next to the file using `.test.ts`.
  3. Instruct the agent to build the implementation to make the Vitest suite pass.
* **Test Verification**:
  * Run `npm run test` repeatedly to verify logic behaves correctly before finalizing code changes.
