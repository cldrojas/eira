// import { Notes, db } from 'astro:db'

const NOTES = [
	{
		id: 'first-note',
		title: 'First Note',
		description: 'Description 1',
		content: 'Content 1',
		createdAt: new Date('2021-01-01'),
		updatedAt: new Date(),
	},
	{
		id: 'second-note',
		title: 'Second Note',
		description: 'Description 2',
		content: 'Content 2',
		createdAt: new Date('2024-02-04'),
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
	// await db.insert(Notes).values(notes)
	// const teams = NOTES.flatMap(({ boxers, teams }) => teams ?? boxers).map((id) => ({ id }))
	// await db.insert(VoteSelections).values(teams)
}
