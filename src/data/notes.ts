export const NOTES: Note[] = [
	{
		id: 'first-note',
		title: 'First Note',
		content: 'This is the first note',
		createdAt: new Date('18-04-2021'),
		updatedAt: new Date(),
	},
	{
		id: 'second-note',
		title: 'Second Note',
		content: 'This is the second note',
		createdAt: new Date(),
		updatedAt: new Date(),
	},
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
