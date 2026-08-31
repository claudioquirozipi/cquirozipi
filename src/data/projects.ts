export type ProjectStatus = 'active' | 'onhold';

export interface Project {
  title: string;
  description: string;
  story?: string;
  techStack: string[];
  projectImage?: string;
  images?: string[];
  videoUrl?: string;
  urlWeb?: string;
  urlGithub?: string;
  featured: boolean;
  status?: ProjectStatus;
  slug: string;
}

export const projects: Project[] = [
  // Featured
  {
    title: 'Supermarket To-Do List',
    description:
      "A shared shopping list I built for myself: check off what I usually buy, walk through the house to see what's missing, then cross items off at the store. Synced live with my wife so either of us can update it.",
    story:
      "I'm planning to migrate this from Vercel/Railway to Google Cloud Platform as a hands-on way to learn GCP.",
    techStack: ['Angular', 'Golang', 'PostgreSQL', 'Vercel', 'Railway'],
    projectImage: 'projects/supermarket-todolist-agregar.jpg',
    images: [
      'projects/supermarket-todolist-agregar.jpg',
      'projects/supermarket-todolist-planificar.jpg',
      'projects/supermarket-todolist-comprar.jpg'
    ],
    videoUrl: 'https://youtube.com/shorts/GDOnEjvEDWs?feature=share',
    urlWeb: 'https://supermarket-todo-list-angular.vercel.app/',
    featured: true,
    status: 'active',
    slug: 'supermarket-todolist'
  },
  {
    title: 'Estudies',
    description:
      "A personal wiki that grows as I learn — one page per topic, built for quick review whenever I need to refresh a concept. Actively used and updated.",
    techStack: ['Astro', 'Vercel'],
    projectImage: 'projects/estudies.png',
    urlWeb: 'https://estudies-brown.vercel.app/',
    urlGithub: 'https://github.com/claudioquirozipi/estudies',
    featured: true,
    status: 'active',
    slug: 'estudies'
  },
  {
    title: 'Micartaapp',
    description:
      'A digital menu platform for restaurants: diners browse and order via QR code, kitchen and waitstaff manage orders from phone or tablet, with WhatsApp ordering built in.',
    story:
      "Started as a product I tried to sell as a business. It didn't find a customer, but it taught me a real lesson: build around one clear use case instead of chasing every feature a prospect asks for.",
    techStack: ['Angular', 'Nest.js', 'PostgreSQL', 'Vercel', 'Railway'],
    projectImage: 'projects/micartaapp.png',
    urlWeb: 'https://micartaapp.com/',
    featured: true,
    status: 'active',
    slug: 'micartaapp'
  },
  {
    title: 'Punto de equilibrio',
    description:
      'A break-even calculator: enter fixed and variable costs to see exactly how much you need to sell before turning a profit.',
    techStack: ['React', 'Vite', 'Vercel'],
    projectImage: 'projects/punto-equilibrio.png',
    videoUrl: 'https://www.youtube.com/watch?v=869D9l9WdLc',
    urlWeb: 'https://punto-equilibrio-react.vercel.app/',
    urlGithub: 'https://github.com/claudioquirozipi/punto-equilibrio-react',
    featured: true,
    status: 'active',
    slug: 'punto-equilibrio'
  },
  {
    title: 'Game',
    description: '2D browser game built with the Phaser library.',
    techStack: ['Phaser', 'JavaScript', 'Firebase'],
    projectImage: 'projects/game.png',
    urlWeb: 'https://hola2-fd53e.web.app/',
    urlGithub: 'https://github.com/claudioquirozipi/juegophaser',
    featured: true,
    status: 'active',
    slug: 'game'
  },

  // Playground / secondary
  {
    title: 'Designs',
    description:
      'A playground of CSS/JS experiments — 3D transforms, hover animations, retro-style effects — plus small standalone tools, including a screen-size measuring tool I built for client handoffs.',
    techStack: ['Next.js', 'CSS', 'Vercel'],
    projectImage: 'projects/designs.png',
    urlWeb: 'https://designs-indol.vercel.app/',
    featured: false,
    status: 'active',
    slug: 'designs'
  },
  {
    title: 'Cost calculator',
    description:
      'A tool to calculate the true cost of a dish in a restaurant, factoring in ingredients and portions.',
    techStack: ['React', 'Firebase'],
    projectImage: 'projects/cost-calculator.png',
    urlWeb: 'https://calculadoradecostos.firebaseapp.com/',
    urlGithub: 'https://github.com/claudioquirozipi/calculadoradecostos',
    featured: false,
    status: 'active',
    slug: 'cost-calculator'
  },

  // On hold
  {
    title: 'Noduza',
    description:
      'A business management system — inventory, products, sales and more — built under my own personal-brand styling.',
    story:
      'I put a huge number of hours into this, but the feature list kept growing without a clear customer, and it never shipped. This is exactly what pushed me to build Micartaapp around a single, focused feature instead.',
    techStack: ['Angular', 'Nest.js', 'PostgreSQL', 'Vercel', 'Railway'],
    projectImage: 'projects/noduza.png',
    urlWeb: 'https://noduza.com/',
    featured: false,
    status: 'onhold',
    slug: 'noduza'
  }
]
