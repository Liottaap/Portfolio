
import '../assets/styles/globals.css'
import ButtonsContainer from '../components/ButtonsContainer';
import LogoImage from "../assets/ladev_2.png"; // Importa tu logo
import { useAnimatedTitle } from '../components/animatedHook';
import'../assets/styles/globals.css'

function Header() {
    const animatedTitle = useAnimatedTitle(
        `Liotta Ana || Frontend Developer `, 150);


    return(
            <header id='header' className=" snap-section items-center gap-5 p-20 pt-5 bg-whitesmoke 
                flex flex-col items-center justify-evenly">

                {/* Botones */}
                <div className='w-full w-42 p-2 bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-pink-500  flex items-center justify-between pr-10'>
                    <div className='flex w-auto items-center w-2/4'>
                        <a href="./Header.jsx" className='min-w-max' style={{
                            backgroundImage: `url(${LogoImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: '100px',
                            height: '100px'

                        }}></a>

                        <h1 className='text-4xl pl-5 w-max'>{animatedTitle}</h1>
                    </div>

                    <ButtonsContainer/>
                </div>

                <nav  className="flex flex-col w-full items-end justify-end gap-10 text-9xl  pr-10">
                    {/*<img src={LogoLA} alt="-" className='w-80'/> */}
                    <a  className=" inline-block text-purple-400 cursor-pointer hover:scale-125  transition-all duration-500" href="#about">About</a>
                    <a  className=" inline-block text-purple-400 cursor-pointer hover:scale-125  transition-all duration-500" href="#works">Works</a>
                    <a  className=" inline-block text-purple-400 cursor-pointer hover:scale-125  transition-all duration-500" href="#contact">Contact</a>
                </nav>
            {/* NAV DEL HEADER */}
            
        </header>
    )
}

export default Header



/*  
bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent
*/