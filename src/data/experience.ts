export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
  logo?: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    title: "Fullstack developer",
    company: "Nttdata",
    location: "Trujillo, Perú",
    startDate: new Date("2020-09-20T05:00:00.000Z"),
    endDate: new Date(),
    description:
      "Desarrollador de aplicaciones del lado del front y del backnend.",
    logo: "img/experiences/nttdata.png",
    url: "https://www.linkedin.com/company/nttdata/mycompany/verification/",
  },
  {
    title: "Frontend developer",
    company: "ID BI",
    location: "Lima, Perú",
    startDate: new Date("2020-01-27T05:00:00.000Z"),
    endDate: new Date("2020-06-30T05:00:00.000Z"),
    description: "Desarrollé un sistema de inventarios para restaurantes",
    logo: "img/experiences/idbi.jpg",
    url: "https://www.negocios.idbi.pe/",
  },
  {
    title: "Frontend developer",
    company: "Freelance",
    location: "Remote",
    startDate: new Date("2017-01-10T05:00:00.000Z"),
    endDate: new Date("2020-09-20T05:00:00.000Z"),
    description: "Desarrollé multiples landing pages para diferentes clientes",
    logo: "img/experiences/wulpers.png",
  },
];
