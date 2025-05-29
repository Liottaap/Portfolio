import project1 from "../assets/projects/nostalgicTasks.png";
import project2 from "../assets/projects/mascotitas.png";
import project3 from "../assets/projects/oroVerde.png";
import project4 from "../assets/projects/ChopSuey.png"
import project5 from '../assets/projects/batatabit.png'
const projectsArray = [
    { 
        id: '1', 
        img: project1, 
        name: "Nostalgic Tasks", 
        desc: "A colorful Lo-fi-themed website, perfect for studying, organizing your tasks, and enjoying relaxing music along the way.\nBuilt with React.js and styled using Tailwind CSS, this app features a functional music player powered by React Player, with a curated playlist to help you focus.\nThe design was previously created in Whimsical, aiming for a warm and nostalgic visual experience.",

        tecs:"React, Tailwind",
        gitHub:'https://github.com/Liottaap/Nostalgic_tasks', 
        link: 'https://nostalgictasks.netlify.app/',},
    { 
        id: '2', 
        img: project2, 
        name: "Patitas Contentas",
        desc: "A vibrant landing page designed to promote the adoption and responsible fostering of homeless pets.\nCreated with HTML, CSS, and JavaScript, this project aims to convey warmth and empathy, offering a visually and functionally friendly experience for potential adopters.\nIt features a login system built with JavaScript, where users must register before signing in. Once logged in, they are redirected to the homepage.\nIt also includes Toastify and SweetAlert to notify users when an error occurs during login, registration, or when adopting a pet.",

        tecs: "HTML, CSS, JavaScript",
        gitHub:'https://github.com/Liottaap/Patitas_contentas', 
        link: 'https://patitascontentas.netlify.app/', },
    { 
        id: '3', 
        img: project3, 
        name: "Oro Verde", 
        desc: "A personal project for an online store focused on selling regional and healthy food products.\nThe design was initially planned with a wireframe created in Whimsical, allowing for a clear visual structure before development.\nIt was built using only HTML and CSS, with future migration to SASS in mind, aiming for better style organization and scalability.\nThe visual proposal focuses on a clear, clean, and user-friendly experience, with attention to detail to convey trust and accessibility.",

        tecs: "HTML, CSS, SASS",
        gitHub:'https://github.com/Liottaap/Oro_Verde', 
        link: 'https://oroverdesj.netlify.app/', 
    },
    { 
        id: '4', 
        img: project4, 
        name: "Chop Suey", 
        desc: "A personal landing page project for a fast food restaurant with a modern and appealing style.\nThe design is fully responsive, adapting to all screen sizes, from desktops to mobile devices.\nOne of its key features is an interactive hamburger menu that enhances mobile navigation while maintaining a clean aesthetic.\nThe vibrant color palette and clear visual layout aim to capture the user's attention and convey the restaurant's energy and dynamism.",

        tecs:"HTML, CSS, JavaScript",
        gitHub:'https://github.com/Liottaap/ChopSuey', 
        link: 'https://food-chopsuey.netlify.app/', 
    },
    { 
        id: '5', 
        img: project5, 
        name: "Batatabit", 
        desc: "An informational website about cryptocurrencies, built with HTML and CSS. In this project, I learned how to implement responsive design.",
        tecs:"HTML, CSS",
        gitHub:'https://github.com/Liottaap/Batabit', 
        link: 'https://mybatatabit.netlify.app/', 
    },
];

export {projectsArray};