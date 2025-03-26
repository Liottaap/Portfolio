

import {Header} from './Header'
import {About} from './About'
import {Works} from './Works'
import {Contact} from './Contact'
import { AboutSkills } from './AboutSkills'

import'.././globals.css'


function MainPage(){

    return(
        <div className='snap-container bg-mainBg'>

            <Header/>
            <Works/>
            <About/>
            <AboutSkills/>
            <Contact/>
        </div>

    )
}

export default MainPage;
