export interface Certificate {
    title: string;
    certificates_image: string;
    description: string;
    date: Date;
    institute: string;
    slug: string;
    url?: string;
}
export const  certificates : Certificate[]= [
    {
      title: 'AWS',
      certificates_image: 'img/aws.jpg',
      description: 'Curso de amazon web services (AWS) desde cero',
      date: new Date('2020-10-15T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'awsudemy'
    },
    {
      title: 'Firebase',
      certificates_image: 'img/firebaseEDTeam.png',
      description: 'Crear sitios y aplicaciónes webs usando Firebase como backend',
      date: new Date('2018-10-13T00:00:00.101Z'),
      institute: 'EDTeam',
      slug: 'firebase'
    },
    {
      title: 'Go',
      certificates_image: 'img/diploma-programacion-golang-2020.jpg',
      description: 'Curso práctico de go, creación de un servidor web',
      date: new Date('2021-11-20T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'go'
    },
    {
      title: 'JavaScript',
      certificates_image: 'img/javascriptEDTeam.png',
      description: 'JavaScript desde cero',
      date: new Date('2018-11-21T00:00:00.101Z'),
      institute: 'EDTeam',
      slug: 'javascript'
    },
    {
      title: 'Aprender en linea',
      url: 'https://platzi.com/p/cquirozipi/curso/1608-aprender-2019/diploma/detalle/',
      certificates_image: 'img/diploma-aprender-2019.jpg',
      description: 'Curso de estrategias para aprender en línea efectivamente',
      date: new Date('2020-12-25T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziAprenderLinea'
    },
    {
      title: 'Arquitectura de Software',
      url: 'https://platzi.com/p/cquirozipi/curso/1247-arquitectura-software/diploma/detalle/',
      certificates_image: 'img/diploma-arquitectura-software.jpg',
      description: 'Fundamentos de Arquitectura de software',
      date: new Date('2021-09-07T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziArquitecturaSoftware'
    },
    {
      title: 'Python',
      url: 'https://platzi.com/p/cquirozipi/curso/1937-python/diploma/detalle/',
      certificates_image: 'img/diploma-python.jpg',
      description: 'Curso básico de python',
      date: new Date('2020-12-31T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziCursoBasicoPython'
    },
    {
      title: 'Finanzas personales',
      url: 'https://platzi.com/p/cquirozipi/curso/1940-finanzas/diploma/detalle/',
      certificates_image: 'img/diploma-finanzas.jpg',
      description: 'Curso de finanzas personales',
      date: new Date('2020-12-13T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziFinanzasPersonales'
    },
    {
      title: 'Base de datos',
      url: 'https://platzi.com/p/cquirozipi/curso/1566-bd/diploma/detalle/',
      certificates_image: 'img/diploma-bd.jpg',
      description: 'Curso de fundamentos para bases de datos',
      date: new Date('2021-03-13T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziFundamentosDB'
    },
    {
      title: 'Gatsby',
      url: 'https://platzi.com/p/cquirozipi/curso/1618-gatsby/diploma/detalle/',
      certificates_image: 'img/diploma-gatsby.jpg',
      description: 'Curso de Gatsby',
      date: new Date('2021-07-18T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziGatsby'
    },
    {
      title: 'Git',
      url: 'https://platzi.com/p/cquirozipi/curso/1557-git-github/diploma/detalle/',
      certificates_image: 'img/diploma-git-github.jpg',
      description: 'Curso profesional de git y github',
      date: new Date('2020-12-29T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziGit'
    },
    {
      title: 'Go Básico',
      url: 'https://platzi.com/p/cquirozipi/course/1846-programacion-golang-2020/diploma/detalle/',
      certificates_image: 'img/diploma-programacion-golang.jpg',
      description: 'Curso básico de programación en go',
      date: new Date('2021-11-20T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziGo'
    },
    {
      title: 'Go intermedio',
      url: 'https://platzi.com/p/cquirozipi/curso/2357-golang-intermedio/diploma/detalle/',
      certificates_image: 'img/diploma-golang-intermedio.jpg',
      description: 'Curso de Go intermedio, Programación orientada a objetos y concurrencia',
      date: new Date('2021-09-119T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziGoIntermedio'
    },
    {
      title: 'Inglés A1',
      url: 'https://platzi.com/p/cquirozipi/curso/1945-ingles-principiantes/diploma/detalle/',
      certificates_image: 'img/diploma-ingles-principiantes.jpg',
      description: 'Basic english course A1 for beginners',
      date: new Date('2020-11-26T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziInglesA1'
    },
    {
      title: 'Inglés básico',
      url: 'https://platzi.com/p/cquirozipi/curso/2196-ingles-basico-descripciones-comparativos/diploma/detalle/',
      certificates_image: 'img/diploma-ingles-basico-descripciones-comparativos.jpg',
      description: 'Basic english course descriptions and comparatives',
      date: new Date('2021-08-15T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziInglesBasico'
    },
    {
      title: 'Inglés principiante',
      url: 'https://platzi.com/p/cquirozipi/curso/2005-taller-principiantes/diploma/detalle/',
      certificates_image: 'img/diploma-taller-principiantes.jpg',
      description: 'English workshop for beginners',
      date: new Date('2021-08-04T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziInglesPrincipiante'
    },
    {
      title: 'Java',
      url: 'https://platzi.com/p/cquirozipi/curso/1631-java-basico/diploma/detalle/',
      certificates_image: 'img/diploma-java-basico.jpg',
      description: 'Curso de introducción a java SE',
      date: new Date('2021-01-11T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJavaBasico'
    },
    {
      title: 'Java OOP',
      url: 'https://platzi.com/p/cquirozipi/curso/1629-java-oop/diploma/detalle/',
      certificates_image: 'img/diploma-java-oop.jpg',
      description: 'Curso práctico de go, Creación de un servidor web',
      date: new Date('2021-05-01T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJavaOOP'
    },
    {
      title: 'Java Spring',
      url: 'https://platzi.com/p/cquirozipi/curso/1996-java-spring/diploma/detalle/',
      certificates_image: 'img/diploma-java-spring.jpg',
      description: 'Curso de java sprint',
      date: new Date('2021-05-14T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJavaSpring'
    },
    {
      title: 'Jest',
      url: 'https://platzi.com/p/cquirozipi/curso/1788-jest/diploma/detalle/',
      certificates_image: 'img/diploma-jest.jpg',
      description: 'Curso de unit testing con jest en react',
      date: new Date('2021-02-06T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJest'
    },
    {
      title: 'Js',
      url: 'https://platzi.com/p/cquirozipi/curso/1642-javascript-profesional/diploma/detalle/',
      certificates_image: 'img/diploma-javascript-profesional.jpg',
      description: 'Profesional de javascript',
      date: new Date('2021-05-14T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJs'
    },
    {
      title: 'JS ES 6',
      url: 'https://platzi.com/p/cquirozipi/curso/1815-ecmascript-6/diploma/detalle/',
      certificates_image: 'img/diploma-ecmascript-6.jpg',
      description: 'Curso de Ecmascript 6',
      date: new Date('2020-12-25T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziJsES6'
    },
    {
      title: 'Data Science',
      url: 'https://platzi.com/p/cquirozipi/curso/2069-negocios-data-science/diploma/detalle/',
      certificates_image: 'img/diploma-negocios-data-science.jpg',
      description: 'Análisis de negocios para ciencia de datos',
      date: new Date('2020-12-20T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziNegociosDatascience'
    },
    {
      title: 'Next.js',
      url: 'https://platzi.com/p/cquirozipi/curso/1991-next/diploma/detalle/',
      certificates_image: 'img/diploma-next.jpg',
      description: 'Curso de next.js',
      date: new Date('2021-06-20T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziNextJs'
    },
    {
      title: 'OOP',
      url: 'https://platzi.com/p/cquirozipi/curso/1474-oop/diploma/detalle/',
      certificates_image: 'img/diploma-oop.jpg',
      description: 'Curso de programación orientada a objetos',
      date: new Date('2021-02-20T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziOOP'
    },
    {
      title: 'Productividad',
      url: 'https://platzi.com/p/cquirozipi/curso/1998-productividad/diploma/detalle/',
      certificates_image: 'img/diploma-productividad.jpg',
      description: 'Curso de productividad',
      date: new Date('2020-11-24T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziProductividad'
    },
    {
      title: 'Python',
      url: 'https://platzi.com/p/cquirozipi/curso/1764-python-cs/diploma/detalle/',
      certificates_image: 'img/diploma-python-cs.jpg',
      description: 'Curso de introducción al pensamiento computacional con python',
      date: new Date('2021-01-24T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziPythonPensamiento'
    },
    {
      title: 'React hooks',
      url: 'https://platzi.com/p/cquirozipi/curso/2118-react-hooks/diploma/detalle/',
      certificates_image: 'img/diploma-react-hooks.jpg',
      description: 'Curso profesional de react hooks',
      date: new Date('2021-06-30T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziReactHooks'
    },
    {
      title: 'React Router Redux',
      url: 'https://platzi.com/p/cquirozipi/curso/1652-react-router-redux/diploma/detalle/',
      certificates_image: 'img/diploma-react-router-redux.jpg',
      description: 'React router redux',
      date: new Date('2021-01-21T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziReactRouterRedux'
    },
    {
      title: 'Redux',
      url: 'https://platzi.com/p/cquirozipi/curso/1613-redux/diploma/detalle/',
      certificates_image: 'img/diploma-redux.jpg',
      description: 'Curso de redux por Bedu',
      date: new Date('2020-12-24T00:00:00.101Z'),
      institute: 'platzi',
      slug: 'platziRedux'
    },
    {
      title: 'Redux React y GraphQl',
      certificates_image: 'img/reduxReactGraphQL.jpg',
      description: 'Aprende Redux con React hooks y GraphQL fácilmente',
      date: new Date('2020-07-05T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'reduxReactGraphQl'
    },
    {
      title: 'Rxjs',
      certificates_image: 'img/rxjs.jpg',
      description: 'ReactiveX - Rxjs: De cero hasta los detalles',
      date: new Date('2022-03-20T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'rxjs'
    },
    {
      title: 'Serverless AWS',
      certificates_image: 'img/serverlessAWS.jpg',
      description: 'Serverless en español con AWS y Serverless Framework',
      date: new Date('2020-05-29T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'serverlessAWS'
    },
    {
      title: 'Go',
      certificates_image: 'img/go.jpg',
      description: 'Curso de go -Como programar y crear APIs Restfull con golang',
      date: new Date('2020-08-11T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'udemygo'
    },
    {
      title: 'Redux',
      certificates_image: 'img/redux.jpg',
      description: 'React, Redux, Typescript, Firebase Fullstack Serveless',
      date: new Date('2020-08-05T00:00:00.101Z'),
      institute: 'udemy',
      slug: 'udemyredux'
    },
    {
      title: 'Css',
      certificates_image: 'img/varCssEDTeam.png',
      description: 'Variables Css',
      date: new Date('2018-10-23T00:00:00.101Z'),
      institute: 'EDTeam',
      slug: 'variablesCss'
    }
  ]