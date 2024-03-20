export enum inputTypes {
  text = "text",
  date = "date",
  number = "number",
}

export enum entryTypes {
  note = "note",
  appointment = "appointment",
}

export const ENTRIES: Entry[] = [
  {
    id: crypto.randomUUID(),
    type: "note",
    title: "",
    slug: "Medio bate",
    text: "Me fumé la mitad de una sola carga del bate y me dio cualesquiera de sueño :c",
    date: "Mayo 20, 2024 10:30",
    place: "Hospital Regional de Arica, Dr. Juan Noé Crevani",
    author: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    status: "",
    createdAt: "03-18-24", // MM-DD-YY
    updatedAt: "",
  },
  {
    id: crypto.randomUUID(),
    type: "note",
    title: "",
    slug: "Sensación extraña",
    text: "Sensación extraña en el oido izquierdo",
    date: "",
    author: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    status: "",
    createdAt: "02-03-24", // MM-DD-YY
    updatedAt: "",
  },
];

export const addEntry = (entry: Entry) => {
  // TODO: validate entry
  ENTRIES.push(entry);
};

export const removeEntry = (id: string) => {
  const index = ENTRIES.findIndex((entry) => entry.id === id);
  if (index > -1) {
    ENTRIES.splice(index, 1);
  }
};

export const getEntry = (id: string) => {
  return ENTRIES.find((entry) => entry.id === id);
};
