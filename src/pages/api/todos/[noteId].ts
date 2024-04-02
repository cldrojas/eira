// import type { APIRoute } from 'astro'
// import {Todos, Notes, db } from 'astro:db'

// import { notes } from '@/data/notes'

// const res = (
// 	body: string,
// 	{
// 		status,
// 		statusText,
// 		headers,
// 	}: { status?: number; statusText?: string; headers?: Headers }
// ) => new Response(body, { status, statusText, headers })

// // todo define a schema to validate the votes

// export const POST: APIRoute = async ({ params, request }) => {
// 	const { noteId } = params
// 	if (!noteId) return res('NoteId is required', { status: 400 })

// 	const noteData = NOTES.find((c) => c.id === noteId)
// 	if (!noteData) return res('Note not found', { status: 404 })

// 	// const { success, output } = safeParse(NoteSchema, await request.json())
// 	// if (!success) return res("Bad request", { status: 400 })

// 	// const { voteId } = output

// 	// const userId = session.user.id

// 	const todo = { title: 'title', completed: false, noteId: noteId }

// 	try {
// 		await db
// 			.insert(Todos)
// 			.values(todo)
// 			.onConflictDoUpdate({
// 				target: Notes.id,
// 				set: {
// 					title: todo.title,
// 					completed: todo.completed,
// 					noteId,
// 				},
// 			})
// 	} catch (error) {
// 		console.error(error)
// 		return res('Error inserting vote', { status: 500 })
// 	}

// 	return res('OK', { status: 200 })
// }
