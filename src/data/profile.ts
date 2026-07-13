export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
}

export const profile: Profile = {
  name: "Claudio Quiroz",
  title: "Fullstack Developer",
  summary:
    "Ingeniero de Procesos Industriales con 9+ años de experiencia construyendo aplicaciones web con React, Node.js y TypeScript. He trabajado en equipos internacionales para clientes como BBVA, Telefónica, Scotiabank y Latam Airlines a través de NTT Data e Indra, liderando la salida a producción de proyectos estratégicos. Actualmente enfocado en frontend moderno (Next.js, Lit) y en escribir código mantenible y escalable.",
  email: "claudioquirozipi@gmail.com",
  location: "Perú · remoto",
  linkedinUrl: "https://www.linkedin.com/in/claudio-quiroz-214630bb/",
  githubUrl: "https://github.com/claudioquirozipi",
};
