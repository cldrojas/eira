import Google from '@auth/core/providers/google'
import { defineConfig } from 'auth-astro'

console.log('vars', import.meta.env)
console.log('process', process.env)

export default defineConfig({
	providers: [
		Google({
			clientId: import.meta.env.GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		session: ({ session, token }) => ({
			...session,
			user: {
				...session.user,
				id: token.sub as string,
			},
		}),
	},
})
