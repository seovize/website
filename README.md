# Seovize Next.js + Tailwind + Vercel Starter

Production-ready marketing site starter for seovize.com.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel Analytics
- SEO metadata
- Open Graph image
- robots.txt and sitemap.xml
- JSON-LD Organization, WebSite, and Service schema
- Redirects from old WordPress URLs

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create a GitHub repository.
2. Push this folder to GitHub.
3. Open Vercel and import the GitHub repository.
4. Keep framework preset as Next.js.
5. Add domain `seovize.com` in Vercel project settings.
6. Update DNS records at your domain registrar using Vercel's instructions.
7. Add environment variable if using the contact form:

```bash
CONTACT_WEBHOOK_URL=https://your-form-or-crm-webhook-url
```

## Important replacement items before launch

- Replace placeholder case studies with real client proof.
- Replace social links in `lib/schema.ts` if your URLs change.
- Add final logo assets to `/public`.
- Add real images, testimonials, and screenshots.
- Run `npm run build` before deployment.

## Suggested URL migration

The project already redirects:

- `/seo` → `/services/seo`
- `/contact-2-2` → `/services/website-design`

Add more redirects in `next.config.ts` if old WordPress URLs had traffic or backlinks.
