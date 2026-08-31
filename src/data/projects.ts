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
    title: 'Lista de Compras Compartida',
    description:
      'Una lista de compras que construí para mi propio uso: marco lo que suelo comprar, reviso la casa para ver qué falta y luego voy tachando los productos en la tienda. Se sincroniza en tiempo real con mi esposa para que cualquiera de los dos pueda actualizarla.',
    story:
      'Estoy planeando migrarlo de Vercel/Railway a Google Cloud Platform como una forma práctica de aprender GCP.',
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
      'Una wiki personal que crece a medida que aprendo — una página por cada tema, pensada para repasar rápido cualquier concepto cuando lo necesito. La uso y actualizo activamente.',
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
      'Una plataforma de menú digital para restaurantes: los comensales navegan y piden mediante código QR, mientras cocina y meseros gestionan los pedidos desde el celular o tablet, con pedidos por WhatsApp integrados.',
    story:
      'Empezó como un producto que intenté vender como negocio. No encontró un cliente, pero me dejó una lección real: construir en torno a un caso de uso claro en lugar de perseguir cada función que pide un prospecto.',
    techStack: ['Angular', 'Nest.js', 'PostgreSQL', 'Vercel', 'Railway'],
    projectImage: 'projects/micartaapp.png',
    urlWeb: 'https://micartaapp.com/',
    featured: true,
    status: 'active',
    slug: 'micartaapp'
  },
  {
    title: 'Punto de Equilibrio',
    description:
      'Una calculadora de punto de equilibrio: ingresa los costos fijos y variables para saber exactamente cuánto necesitas vender antes de empezar a generar ganancias.',
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
    title: 'Videojuego 2D con Phaser',
    description: 'Un videojuego 2D para navegador construido con la librería Phaser.',
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
    title: 'Playground de Diseño',
    description:
      'Un playground de experimentos en CSS/JS — transformaciones 3D, animaciones al pasar el cursor, efectos estilo retro — además de pequeñas herramientas independientes, incluyendo una herramienta para medir el tamaño de pantalla que construí para entregas a clientes.',
    techStack: ['Next.js', 'CSS', 'Vercel'],
    projectImage: 'projects/designs.png',
    urlWeb: 'https://designs-indol.vercel.app/',
    featured: false,
    status: 'active',
    slug: 'designs'
  },
  {
    title: 'Calculadora de Costos',
    description:
      'Una herramienta para calcular el costo real de un plato en un restaurante, considerando ingredientes y porciones.',
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
      'Un sistema de gestión empresarial — inventario, productos, ventas y más — desarrollado bajo mi propia marca personal.',
    story:
      'Invertí una gran cantidad de horas en esto, pero la lista de funcionalidades seguía creciendo sin un cliente claro y nunca llegó a lanzarse. Esto fue justamente lo que me impulsó a construir Micartaapp alrededor de una única función bien definida.',
    techStack: ['Angular', 'Nest.js', 'PostgreSQL', 'Vercel', 'Railway'],
    projectImage: 'projects/noduza.png',
    urlWeb: 'https://noduza.com/',
    featured: false,
    status: 'onhold',
    slug: 'noduza'
  }
]
