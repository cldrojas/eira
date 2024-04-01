import { Notes, db } from 'astro:db'
import { NOTES } from '@/data/notes'

// https://astro.build/db/seed
export default async function seed() {
	const notes = NOTES.map(
		({ id, title, description, content, createdAt, updatedAt }) => ({
			id,
			title,
			description: description || '',
			content,
			createdAt,
			updatedAt,
		})
	)
	await db.insert(Notes).values(notes)
	// const teams = NOTES.flatMap(({ boxers, teams }) => teams ?? boxers).map((id) => ({ id }))
	// await db.insert(VoteSelections).values(teams)
}
