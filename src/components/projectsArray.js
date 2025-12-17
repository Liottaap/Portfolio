import project2 from "../assets/projects/nostalgicTasks.png";
import project3 from "../assets/projects/mascotitas.png";
import project4 from "../assets/projects/oroVerde.png";
import project5 from "../assets/projects/ChopSuey.png"
import project6 from '../assets/projects/batatabit.png'
import project1 from '../assets/projects/platzitravel.png'

// Patitas
import patitas2 from '../assets/projectsUX/patitas/patitas-contacto.png'
import patitas1 from '../assets/projectsUX/patitas/patitas-desktop.png'
import patitas5 from '../assets/projectsUX/patitas/patitas-donaciones.png'
import patitas3 from '../assets/projectsUX/patitas/patitas-mascotas.png'
import patitas4 from '../assets/projectsUX/patitas/patitas-tienda.png'
import patitas6 from '../assets/projectsUX/patitas/patitas-requisitos.png'
import mockupPatitas from '../assets/projectsUX/patitas/mockup.png'
import bannerPatitas from '../assets/projectsUX/patitas/patitas-banner.png'

// Pool & Beer
import mockupPool from '../assets/projectsUX/pool&Beer/mockup.png'
import bannerPool from '../assets/projectsUX/pool&Beer/banner.png'
import poolBeer1 from '../assets/projectsUX/pool&Beer/desktop.png'
import poolBeer2 from '../assets/projectsUX/pool&Beer/bebidas.png'
import poolBeer3 from '../assets/projectsUX/pool&Beer/mesas.png'
import poolBeer4 from '../assets/projectsUX/pool&Beer/mesas-reservadas.png'

import steam from '../assets/projectsUX/Steam/steam.png' 
import mockupSteam from '../assets/projectsUX/Steam/mockup-steam.png'

import Linkedin from '../assets/projectsUX/Linkedin/Linkedin.png'
import linkedinMockup from '../assets/projectsUX/Linkedin/LinkedinMockup.png'
import linkedinBanner from '../assets/projectsUX/Linkedin/LinkedinBanner.png'
const projectsArray = [
    { 
        id: '1', 
        img: project1, 
        name: "PlatziTravel", 
        desc: "PlatziTravel es una aplicación web enfocada en la planificación de viajes, que permite a los usuarios buscar y localizar alquileres vacacionales y destinos personalizados mediante filtros inteligentes y herramientas de búsqueda dinámica. El proyecto cuenta con una interfaz moderna que incluye secciones como un carrusel de destinos recomendados, una cuadrícula de alojamientos destacados y un sistema de inicio de sesión para acceder a perfiles de usuario y gestionar reservas. Con un fuerte énfasis en UX/UI, PlatziTravel ofrece una experiencia intuitiva, visualmente atractiva y funcional para ayudar a los usuarios a organizar sus viajes desde cualquier dispositivo.",

        tecs:"React, Tailwind",
        gitHub:'https://github.com/Liottaap/PlatziTravel2', 
        link: 'https://travelplatzi.netlify.app/',
    },
     
    { 
        id: '2', 
        img: project2, 
        name: "Nostalgic Tasks", 
        desc: "Un sitio web colorido con temática Lo-fi, perfecto para estudiar, organizar tus tareas y disfrutar de música relajante en el proceso. Desarrollado con React.js y estilizado con Tailwind CSS, esta aplicación cuenta con un reproductor de música funcional gracias a React Player, con una lista de reproducción seleccionada para ayudarte a concentrarte. El diseño fue creado previamente en Figma, con el objetivo de ofrecer una experiencia visual cálida y nostálgica.",

        tecs:"React, Tailwind",
        gitHub:'https://github.com/Liottaap/Nostalgic_tasks', 
        link: 'https://nostalgictasks.netlify.app/',},
    { 
        id: '3', 
        img: project3, 
        name: "Patitas Contentas",
        desc: "Una vibrante landing page diseñada para promover la adopción y el tránsito responsable de mascotas sin hogar. Creada con HTML, CSS y JavaScript, este proyecto busca transmitir calidez y empatía, ofreciendo una experiencia visual y funcionalmente amigable para los posibles adoptantes. Cuenta con un sistema de inicio de sesión hecho en JavaScript, donde el usuario debe registrarse antes de ingresar. Una vez logueado, es redirigido a la página de inicio. También incluye notificaciones con Toastify y SweetAlert para alertar al usuario cuando ocurre un error al iniciar sesión, registrarse o adoptar una mascota.",

        tecs: "HTML, CSS, JavaScript",
        gitHub:'https://github.com/Liottaap/Patitas_contentas', 
        link: 'https://patitascontentas.netlify.app/', },
    { 
        id: '4', 
        img: project4, 
        name: "Oro Verde", 
        desc: "Proyecto personal de una tienda online enfocada en la venta de productos regionales y saludables. El diseño se planificó inicialmente con un wireframe realizado en Whimsical, lo que permitió estructurar visualmente la interfaz antes del desarrollo. Fue construido únicamente con HTML y CSS, con la intención de migrar posteriormente a SASS para mejorar la organización de los estilos y la escalabilidad. La propuesta visual se centra en una experiencia clara, limpia y amigable, cuidando cada detalle para transmitir confianza y accesibilidad.",

        tecs: "HTML, CSS, SASS",
        gitHub:'https://github.com/Liottaap/Oro_Verde', 
        link: 'https://oroverdesj.netlify.app/', 
    },
    { 
        id: '5', 
        img: project5, 
        name: "Chop Suey", 
        desc: "Proyecto personal de una landing page para un restaurante de comida rápida con un estilo moderno y atractivo. El diseño es completamente responsivo, adaptándose a todo tipo de pantallas, desde computadoras hasta dispositivos móviles. Uno de sus elementos más destacados es su menú hamburguesa interactivo, que facilita la navegación en móviles manteniendo una estética limpia. La combinación de colores vibrantes y una estructura visual clara busca captar la atención del usuario y transmitir la energía y dinamismo del restaurante..",

        tecs:"HTML, CSS, JavaScript",
        gitHub:'https://github.com/Liottaap/ChopSuey', 
        link: 'https://food-chopsuey.netlify.app/', 
    },
    { 
        id: '6', 
        img: project6, 
        name: "Batatabit", 
        desc: "An informational website about cryptocurrencies, built with HTML and CSS. In this project, I learned how to implement responsive design.",
        tecs:"HTML, CSS",
        gitHub:'https://github.com/Liottaap/Batabit', 
        link: 'https://mybatatabit.netlify.app/', 
    },
];

