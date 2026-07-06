# Urgent Dental of Denver — Website

Emergency-only dental practice site. Astro static site, built to deploy on Netlify.

## Stack
- [Astro](https://astro.build) 5 — static output (`output: 'static'`, trailing-slash `always`)
- `@astrojs/sitemap` — sitemap-index generated at build
- Images optimized at build via `astro:assets` (Sharp)
- Netlify Forms for the callback/appointment form (progressive-enhancement AJAX)

## Local development
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/ (runs prebuild: generates public/_redirects)
npm run preview  # serve the production build locally
```

## Deploy (Netlify)
Settings are in [`netlify.toml`](./netlify.toml):
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Node 24

`public/_redirects` (301 map) and `dist/` are generated at build time and are **not** committed — Netlify regenerates them on every deploy.

Connect this repo in Netlify → it builds and deploys automatically. **Deploy to a staging/temp URL first.** Do not point at the live domain or touch DNS until after review.

## Site config
- Canonical site URL: `astro.config.mjs` (`site`) — currently `https://www.urgentdentalofdenver.com` (confirm www vs apex before cutover).
- Business NAP / phones / hours: `src/data/site.ts` (single source of truth — must match the Google Business Profile).
- Services: `src/data/services.ts` · Areas: `src/data/areas.ts` · 301 map: `src/data/redirects.ts` · FAQs: `src/data/faqs.ts` + per-service.

## Open owner TODOs before cutover
Search the codebase for `TODO(owner` — items that need real data and must not be invented:
- Dr. Boyd credentials: exact degree, license number, graduation years (`meet-the-doctor.astro`, `§13.4`)
- Live Google review count (`site.ts`, `§13.5`)
- Exact insurance networks + payment methods (`§13.6`)
- Callback form routing / office alert (`CallbackForm.astro`, `§13.9`)
- Exact geo lat/long + GBP field match (`site.ts`, `§13.11`/`§13.12`)
- Redirect map verification against the old-site crawl (`redirects.ts`, `§13.1`)
- Real content for pending blog migrations (`src/data/posts.ts`, `§13.8`)
