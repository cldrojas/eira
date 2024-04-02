import { db, Notes } from 'astro:db'
export const notes = await db.select().from(Notes)

export const saveNote = async (note: Note): Promise<Note> => {
	console.log(`saving note:`, note)
	const res = await db.insert(Notes).values(notes)
	console.log(`DEBUG:res:`, res)
	return note
}
