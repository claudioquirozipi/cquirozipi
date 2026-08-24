export interface Project {
  name: string;
  description: string;
  technologies?: string[];
}

export interface Client {
  name: string;
  logo?: string;
  url?: string;
  projects: Project[];
}

export interface Role {
  title: string;
  startDate: Date;
  endDate: Date;
  clients: Client[];
}

export interface Company {
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  logo?: string;
  url?: string;
  description?: string;
  roles: Role[];
}

export const experiences: Company[] = [
  {
    name: "Indra",
    location: "Perú · En remoto",
    startDate: new Date("2025-07-01T05:00:00.000Z"),
    endDate: new Date(),
    logo: "experience/indra.jpg",
    description:
      "Colaboración en la gestión operativa del equipo Cells en Indra, optimizando flujos de trabajo y procesos internos, y en células ágiles para la entrega de valor continua en la banca digital.",
    roles: [
      {
        title: "Desarrollador Cells Pleno",
        startDate: new Date("2025-07-01T05:00:00.000Z"),
        endDate: new Date(),
        clients: [
          {
            name: "BBVA",
            logo: "experience/bbva-pe.png",
            projects: [
              {
                name: "Car Insurance",
                description:
                  "Desarrollo y soporte técnico para la plataforma de seguros de vehículos.",
              },
              {
                name: "Confirmación de seguros",
                description:
                  "Desarrollo de funcionalidades para el proyecto de confirmación de seguros dentro del ecosistema Cells.",
              },
              {
                name: "Migración Polymer a Lit",
                description:
                  "Migración de componentes de Polymer a Lit, modernizando la arquitectura frontend y mejorando el rendimiento de las aplicaciones.",
                technologies: ["Polymer", "Lit"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nttdata",
    location: "Trujillo, Perú",
    startDate: new Date("2020-09-20T05:00:00.000Z"),
    endDate: new Date("2025-06-30T05:00:00.000Z"),
    logo: "experience/nttdata.png",
    url: "https://www.linkedin.com/company/nttdata/mycompany/verification/",
    roles: [
      {
        title: "Centers Senior Developer",
        startDate: new Date("2025-03-01T05:00:00.000Z"),
        endDate: new Date("2025-06-30T05:00:00.000Z"),
        clients: [
          {
            name: "BBVA Perú",
            logo: "experience/bbva-pe.png",
            projects: [
              {
                name: "Glomo-Pe",
                description: "Desarrollo de la aplicación de banca móvil.",
                technologies: ["Polymer", "Lit", "Cells", "JavaScript"],
              },
              {
                name: "Fondos Mutuos",
                description: "Participación en el proyecto de fondos mutuos.",
              },
              {
                name: "Raspaditas",
                description: "Participación en el proyecto de raspaditas.",
              },
              {
                name: "Migración Polymer a Lit",
                description: "Migración de componentes de Polymer a Lit.",
                technologies: ["Polymer", "Lit"],
              },
            ],
          },
        ],
      },
      {
        title: "Centers Developer 2",
        startDate: new Date("2022-10-01T05:00:00.000Z"),
        endDate: new Date("2025-03-01T05:00:00.000Z"),
        clients: [
          {
            name: "Scotiabank Perú",
            logo: "experience/scotiabank-pe.png",
            projects: [
              {
                name: "Desarrollo frontend",
                description: "Desarrollo frontend con React.js y JavaScript.",
                technologies: ["React.js", "JavaScript"],
              },
            ],
          },
          {
            name: "Latam Airlines Chile",
            logo: "experience/latam-cl.jpg",
            projects: [
              {
                name: "Migración de microservicios",
                description:
                  "Migración de microservicios con Java sobre Google Cloud Platform (GCP).",
                technologies: ["Java", "Google Cloud Platform"],
              },
            ],
          },
          {
            name: "Telefónica Argentina",
            logo: "experience/telefonica-ar.png",
            projects: [
              {
                name: "Liderazgo técnico frontend",
                description:
                  "Liderazgo técnico del frontend. Reconocimiento oficial por liderar la salida a producción de uno de los MVPs más estratégicos de la compañía.",
                technologies: ["React.js", "Next.js", "Node.js"],
              },
            ],
          },
        ],
      },
      {
        title: "Centers Developer",
        startDate: new Date("2020-09-20T05:00:00.000Z"),
        endDate: new Date("2022-10-01T05:00:00.000Z"),
        clients: [
          {
            name: "Axpo España",
            logo: "experience/axpo-es.png",
            projects: [
              {
                name: "Aplicación corporativa",
                description:
                  "Desarrollo de aplicación corporativa escalable.",
                technologies: ["React.js", "Next.js", "TypeScript"],
              },
            ],
          },
          {
            name: "Cepsa España",
            logo: "experience/cepsa-es.jpg",
            projects: [
              {
                name: "Aplicación corporativa",
                description:
                  "Desarrollo de aplicación corporativa escalable.",
                technologies: ["React.js", "Next.js", "TypeScript"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ID BI",
    location: "Lima, Perú",
    startDate: new Date("2020-01-27T05:00:00.000Z"),
    endDate: new Date("2020-06-30T05:00:00.000Z"),
    logo: "experience/idbi.jpg",
    url: "https://www.negocios.idbi.pe/",
    roles: [
      {
        title: "Frontend Web Developer",
        startDate: new Date("2020-01-27T05:00:00.000Z"),
        endDate: new Date("2020-06-30T05:00:00.000Z"),
        clients: [
          {
            name: "ID BI",
            logo: "experience/idbi.jpg",
            projects: [
              {
                name: "Sistema de gestión para restaurantes",
                description:
                  "Desarrollé un sistema de inventarios y gestión para restaurantes.",
              },
            ],
          },
          {
            name: "UTEC",
            logo: "experience/utec-pe.jpg",
            projects: [
              {
                name: "Foro UTEC",
                description:
                  "Desarrollo de plataforma educativa para la universidad.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Wulpers Studio",
    location: "Remote",
    startDate: new Date("2017-01-10T05:00:00.000Z"),
    endDate: new Date("2020-01-10T05:00:00.000Z"),
    logo: "experience/wulpers.png",
    roles: [
      {
        title: "Frontend Web Developer",
        startDate: new Date("2017-01-10T05:00:00.000Z"),
        endDate: new Date("2020-01-10T05:00:00.000Z"),
        clients: [
          {
            name: "Wulpers Studio",
            logo: "experience/wulpers.png",
            projects: [
              {
                name: "Landing pages",
                description:
                  "Desarrollé múltiples landing pages para diferentes clientes.",
              },
              {
                name: "Shelldonw App",
                description: "Aplicación web desarrollada para el cliente.",
                technologies: ["React.js", "TypeScript"],
              },
            ],
          },
        ],
      },
    ],
  },
];
