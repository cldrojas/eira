import { db, Notes } from "astro:db";

const NOTES = [
  {
    id: "first-note",
    title: "First Note",
    description: "Description 1",
    content: "Content 1",
    createdAt: new Date("2021-01-01"),
    updatedAt: new Date(),
    userId: "admin",
  },
  {
    id: "second-note",
    title: "Second Note",
    description: "Description 2",
    content: "Content 2",
    createdAt: new Date("2024-02-04"),
    updatedAt: new Date(),
    userId: "admin",
  },
];

// https://astro.build/db/seed
export default async function seed() {
  const notes = NOTES.map(
    ({ id, title, description, content, userId, createdAt, updatedAt }) => ({
      id,
      title,
      description: description || "",
      content,
      userId,
      createdAt,
      updatedAt,
    })
  );
  await db.insert(Notes).values(notes);
}
