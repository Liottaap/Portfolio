import project1 from "../assets/projects/nostalgicTasks.png";
import project2 from "../assets/projects/mascotitas.png";
import project3 from "../assets/projects/oroVerde.png";
import project4 from "../assets/projects/ChopSuey.png"
const projectsArray = [
    { 
        id: '1', 
        img: project1, 
        name: "Nostalgic Tasks", 
        desc: "Una colorida página web con estilo Lo-fi donde podrás estudiar, anotar tus quehaceres o tareas, y escuchar relajando música en el proceso", 
        gitHub:'https://github.com/Liottaap/Nostalgic_tasks', 
        link: 'https://nostalgictasks.netlify.app/',},
    { 
        id: '2', 
        img: project2, 
        name: "Patitas Contentas",
        desc: "Una colorida landing page diseñada para la adopción y tránsito de mascotas sin hogar", 
        gitHub:'https://github.com/Liottaap/Patitas_contentas', 
        link: 'https://patitascontentas.netlify.app/', },
    { 
        id: '3', 
        img: project3, 
        name: "Oro Verde", 
        desc: "Destinada a tienda la comercialización de productos comestibles regionales, incluyendo carrit", 
        gitHub:'https://github.com/Liottaap/Oro_Verde', 
        link: 'https://oroverdesj.netlify.app/', 
    },
    { 
        id: '4', 
        img: project4, 
        name: "Chop Suey", 
        desc: "Landing page hecha para el menú de un restaurante.",
        gitHub:'https://github.com/Liottaap/ChopSuey', 
        link: 'https://food-chopsuey.netlify.app/', 
    },
];

export {projectsArray};