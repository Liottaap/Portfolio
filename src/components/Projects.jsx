import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // 📌 Asegurar que Bootstrap CSS está importado
import project1 from "../assets/projects/nostalgicTasks.png";
import project2 from "../assets/projects/mascotitas.png";
import project3 from "../assets/projects/oroVerde.png";
import'.././globals.css'


function Projects() {
    const projectsArray = [
        { img: project1, name: "Nostalgic Tasks", desc: "Una colorida página web con estilo Lo-fi donde podrás estudiar, anotar tus quehaceres o tareas, y escuchar relajando música en el proceso" },
        { img: project2, name: "Patitas Contentas", desc: "Una colorida landing page diseñada para la adopción y tránsito de mascotas sin hogar." },
        { img: project3, name: "Oro Verde", desc: "Destinada a tienda la comercialización de productos comestibles regionales, incluyendo carrito" },

    ];

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Carousel className="w-full shadow-lg shadow-black p-2" interval={3000} pause="hover" fade>
                {projectsArray.map((element, idx) => (
                    <Carousel.Item key={idx} className="w-full h-full flex justify-center items-center">
                        <a href="#" className="w-full h-full flex justify-center">
                            <img src={element.img} alt={element.name} className="h-[50vh] object-cover rounded-xl" />
                        </a>
                        <Carousel.Caption className="w-full absolute bottom-2 left-0 bg-black/40 flex flex-col justify-center items-center text-white p-4 ">
                            <h3 className="text-3xl">{element.name}</h3>
                            <p>{element.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Projects;