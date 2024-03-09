/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#FF6363',
				'secondary': '#4A4A4A',
				'accent': '#FFA500',
				'background': '#F5F5F5',
			}
		},
	},
	plugins: [animations],
}
