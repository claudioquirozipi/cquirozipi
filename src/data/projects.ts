export interface Project {
  title: string;
  description: string;
  projectImage: string;
  urlWeb?: string;
  urlGithub?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Game',
    description: 'Game made with the phaser library.',
    projectImage: 'projects/game.png',
    urlWeb: 'https://hola2-fd53e.web.app/',
    urlGithub: 'https://github.com/claudioquirozipi/juegophaser',
    slug: 'game'
  },
  {
    title: 'Tracsa',
    description: 'Created with react, in firebase',
    projectImage: 'projects/tracsa.png',
    urlGithub: 'https://github.com/claudioquirozipi/tracsaReact',
    slug: 'tracsa'
  },
  {
    title: 'Sellboot',
    description: 'Created with html and uploaded in godaddy',
    projectImage: 'projects/sellboot.png',
    urlGithub: 'https://github.com/claudioquirozipi/sellun',
    slug: 'sellboot'
  },
  {
    title: 'Wulpers',
    description: 'Created with html and uploaded in godaddy',
    projectImage: 'projects/wulpers.png',
    urlGithub: 'https://github.com/claudioquirozipi/wulpers',
    slug: 'wulpers'
  },
  {
    title: 'Wulpers Studio',
    description: 'Created with React and firebase',
    projectImage: 'projects/wulpers-studio.png',
    urlWeb: 'https://www.wulperstudio.com/',
    urlGithub: 'https://github.com/claudioquirozipi/wulpers-studio-react',
    slug: 'wulpers-studio'
  },
  {
    title: 'Boolanews',
    description: 'Created with js',
    projectImage: 'projects/boolanews.png',
    slug: 'boolanews'
  },
  {
    title: 'Personal portfolio',
    description: 'Old version of the Portfolio with React',
    projectImage: 'projects/portfolio.png',
    urlWeb: 'https://cquirozipi.firebaseapp.com/projects',
    urlGithub: 'https://github.com/claudioquirozipi/cquirozipi',
    slug: 'portfolio'
  },
  {
    title: 'Accountant',
    description: 'Personal project, accountant created with React',
    projectImage: 'projects/accountant.png',
    urlWeb: 'https://contador-55ade.firebaseapp.com/',
    urlGithub: 'https://github.com/claudioquirozipi/contadorReact',
    slug: 'accountant'
  },
  {
    title: 'Screen meter',
    description: 'Tool created to measure screen sizes.',
    projectImage: 'projects/screen-meter.png',
    urlWeb: 'https://medidorpantalla.firebaseapp.com/',
    urlGithub: 'https://github.com/claudioquirozipi/cquirozipi',
    slug: 'screen-meter'
  },
  {
    title: 'Cost calculator',
    description: 'Tool to measure the costs of a dish in a restaurant.',
    projectImage: 'projects/cost-calculator.png',
    urlWeb: 'https://calculadoradecostos.firebaseapp.com/',
    urlGithub: 'https://github.com/claudioquirozipi/calculadoradecostos',
    slug: 'cost-calculator'
  },
  {
    title: 'Dashboard',
    description: 'Practice a dashboard with react and bootstrap',
    projectImage: 'projects/dashboard.png',
    urlWeb: 'https://dashboard-a0059.web.app/',
    urlGithub: 'https://github.com/claudioquirozipi/React-Bootstrap-Dashboard',
    slug: 'dashboard'
  },
  {
    title: 'MangoPP',
    description: 'Personal blog with react and firebase',
    projectImage: 'projects/mangopp.png',
    urlWeb: 'https://mangopp.com/',
    urlGithub: 'https://github.com/claudioquirozipi/mangopp',
    slug: 'mangopp'
  },
  {
    title: 'Mango lybrary',
    description: 'Personal jewelery for landing page',
    projectImage: 'projects/mangoly.jpg',
    urlGithub: 'https://github.com/claudioquirozipi/mangoly',
    slug: 'mangoly'
  }
]
