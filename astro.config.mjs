import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import db from '@astrojs/db'
import auth from 'auth-astro'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind(), db()],
	output: 'server',
	adapter: cloudflare({ mode: 'directory' }),
	build: {
		inlineStylesheets: 'always',
	},
	vite: {
		build: {
			cssMinify: 'lightningcss',
		},
		ssr: {
			noExternal: ['path-to-regexp'],
		},
	},
})
