
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ejemplo from '../assets/imagenEjemplo.jpg'
import { useEffect } from 'react';

function Projects() {
    const projectsArray = [
        {
            imagen: Ejemplo,
            nombre: "Proyecto1"
        },
        {
            imagen: Ejemplo,
            nombre: "Proyecto2"
        },
        {
            imagen: Ejemplo,
            nombre: "Proyecto3"
        },
        {
            imagen: Ejemplo,
            nombre: "Proyecto4"
        },
        {
            imagen: Ejemplo,
            nombre: "Proyecto5"
        },
        {
            imagen: Ejemplo,
            nombre: "Proyecto6"
        }
    ];
    const isPink = (index) => index % 2 !== 0;


    return (
        <Row xs={1} sm={2} md={4} className="g-5 m-2">
            {projectsArray.map((element, idx) => (
                <Col key={idx}>
                    <article className={`cursor-pointer flex flex-col h-full rounded-xl items-center 
                        hover:scale-105 hover transition-transform duration-300
                        ${isPink(idx) ? 'bg-fuchsia-500' : 'bg-indigo-500'} `}>
                        <img src={element.imagen} alt="pagina de ejemplo" className="h-full w-full bg-white rounded-t-xl"/>
                        <div className="flex flex-col h-2/6 gap-2 align-center justify-center">
                            <h2 className="font-bold text-2xl text-whitesmoke m-4 ">{element.nombre}</h2>
                            <ul className=" flex w-full  -mb-3  gap-3 justify-center items-center text-center">
                                <li className=" w-auto rounded-lg p-1 border-2 border-white text-whitesmoke text-sm">React.Js</li>
                                <li className=" w-auto rounded-lg p-1 border-2 border-white text-whitesmoke text-sm">Tailwind</li>
                            </ul>
                        </div>
                    </article>
                </Col>
            ))}
        </Row>
    );
}


export default Projects;