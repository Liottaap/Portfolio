
import'.././globals.css'
import {useAnimatedTitle } from './hooks/animatedHook'
import RedesButton from './RedesButton'
import { HomeButton } from './HomeButton';
import { MenuHamburguesa } from './MenuHamburguesa';


function ButtonsContainer({isWhite}){
    const animatedTitle = useAnimatedTitle(
        `Liotta Ana || Frontend Developer `, 150);


    return(

        <div className='w-full w-[100%] h-32 p-2 bg-gradient-to-r rounded-xl from-blue-500 via-purple-500 to-pink-500  flex items-center justify-evenly
       flex-row md:justify-evenly'>
            <MenuHamburguesa isWhite={true}/>
            <HomeButton className='w-[10%]'/>
            <h1 className='text-md w-[60%]  text-center
            md:text-xl md:items-start
            lg:text-3xl'>{animatedTitle}</h1>
            <RedesButton className='w-[30%]'/>

        </div>

    )
}

export {ButtonsContainer}