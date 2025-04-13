import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // 📌 Asegurar que Bootstrap CSS está importado
import { Link } from 'react-router-dom';
import'.././globals.css'
import './projectsArray'

function Projects({ projects }) {
    return (
        <div className="w-full flex flex-col justify-center items-center
        lg:w-[80%]">
            <Carousel className=" shadow-lg shadow-black p-2" interval={3000} pause="hover" fade>
                {projects.map((project, idx) => (
                    <Carousel.Item 
                        key={idx} 
                        className="w-full h-max flex justify-center items-center bg-white rounded-xl overflow-hidden"
                    >
                        {/* Este div controla la distribución */}
                        <div className="w-full h-full flex flex-col md:flex-row h-700px md:h-[500px]">
                            
                            {/* Imagen (70%) */}
                            <figure className="w-full md:w-[70%] h-[70%] md:h-full">
                                <Link to={`/works/${project.id}`} className="block w-full h-full">
                                    <img 
                                        src={project.img} 
                                        alt={project.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            </figure>

                            {/* Texto (30%) */}
                            <article className="w-full md:w-[30%] h-[30%] md:h-full bg-black text-white flex flex-col justify-between items-start p-6 gap-4">
                                
                                <div className='flex flex-col gap-10 md:mt-20'>
                                    <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                                    <p className="text-sm">{project.desc}</p>
                                </div>
                                <div className=' w-full h-50px flex justify-start gap-2 items-start'>
                                    <a href={project.gitHub}  target='_blank' >Github</a>
                                    <a href={project.link}  target='_blank' >Site</a>
                                </div>
                                    
                                
                            </article>

                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Projects;