import { db, Notes, NOW } from "astro:db";
import type { APIRoute } from "astro";

import { toSlug } from "@/utils/string";

export const POST: APIRoute = async ({ params, request }) => {
  const { noteId } = params;

  const note = await request.json();
  note.id = noteId ?? toSlug(note.title);
  note.createdAt = note.createdAt || NOW;
  note.updatedAt = NOW;

  try {
    console.log(`DEBUG:trying to add note:`, note);
    await db
      .insert(Notes)
      .values(note)
      .onConflictDoUpdate({ target: Notes.id, set: note });
  } catch (error) {
    console.error(error);
    return new Response("Error adding note!", { status: 500 });
  }

  return new Response(`Note ${noteId ? "Updated" : "Created"}!: ${note}`, {
    status: 200,
  });
};

