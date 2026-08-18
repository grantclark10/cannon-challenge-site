// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// TODO: replace with the live production domain before launch.
// The site URL is required for correct canonical links, OG tags and sitemap.xml.
const SITE_URL = 'https://cannonchallenge.capetown';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()]
});
