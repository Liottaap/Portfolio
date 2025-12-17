// import fotoPortfolio  from '../assets/perfil2.jpg's
import fotoPortfolio  from '../assets/perfil3.jpg'
import'../globals.css'
import { ButtonsContainer } from './MenuContainer'
import Linkedin from '../assets/linkedin-icon.svg'
import GitHub from '../assets/github-icon.svg'

function AboutHello(){

    return(
        <section className=' h-screen relative  flex flex-col items-center'>
            {/* Texto  */}
            <ButtonsContainer/>
            <div className='m-10 md:w-[80%] flex items-center flex-col gap-20'>
                <div className='flex items-center gap-10'>
                    <img src={fotoPortfolio} className='w-40 h-40 rounded-full' alt="Foto de perfil de Ana Liotta" />
                    <ul className='flex flex-col gap-3'>
                        <li><a href="https://www.linkedin.com/in/ana-liotta/"><img src={Linkedin} alt="cursor-pointer" className='w-10'/></a></li>
                        <li><a href="https://github.com/Liottaap"><img src={GitHub} alt="" className='w-10'/></a></li>

                    </ul>
                </div>
                {/* <h2 className='text-whitebg text-6xl text-center '>Hi! I'm Ana</h2> */}
                <div  className='text-whitebg text-sm  text-center 
                '>
                    <p className='text-sm md:text-2xl lg:text-3xl'>
                    Desarrolladora Frontend y Diseñadora UX/UI apasionada por crear experiencias digitales atractivas y funcionales.
                    </p>
                    <p className='text-sm md:text-2xl lg:text-3xl'>Mi enfoque está en combinar la creatividad con un código limpio, accesible y optimizado para ofrecer interfaces intuitivas y eficientes, además de una experiencia de usuario agradable.</p>
                    <p className='text-sm md:text-2xl lg:text-3xl'>
                        En este portafolio encontrarás una muestra de mis proyectos.
                        <span className='inline-block'>¡Gracias por visitar mi trabajo! </span>
                    </p>
                </div>
            </div>
    
            </section>
    )
}

export {AboutHello}