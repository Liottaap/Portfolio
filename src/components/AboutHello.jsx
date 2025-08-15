// import fotoPortfolio  from '../assets/perfil2.jpg's
import fotoPortfolio  from '../assets/perfil.jpg'
import'../globals.css'
import { ButtonsContainer } from './MenuContainer'

function AboutHello(){

    return(
        <section className=' h-screen relative mt-[8px] ml-[8px]  flex flex-col items-center justify-between'>
            {/* About me */}
            {/* <div className='relative h-[500px] w-[30%] md:ring-2 md:ring-purple-500 row-span-full  justify-center flex items-center  justify-center hidden 
            md:block' >
                <img src={fotoPortfolio} alt="Foto de perfil de Ana Liotta, desarrolladora Frontend" 
                className=" absolute z-10 object-cover -top-10 -left-5"/>
            </div> */}

            {/* Texto  */}
            <ButtonsContainer/>
            <div className=' flex gap-10 flex-col
                md:w-[70%]'>
                {/* <h2 className='text-whitebg text-6xl text-center '>Hi! I'm Ana</h2> */}
                <div  className='text-whitebg  text-center  flex justify-center gap-10 flex-col
                '>
                    <p className='text-xl md:text-3xl lg:text-4xl'>
                    Desarrolladora Frontend y Diseñadora UX/UI apasionada por crear experiencias digitales atractivas y funcionales.
                    </p>
                    <p className='text-xl md:text-3xl lg:text-4xl'>Mi enfoque está en combinar la creatividad con un código limpio, accesible y optimizado para ofrecer interfaces intuitivas y eficientes, además de una experiencia de usuario agradable.</p>
                    <p className='text-xl md:text-3xl lg:text-4xl'>
                        En este portafolio encontrarás una muestra de mis proyectos.
                        <span className='inline-block'>¡Gracias por visitar mi trabajo! </span>
                    </p>
                </div>
            </div>
            <a className='inline-block text-2xl border-2 text-center text-whitebg border-white px-24 md:px-28 lg:px-32 py-2 mb-10 hover:bg-white hover:text-black' target="_blank"
  rel="noopener noreferrer" href="https://drive.google.com/file/d/174scLwEhS2rEbdJ2t2vMqKS0ffEvZyAv/view?usp=sharing">CV</a>

            </section>
    )
}

export {AboutHello}