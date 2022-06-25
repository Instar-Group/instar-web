import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import astro from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
	site: 'https://instar.vercel.app',
	experimental: {
	  integrations: true,
	},
  integrations: [tailwind(), astro()]
});