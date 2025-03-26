// import fotoPortfolio  from '../assets/perfil2.jpg's
import fotoPortfolio  from '../assets/perfil.jpg'
import'../globals.css'

function AboutHello(){

    return(
        <section className=' m-10 relative flex items-center gap-10'>
            {/* About me */}
            <div className='relative h-[500px] w-[30%] md:ring-2 md:ring-purple-500 row-span-full  justify-center flex items-center  justify-center hidden 
            md:block' >
                <img src={fotoPortfolio} alt="Foto de perfil de Ana Liotta, desarrolladora Frontend" 
                className=" absolute z-10 object-cover -top-10 -left-5"/>
            </div>

            {/* Texto  */}
            
                <div className='flex gap-10 flex-between flex-col h-[50vh] w-[100%] 
                md:w-[70%]'>
                    <h2 className='text-whiteletter text-6xl text-center'>Hi! I'm Ana</h2>
                    <div  className='text-whiteletter text-2xl text-center flex gap-10 flex-col
                    md:text-right'>
                        <p>
                            Desarrolladora frontend apasionada por la creación de experiencias digitales atractivas y funcionales. Mi enfoque se centra en combinar la creatividad y código limpio, accesible y optimizado para ofrecer interfaces intuitivas y eficientes, como así también una experiencia agradable para el consumidor.
                        </p>
                        <p>
                            En este portafolio encontrarás una muestra de mis proyectos, donde combino creatividad y tecnología para desarrollar aplicaciones dinámicas y centradas en el usuario. ¡Gracias por visitar mi trabajo y no dudes en contactarme para colaborar juntos!
                        </p>
                    </div>

                </div>

            </section>
    )
}

export {AboutHello}