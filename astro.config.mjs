import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// If you buy a custom domain (e.g. sanyamagrawal.me), change `site` here and `url` in src/data/site.ts,
// then add a public/CNAME file containing the domain.
export default defineConfig({
  site: 'https://sanyam2005.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
