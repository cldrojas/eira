import { Notes, db } from 'astro:db'

const NOTES = [
	{
		id: '1',
		title: 'Note 1',
		description: 'Description 1',
		content: 'Content 1',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: '2',
		title: 'Note 2',
		description: 'Description 2',
		content: 'Content 2',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
]

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
