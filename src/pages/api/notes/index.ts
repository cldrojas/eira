import type { APIRoute } from 'astro'

export const POST: APIRoute = ({ params, request }) => {

	return new Response('Note added!', { status: 200 })
}
