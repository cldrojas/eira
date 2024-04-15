import { db, Notes, NOW } from "astro:db";
import type { APIRoute } from "astro";

import { toSlug } from "@/utils/string";

export const POST: APIRoute = async ({ params, request }) => {
  const { _note } = params;
  console.log(`DEBUG:params:`, params);
  const note = await request.json();
  note.id = toSlug(note.title);
  note.createdAt = NOW;
  note.updatedAt = NOW;

  try {
    console.log(`DEBUG:trying to add note:`, note);
    await db.insert(Notes).values(note);
  } catch (error) {
    console.error(error);
    return new Response("Error adding note!", { status: 500 });
  }

  return new Response(`Note ${note.id} added!`, { status: 200 });
};

export const PUT: APIRoute = async ({ params, request }) => {
  const { _note } = params;
  console.log(`DEBUG:params:`, params);
  const note = await request.json();
  note.updatedAt = NOW;

  try {
    console.log(`DEBUG:trying to update note:`, note);
    // await db.update(Notes).set(note).where({ id: _note });
  } catch (error) {
    console.error(error);
    return new Response("Error updating note!", { status: 500 });
  }

  return new Response("Note updated!", { status: 200 });
};
