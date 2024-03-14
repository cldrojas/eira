interface Entry {
  id: string;
  type: string;
  slug: string;
  text: string;
  date: string;
}

export const ENTRIES: Entry[] = [
  {
    id: crypto.randomUUID(),
    type: "note",
    slug: "Sensación extraña",
    text: "Sensación extraña en el oido izquierdo",
    date: "18-05",
  },
 {
    id: crypto.randomUUID(),
    type: "appointment",
    slug: "Cita con el otorrino",
    text: "Cita con el otorrino para revisar la sensación extraña en el oido izquierdo",
    date: "02-12",
  },
];