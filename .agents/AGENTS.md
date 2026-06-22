# Google Antigravity Guidelines

Read [architecture.md](file:///d:/seovize-next-vercel/seovize-next-vercel/docs/architecture.md) before modifying any backend code.

## Guardrails & Boundaries

* **Read Architecture Docs first**: You must read `docs/architecture.md` before starting any backend modifications.
* **Unified backend stack**:
  - All DB operations must use **Drizzle ORM**.
  - All validations must use **Zod**.
  - Business logic must be separated from Server Actions into pure functions.
  - Caching revalidation must use `revalidateTag` using keys from `lib/cache-keys.ts`.
* **Database Migrations**: Do not run destructive database operations. Always generate SQL migrations and ask for user confirmation before executing migrations.
* **TDD & Vitest**: Write tests for new functions. Run `npm run test` to verify changes.
