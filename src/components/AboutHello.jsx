// import fotoPortfolio  from '../assets/perfil2.jpg's
import fotoPortfolio  from '../assets/perfil.jpg'
import'../globals.css'

function AboutHello(){

    return(
        <section className='  m-10 relative flex items-center gap-10'>
            {/* About me */}
            <div className='relative h-[500px] w-[30%] md:ring-2 md:ring-purple-500 row-span-full  justify-center flex items-center  justify-center hidden 
            md:block' >
                <img src={fotoPortfolio} alt="Foto de perfil de Ana Liotta, desarrolladora Frontend" 
                className=" absolute z-10 object-cover -top-10 -left-5"/>
            </div>

            {/* Texto  */}
            
            <div className='h-[80%] self-start flex gap-10 flex-between flex-col h-[50vh] w-[100%] 
                md:w-[70%]'>
                    <h2 className='text-whitebg text-6xl text-center'>Hi! I'm Ana</h2>
                    <div  className='text-whitebg text-2xl text-center lg:pl-20 lg:pr-20 flex gap-10 flex-col
                    md:text-right'>
                <p>
                    Frontend developer passionate about creating engaging and functional digital experiences. My focus is on combining creativity with clean, accessible, and optimized code to deliver intuitive and efficient interfaces, as well as a pleasant user experience.
                </p>
                <p>
                    In this portfolio, you’ll find a sample of my projects <span className='inline-block'>Thank you for visiting my work, and feel free to contact me to collaborate!</span>
                </p>
                <a className='underline'_blank href="https://drive.google.com/file/d/12AUP9cUDMIqf3XXoINEGuOmJHBHBvt_5/view?usp=sharing">CV</a>

                    </div>

            </div>

            </section>
    )
}

export {AboutHello}