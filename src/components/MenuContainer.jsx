
import'.././globals.css'
import {useAnimatedTitle } from './hooks/animatedHook'
import RedesButton from './buttons/RedesButton'
import { HomeButton } from './buttons/HomeButton';
import { MenuHamburguesa } from './buttons/MenuHamburguesa';


function ButtonsContainer({isWhite}){
    const animatedTitle = useAnimatedTitle(
        `Liotta Ana || Desarrollo Web || Diseño UX/UI `, 150);
    return(

        <div className='w-full w-[100%] h-32 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  flex items-center justify-evenly
       flex-row md:justify-evenly'>
            {/* <MenuHamburguesa isWhite={true}/> */}
            <HomeButton className='w-[10%]'/>
            <h1 className='text-md w-[60%]  text-center
            md:text-xl md:items-start
            lg:text-3xl'>{animatedTitle}</h1>
            {/* <RedesButton claWssName='w-[30%]'/> */}
        </div>
    )
}

export {ButtonsContainer}