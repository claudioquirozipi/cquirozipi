export interface Language {
  name: string;
  level: string;
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  story: string;
  lookingFor: string;
  workingStyle: string;
  interests: string;
  availability: string;
  location: string;
  relocation: string;
  languages: Language[];
  education: Education;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
}

export const profile: Profile = {
  name: "Claudio Quiroz",
  title: "Fullstack Developer",
  summary:
    "Ingeniero de Procesos Industriales con 9+ años de experiencia construyendo aplicaciones web con React, Node.js y TypeScript. He trabajado en equipos internacionales para clientes como BBVA, Telefónica, Scotiabank y Latam Airlines a través de NTT Data e Indra, liderando la salida a producción de proyectos estratégicos. Actualmente enfocado en frontend moderno (Next.js, Lit) y en escribir código mantenible y escalable.",
  story:
    "Me gradué en Ingeniería de Procesos Industriales en la Universidad Central de Venezuela. En el camino, un curso de macros en Excel despertó mi interés por programar — cuando entendí que Excel no debía usarse como base de datos, me puse a estudiar por mi cuenta: PHP, WordPress, HTML, CSS, JavaScript, React. Trabajé 3 años como freelancer gracias a un contacto de mi hermano, y luego en Lima entré a ID BI (mi primera empresa) y después a NTT Data (entonces Everis), donde empecé a trabajar con clientes grandes como BBVA, Telefónica y Scotiabank.",
  lookingFor:
    "Un rol Frontend, o Fullstack con foco principal en frontend, en una empresa grande o mediana que valore el trabajo en equipo.",
  workingStyle:
    "Disfruto los equipos con buena dinámica, donde se comparte y se generan lazos — así fue mi paso por Telefónica Argentina, donde asumí liderazgo técnico y propuse mejoras activamente. También me interesa el lado de organización y gestión de proyectos: soy una persona ordenada, minimalista, y creo en la simplicidad de procesos claros (como usar diagramas de Gantt) para evitar el caos de última hora.",
  interests:
    "Entreno en el gym regularmente, y en el pasado he probado tiro con arco, baile de salsa, dibujo y guitarra.",
  availability: "Full-time · remoto o híbrido",
  location: "Lima, Perú",
  relocation: "Abierto a reubicarme en Chile",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio" },
  ],
  education: {
    degree: "Ingeniería de Procesos Industriales",
    institution: "Universidad Central de Venezuela",
  },
  email: "claudioquirozipi@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/claudio-quiroz-214630bb/",
  githubUrl: "https://github.com/claudioquirozipi",
};
