// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical host. DEFAULT: www (spec §13.2). TODO(owner): confirm current live
// canonical host (www vs non-www) and match it exactly before cutover. Do NOT
// switch host format during the rebuild — that's an extra migration variable.
const SITE = 'https://www.urgentdentalofdenver.com';

// https://astro.build
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: {
    // lowercase, hyphenated, trailing-slash URLs (spec §2)
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Only canonical, indexable URLs. Redirected old slugs are NOT Astro
      // pages, so they never enter the sitemap. Good.
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
