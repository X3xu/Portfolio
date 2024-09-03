import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

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
