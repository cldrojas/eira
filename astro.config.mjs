import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import tailwind from '@astrojs/tailwind'
import auth from 'auth-astro'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [tailwind(), auth({ configFile: './src/auth.ts' })],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
	vite: {
		optimizeDeps: {
			exclude: ['astro:db'],
		},
	},
})
