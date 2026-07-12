export interface Recommendation {
  name: string;
  role: string;
  company?: string;
  quote: string;
}

// TODO: reemplazar por las recomendaciones reales de LinkedIn.
export const recommendations: Recommendation[] = [
  {
    name: "Nombre pendiente",
    role: "Cargo pendiente",
    company: "Empresa pendiente",
    quote:
      "Placeholder: acá va el testimonio real sobre cómo fue trabajar con Claudio.",
  },
  {
    name: "Nombre pendiente",
    role: "Cargo pendiente",
    company: "Empresa pendiente",
    quote:
      "Placeholder: acá va el testimonio real sobre cómo fue trabajar con Claudio.",
  },
  {
    name: "Nombre pendiente",
    role: "Cargo pendiente",
    company: "Empresa pendiente",
    quote:
      "Placeholder: acá va el testimonio real sobre cómo fue trabajar con Claudio.",
  },
];
