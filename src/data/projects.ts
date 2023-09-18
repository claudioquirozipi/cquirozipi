export interface Project {
  title: string;
  description: string;
  projectImage: string;
  urlWeb?: string;
  urlGithub?: string;
  slug: string;
}

export const projects : Project[]= [
    {
      title: 'Game',
      description: 'Game made with the phaser library.',
      projectImage: 'img/juego.png',
      urlWeb: 'https://hola2-fd53e.web.app/',
      urlGithub: 'https://github.com/claudioquirozipi/juegophaser',
      slug: '10game'
    },
    {
      title: 'Tracsa',
      description: 'Created with react, in firebase',
      projectImage: 'img/tracsa.png',
      urlGithub: 'https://github.com/claudioquirozipi/tracsaReact',
      slug: '1tracsa'
    },
    {
      title: 'Sellboot',
      description: 'Created with html and uploaded in godaddy',
      projectImage: 'img/sellboot.png',
      urlGithub: 'https://github.com/claudioquirozipi/sellun',
      slug: '2Sellboot'
    },
    {
      title: 'Wulpers',
      description: 'Created with html and uploaded in godaddy',
      projectImage: 'img/wulpers.png',
      urlGithub: 'https://github.com/claudioquirozipi/wulpers',
      slug: '3wulpers'
    },
    {
      title: 'Wulpers Studio',
      description: 'Created with React and firebase',
      projectImage: 'img/wulperstudio.png',
      urlWeb: 'https://www.wulperstudio.com/',
      urlGithub: 'https://github.com/claudioquirozipi/wulpers-studio-react',
      slug: '4wulpersStudio'
    },
    {
      title: 'Boolanews',
      description: 'Created with js',
      projectImage: 'img/boolanews.png',
      slug: '5boolanews'
    },
    {
      title: 'Personal portfolio',
      description: 'Old version of the Portfolio with React',
      projectImage: 'img/cquirozipi.png',
      urlWeb: 'https://cquirozipi.firebaseapp.com/projects',
      urlGithub: 'https://github.com/claudioquirozipi/cquirozipi',
      slug: '6portfolio'
    },
    {
      title: 'Accountant',
      description: 'Personal project, accountant created with React',
      projectImage: 'img/accountant.png',
      urlWeb: 'https://contador-55ade.firebaseapp.com/',
      urlGithub: 'https://github.com/claudioquirozipi/contadorReact',
      slug: '7accountant'
    },
    {
      title: 'Screen meter',
      description: 'Tool created to measure screen sizes.',
      projectImage: 'img/medidorpantalla.png',
      urlWeb: 'https://medidorpantalla.firebaseapp.com/',
      urlGithub: 'https://github.com/claudioquirozipi/cquirozipi',
      slug: '8screenMeter'
    },
    {
      title: 'Cost calculator',
      description: 'Tool to measure the costs of a dish in a restaurant.',
      projectImage: 'img/calculadoracostos.png',
      urlWeb: 'https://calculadoradecostos.firebaseapp.com/',
      urlGithub: 'https://github.com/claudioquirozipi/calculadoradecostos',
      slug: '9costCalculator'
    },
    {
      title: 'Dashboard',
      description: 'Practice a dashboard with react and bootstrap',
      projectImage: 'img/dashboard.png',
      urlWeb: 'https://dashboard-a0059.web.app/',
      urlGithub: 'https://github.com/claudioquirozipi/React-Bootstrap-Dashboard',
      slug: 'dashboard'
    },
    {
      title: 'MangoPP',
      description: 'Personal blog with react and firebase',
      projectImage: 'img/mangopp.png',
      urlWeb: 'https://mangopp.com/',
      urlGithub: 'https://github.com/claudioquirozipi/mangopp',
      slug: 'proyecto-1 copy 12'
    },
    {
      title: 'Mango lybrary',
      description: 'Personal jewelery for landing page',
      projectImage: 'img/mangoLy.jpg',
      urlGithub: 'https://github.com/claudioquirozipi/mangoly',
      slug: 'proyecto-1 copy'
    }
  ]