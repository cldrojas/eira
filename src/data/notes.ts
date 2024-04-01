export const NOTES: Note[] = [
	{
		id: 'first-note',
		title: 'First Note',
		description: 'This is the first note',
		content: 'The first note was added just for testing',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
	{
		id: 'second-note',
		title: 'second Note',
		description: 'This is the second note',
		content: 'The second note was added just for testing',
		createdAt: new Date(),
		updatedAt: new Date(),
	}
]

export const saveNote = async (note: Note): Promise<Note> => {
	const existingNote = NOTES.find((n) => n.title === note.title)
	if (!existingNote) {
		const id = note.title.toLowerCase().replace(' ', '-')
		note.id = id
		NOTES.push(note)
		console.log(`DEBUG:updated notes:`, NOTES)
		return note
	} else {
		console.error('Note with this title already exists')
		throw new Error('Note with this title already exists')
	}
}
