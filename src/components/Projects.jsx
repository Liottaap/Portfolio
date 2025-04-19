import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import'.././globals.css'
import './projectsArray'
import { MoreInfoContainer } from './MoreInfoContainer';

function Projects({ projects }) {
    return (
        <div className="w-full flex flex-col justify-center items-center
        lg:w-[80%]">
            <Carousel className=" shadow-lg shadow-black p-2" fade interval={null}>
                {projects.map((project, idx) => (
                    <Carousel.Item 
                        key={idx} 
                        className=" w-full h-[500px] flex justify-center items-center bg-white rounded-xl overflow-hidden"
                    >
                        {/* Este div controla la distribución */}
                        <div className="w-full h-full flex flex-col md:flex-row h-700px md:h-[500px]">
                            
                            {/* Imagen (70%) */}
                            <figure className="w-full md:w-[60%] h-[70%] md:h-full">
                                <Link to={`/works/${project.id}`} className="block w-full h-full">
                                    <img 
                                        src={project.img} 
                                        alt={project.name} 
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            </figure>

                            {/* Texto (30%) */}
                            <article className="w-full md:w-[40%] h-[30%] md:h-full bg-black text-white flex lg:flex-col justify-between items-start p-6 gap-4">
                                
                                <div className='w-full flex flex-col h-36 md:mt-12 gap-2 lg:justify-evenly'>
                                    <h3 className="text-2xl md:text-4xl font-bold">{project.name}</h3>
                                    <p className="text-l">{project.tecs}</p>
                                </div>
                                <MoreInfoContainer project={project}/>
                                    
                                
                            </article>

                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Projects;