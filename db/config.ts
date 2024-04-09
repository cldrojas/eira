// import { column, defineDb } from 'astro:db'

// const Todos = {
	// columns: {
	// 	id: column.text({ primaryKey: true }),
	// 	noteId: column.text({ references: () => Notes.columns.id }),
	// 	title: column.text(),
	// 	completed: column.boolean(),
// 	},
// }

// const Notes = {
// 	columns: {
// 		id: column.text({ primaryKey: true }),
// 		title: column.text(),
// 		description: column.text({optional: true}),
// 		content: column.text({optional: true}),
// 		createdAt: column.date(),
// 		updatedAt: column.date(),
// 	},
// }
// // https://astro.build/db/config
// export default defineDb({
// 	tables: {
// 		Todos,
// 		Notes,
// 	},
// })
