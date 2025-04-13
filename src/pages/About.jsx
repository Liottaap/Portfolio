import { AboutHello } from '../components/AboutHello'
import'.././globals.css'


function About(){
/*     const animatedTitle = useAnimatedTitle('ABOUT', 150) */
    return(
        <section id='about' className='flex items-center justify-center'>
            {/* Saludo */}

            <AboutHello/>
            {/* Skills */}
        </section>
    )
}

export {About}