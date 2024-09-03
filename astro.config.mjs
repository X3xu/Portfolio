import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    includeFiles: ['./src/assets/*.webp'],
  }),

  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), react()]
});
