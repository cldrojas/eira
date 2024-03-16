interface Entry {
  id: string;
  type: string;
  slug: string;
  text: string;
  date: string;
  author: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const ENTRIES: Entry[] = [
  {
    id: crypto.randomUUID(),
    type: "note",
    slug: "Sensación extraña",
    text: "Sensación extraña en el oido izquierdo",
    date: "18-05",
    author: "",
    title: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  },
  {
    id: crypto.randomUUID(),
    type: "appointment",
    slug: "Cita con el otorrino",
    text: "Cita con el otorrino para revisar la sensación extraña en el oido izquierdo",
    date: "02-12",
    author: "",
    title: "",
    description: "",
    image: "",
    tags: [],
    link: "",
    status: "",
    createdAt: "",
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
