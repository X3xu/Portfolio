import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vercelServerless from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelServerless({
    includeFiles: ['./src/assets/CVJesúsJiménezDillana.pdf', './src/assets/Portfolio.webp', './src/assets/QuizzGame.webp'],
  }),

  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), react()]
});
