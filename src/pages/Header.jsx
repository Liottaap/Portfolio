
import { Link } from 'react-scroll';
import {ButtonsContainer} from '../components/MenuContainer';

import '../globals.css'

function Header() {

    return(
        <header id='header' className=" h-screen justify-evenly gap-10 -pt-20 
            flex flex-col items-center  lg:gap-5  lg:pl-20 lg:pr-20 lg:justify-evenly">
            {/* Botones */}
            <ButtonsContainer/>
            {/* Nav */}
            <nav  className="flex flex-col w-full items-center md:items-end justify-end gap-10 md:pr-10">
                    <a href="#about" className="header-text inline-block  cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-4xl md:text-6xl lg:text-8xl
                        ">ABOUT</a>
                    <a href="#works" className="header-text inline-block cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-4xl md:text-6xl lg:text-8xl">WORKS</a>
                    <a href="#contact" className="header-text inline-block  cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-4xl md:text-6xl lg:text-8xl">CONTACT</a>
        
                </nav>
            
        </header>
    )
}

export {Header}



/*  
bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
*/