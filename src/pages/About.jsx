import { AboutHello } from './AboutHello'
import'.././globals.css'
import {HomeButton} from '../components/HomeButton'

function About(){
/*     const animatedTitle = useAnimatedTitle('ABOUT', 150) */
    return(
        <section id='about' className='snap-section flex items-center justify-center'>
            {/* Saludo */}
            <HomeButton/>
            <AboutHello/>
            {/* Skills */}
        </section>
    )
}

export {About}