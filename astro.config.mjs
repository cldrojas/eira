import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [tailwind()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		mode: 'directory',
		wasmModuleImports: true,
	}),
	vite: {
		ssr: {
			external: ['node:path'],
		},
		build: {
			minify: false,
		},
	},
})
