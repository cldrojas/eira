/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Note {
	id: string
	title: string
	content: string
	todos?: string[]
	reminders?: string
	attachments?: string[]
	createdAt: Date
	updatedAt: Date
}
interface Appointment {
	id: string
	title: string
	date: Date
	place?: string
}
interface topBartopBarActions {
	className: string
	action: () => void
}
