import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import db from '@astrojs/db'
import auth from 'auth-astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), db(), auth()],
	output: 'server',
	adapter: cloudflare(),
})
