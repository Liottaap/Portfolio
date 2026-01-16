import  RedesButton  from "../components/buttons/RedesButton"
import {useAnimatedTitle } from '../components/hooks/animatedHook'
import'../globals.css'


function Contact() {
    const animatedTitle = useAnimatedTitle('CONTACTO', 150)
    return(
        <footer id='contact' className=" h-screen text-whiteLetter w-full flex flex-col gap-10 items-center justify-center text-center">
            <h2 className=" text-[2.5rem] md:text-5xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{animatedTitle}</h2>
            <p className=" text-4xl  ">Trabajemos juntos!</p>
            <div className="flex flex-col  gap-5 justify-center items-center text-2xl">
                <RedesButton isBigger={true} isWhite={true}/>
                <p className="text-2xl ">liotta.a.p@gmail.com</p>
            </div>
        </footer>
    )
    
}

export {Contact}