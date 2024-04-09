import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	prefetch: true,
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind()],
	output: 'server',
	adapter: cloudflare(),
})
