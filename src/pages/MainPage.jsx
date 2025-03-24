

import Header from './Header'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import'../assets/styles/globals.css'

function MainPage(){
    
    return(
        <div className='snap-container bg-mainBg'>
            <Header/>
            <Works/>
            <About/>
            <Contact/>
        </div>

    )
}

export default MainPage;
