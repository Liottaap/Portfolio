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



const UXprojectsArray = [

    // Patitas Contentas
    { 
        id: '1', 
        mockup: mockupPatitas,
        banner: bannerPatitas,
        img: [patitas1,patitas2,patitas3,patitas4,patitas5,patitas6], 
        name: "Patitas Contentas", 
        hipotesis: 'Si desarrollamos una aplicación móvil que centralice la adopción, la reserva de turnos para castración y la difusión de información en un mismo espacio digital, con una interfaz amigable y accesible, aumentaremos la cantidad de adopciones responsables, reduciremos la población de animales sin hogar y mejoraremos la educación sobre el cuidado animal en la comunidad.',
        resumen: 'Esta aplicación fue pensada para una organización sin fines de lucro dedicada a la adopción responsable, campañas de castración y difusión de casos de animales en situación de calle o en búsqueda de una familia. Como diseñador UX/UI, mi objetivo fue crear una interfaz amigable, intuitiva y accesible, que no solo facilite la navegación, sino que también transmita cercanía y empatía. Desde la búsqueda de mascotas disponibles hasta la reserva de turnos para castración o la lectura de consejos de cuidado, cada flujo está optimizado para que los usuarios encuentren lo que necesitan con pocos pasos y se sientan motivados a participar activamente.',
        problema: 'En muchas comunidades, los animales en situación de calle o en adopción no reciben la visibilidad suficiente para encontrar un hogar. Las campañas de castración, esenciales para controlar la población, suelen ser poco accesibles o difíciles de coordinar, y la información sobre cuidados responsables está dispersa en diferentes fuentes. Esto provoca que tanto adoptantes como organizaciones enfrenten barreras para conectar y actuar de manera efectiva.',
        proceso: 'El proceso de diseño comenzó con una etapa de investigación en la que se recopilaron datos y opiniones de voluntarios, adoptantes y veterinarios para comprender en profundidad las necesidades, motivaciones y dificultades presentes en la adopción y cuidado de animales. Con esta base, se desarrollaron wireframes de baja fidelidad que permitieron definir la estructura y el flujo principal de la aplicación, priorizando la facilidad de uso y la claridad de la información. Posteriormente, estos bocetos evolucionaron hacia wireframes de alta fidelidad, incorporando el diseño visual definitivo y detalles de interacción que aportan una experiencia más cercana al producto final.',
        resultados: 'Como resultado del proceso de diseño, se logró una aplicación intuitiva y visualmente atractiva que facilita el acceso a información sobre animales en adopción y campañas de castración. Las pruebas con usuarios demostraron que la navegación es fluida y que la presentación de la información genera confianza y empatía, incentivando la participación activa en adopciones y actividades solidarias. Además, se optimizó el flujo de búsqueda y contacto con los responsables, reduciendo el tiempo y los pasos necesarios para iniciar el proceso de adopción.'
    },

    // Pool & Beer
    { 
        id: '2', 
        name: "Pool&Beer", 
        mockup: mockupPool,
        banner: bannerPool,
        img: [poolBeer1, poolBeer2, poolBeer3, poolBeer4], 

        hipotesis: 'Si se implementa una aplicación que permita gestionar y reservar mesas de pool de manera visual y en tiempo real, tanto el administrador como el cliente experimentarán una mejora significativa en la organización, la eficiencia y la satisfacción general del servicio.',
        resumen: 'La aplicación de gestión y reserva de mesas de pool está diseñada para optimizar la experiencia tanto del administrador del local como de los clientes. Por un lado, el anfitrión puede visualizar en tiempo real la disponibilidad de cada mesa, gestionar reservas y liberar espacios. Por otro, los clientes pueden consultar el estado de las mesas, reservar de forma rápida y acceder al menú del resto-bar. El objetivo es agilizar el proceso, reducir esperas y mejorar la organización del establecimiento.',
        problema: 'En muchos bares y espacios recreativos con mesas de pool, la falta de un sistema de reservas claro provoca tiempos de espera imprecisos, confusión en la asignación de mesas y una experiencia poco satisfactoria para el cliente. Al mismo tiempo, el administrador no cuenta con herramientas eficientes para visualizar y controlar la ocupación de las mesas en tiempo real.',
        proceso: 'El desarrollo del proyecto comenzó con una etapa de investigación para comprender las necesidades de los usuarios, tanto clientes como administradores. Posteriormente, se crearon wireframes de baja fidelidad para definir la estructura y el flujo de navegación. Tras validar estas ideas, se desarrollaron wireframes de alta fidelidad que integraron la estética y funcionalidad final, asegurando una experiencia fluida y visualmente atractiva.',
        resultados:'La aplicación final ofrece un sistema claro y accesible para reservar y gestionar mesas de pool. Los administradores pueden controlar la disponibilidad en tiempo real y organizar el servicio de manera más eficiente, mientras que los clientes disfrutan de una interfaz sencilla que les permite reservar sin complicaciones y explorar el menú del local. Las pruebas con usuarios demostrarían una reducción notable en los tiempos de espera y una experiencia más ordenada y satisfactoria para ambas partes.',
    },

];

export {UXprojectsArray};