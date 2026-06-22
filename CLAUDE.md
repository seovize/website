# Claude Code Guidelines

Read [architecture.md](file:///d:/seovize-next-vercel/seovize-next-vercel/docs/architecture.md) before modifying any backend code.

## Available Commands

- **Development Server**: `npm run dev`
- **Build Production**: `npm run build`
- **Lint Codebase**: `npm run lint`
- **Run Unit Tests**: `npm run test`
- **Generate Migrations**: `npx drizzle-kit generate`

## Coding Standards

- **Database**: Drizzle ORM only. No raw SQL or Prisma.
- **Validation**: All payloads, schemas, and inputs must use Zod schemas.
- **Server Actions**: Used as boundary wrappers only. Keep business logic separate.
- **Caching**: Always use tag-based cache revalidation (`revalidateTag`) with keys defined in `lib/cache-keys.ts`.
- **Destructive Commands**: Strictly forbidden. Always request human approval before running database migrations.
- **TDD**: Write tests in `vitest` before/during backend updates.
