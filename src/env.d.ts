/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Entry {
  id: string;
  type: string;
  slug: string;
  text: string;
  date: string;
  author?: string;
  place?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  link?: string;
  status?: string;
  createdAt: string;
  updatedAt?: string;
  onclick?: () => void;
}

enum inputTypes {
  text: "text",
  date: "date",
  number: "number"
}