export {projectsArray};


const UXUIprojectsArray = [
    // 🐾 Patitas Contentas
    // { 
    //   id: '1', 
    //   type: "UI",
    //   name: "Patitas Contentas", 
    //   mockup: mockupPatitas,
    //   banner: bannerPatitas,
    //   img: [patitas1, patitas2, patitas3, patitas4, patitas5, patitas6], 
    //   hipotesis: 'Si desarrollamos una aplicación móvil que centralice la adopción...',
    //   resumen: 'Esta aplicación fue pensada para una organización sin fines de lucro...',
    //   problema: 'En muchas comunidades, los animales en situación de calle...',
    //   proceso: 'El proceso de diseño comenzó con una etapa de investigación...',
    //   resultados: 'Como resultado del proceso de diseño, se logró una aplicación intuitiva...',
    // },
  
    // // 🎱 Pool & Beer
    // { 
    //   id: '2', 
    //   type: "UI", 
    //   name: "Pool&Beer", 
    //   mockup: mockupPool,
    //   banner: bannerPool,
    //   img: [poolBeer1, poolBeer2, poolBeer3, poolBeer4], 
    //   hipotesis: 'Si se implementa una aplicación que permita gestionar y reservar mesas...',
    //   resumen: 'La aplicación de gestión y reserva de mesas de pool está diseñada...',
    //   problema: 'En muchos bares y espacios recreativos con mesas de pool...',
    //   proceso: 'El desarrollo del proyecto comenzó con una etapa de investigación...',
    //   resultados: 'La aplicación final ofrece un sistema claro y accesible...',
    // },
  
    // 🎮 Linkedin Rediseño
    { 
      id: '3', 
      type: "UX/UI",
      name: "Steam", 
      mockup: mockupSteam,
      banner: mockupSteam,
      img: [steam],
      hipotesis: 'Rediseñar la interfaz de Steam para mejorar la accesibilidad...',
      resumen: 'Un proyecto enfocado en mejorar la experiencia del usuario en Steam...',
    },
    { 
        id: '4', 
        type: "UX",
        name: "Linkedin", 
        mockup: linkedinMockup,
        banner: linkedinBanner,
        img: [Linkedin],
        hipotesis: 'Rediseñar la interfaz de Steam para mejorar la accesibilidad...',
        resumen: 'Un proyecto enfocado en mejorar la experiencia del usuario en Steam...',
      },
  ];

  
  export { UXUIprojectsArray };