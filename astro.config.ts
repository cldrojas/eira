import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import auth from 'auth-astro';
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://unchat.online',
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), auth(), db()],
  output: 'server',
  adapter: vercel()
});