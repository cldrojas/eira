// lib notes direct call to the database
import { db, Notes, NOW } from "astro:db";

const getNotes = () => {};

export const saveNote = async (data: { [k: string]: FormDataEntryValue }) => {
  console.log(`DEBUG:data to send for save:`, data);
};
