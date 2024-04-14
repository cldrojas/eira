import { toSlug } from "@/utils/string";
import type { APIRoute } from "astro";
import { db, Notes, NOW } from "astro:db";

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
  return new Response("Note added!", { status: 200 });
};
