
import'.././globals.css'
import {useAnimatedTitle } from '../components/hooks/animatedHook'
import RedesButton from './RedesButton'

function ButtonsContainer({isWhite}){
    const animatedTitle = useAnimatedTitle(
        `Liotta Ana || Frontend Developer `, 150);


    return(

        <div className='w-full w-[100%] h-32 p-2 bg-gradient-to-r rounded-full from-blue-500 via-purple-500 to-pink-500  flex flex-col items-center justify-evenly
        md:flex-row md:justify-between'>
            <h1 className='text-md w-[80%]  text-center
            md:text-xl md:items-start
            lg:text-3xl'>{animatedTitle}</h1>
            <RedesButton/>
        </div>

    )
}

export {ButtonsContainer}