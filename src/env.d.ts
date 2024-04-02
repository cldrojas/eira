/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Note {
	id: string
	title: string
	content: string
	description?: string
	reminders?: string
	attachments?: string[]
	createdAt: Date | string
	updatedAt: Date | string
}

interface Todo {
	id: string
	title: string
	completed: boolean
	noteId: string
}

interface Appointment {
	id: string
	title: string
	date: Date
	place?: {
		name: string
		location: string
	}
}
interface topBartopBarActions {
	className: string
	action: () => void
}
