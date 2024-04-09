import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// import cloudflare from '@astrojs/cloudflare'

import vercel from "@astrojs/vercel/serverless";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  // compressHTML: true,
  // prefetch: true,
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), auth()],
  output: 'server'
  // adapter: cloudflare(),
  ,

  adapter: vercel()
});