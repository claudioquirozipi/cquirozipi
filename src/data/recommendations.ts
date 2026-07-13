export interface Recommendation {
  name: string;
  role: string;
  company?: string;
  quote: string;
  date?: Date;
  context?: string;
  photo?: string;
  linkedinUrl?: string;
}

export const recommendations: Recommendation[] = [
  {
    name: "Gabriel Antonietti",
    role: "Software Engineer | Fintech | Capital Market | Java",
    quote:
      "Destaco la enorme capacidad técnica de Claudio, muchísima habilidad para diseñar soluciones escalables con código limpio. Definitivamente un Team-Player con una gran vocación por satisfacer las necesidades del cliente y divertirse en el proceso. Un gran privilegio compartir equipo con él.",
    date: new Date("2023-02-09T05:00:00.000Z"),
    context: "Trabajaron en el mismo equipo",
    photo: "recommendations/gabriel.jpg",
    linkedinUrl: "https://www.linkedin.com/in/gabriel-ruben-antonietti/",
  },
  {
    name: "Erika Paola Malpica Loayza",
    role: "Front End Developer | Javascript | UI",
    quote:
      "Claudio es sin duda una persona con un talento innato para los retos y trabajo en equipo. Su alto grado de compromiso, apoyo a los compañeros y organización. Es admirable como logra adaptarse en cada situación o tecnología nueva en cada proyecto en donde forma parte.",
    date: new Date("2022-10-23T05:00:00.000Z"),
    context: "Trabajaron en el mismo equipo",
    photo: "recommendations/erika.jpg",
    linkedinUrl: "https://www.linkedin.com/in/lm-script/",
  },
];
