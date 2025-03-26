

import ButtonsContainer from '../components/ButtonsContainer';
import { useAnimatedTitle } from '../components/Hooks/animatedHook';
import '../globals.css'


function Header() {
    const animatedTitle = useAnimatedTitle(
        `Liotta Ana || Frontend Developer `, 150);


    return(
            <header id='header' className=" snap-section  gap-5 p-5 pt-0 bg-whitesmoke 
                flex flex-col items-center items-center justify-evenly">
                {/* Botones */}
                <div className='w-full w-[100%] h-32 p-2 bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-pink-500  flex flex-col items-center justify-evenly
                md:flex-row md:justify-between'>
                    <h1 className='text-md w-[90%]  text-center
                    md:text-xl md:items-start
                    lg:text-3xl'>{animatedTitle}</h1>
                    <ButtonsContainer/>
                </div>
                {/* Nav */}
                <nav  className="flex flex-col w-full items-end justify-end gap-10 pr-10">
                    <a href="#about" className="header-text inline-block  cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-7xl">About</a>
                    <a href="#works" className="header-text inline-block cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-7xl">Works</a>
                    <a href="#contact" className="header-text inline-block  cursor-pointer hover:scale-125  transition-all duration-500 text-[#b6a5c7] text-7xl">Contact</a>
        
                </nav>
            
        </header>
    )
}

export {Header}



/*  
bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
*/