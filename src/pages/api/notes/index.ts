import { toSlug } from '@/utils/string'
import type { APIRoute } from 'astro'
import { db, Notes, NOW } from 'astro:db'

export const POST: APIRoute = async ({ params, request }) => {
	const note = await request.json()
	note.id = toSlug(note.title)
	note.createdAt = NOW
	note.updatedAt = NOW

	try {
		await db.insert(Notes).values(note)
	} catch (error) {
		console.error(error)
		return new Response('Error adding note!', { status: 500 })
	}
	return new Response('Note added!', { status: 200 })
}
