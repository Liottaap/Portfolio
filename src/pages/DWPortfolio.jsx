

import DWContainer from "../components/DWContainer"
import {useAnimatedTitle } from '../components/hooks/animatedHook'
import'.././globals.css'
import ReturnButton from "../components/buttons/ReturnButton";


function DWPortfolio () {
    
    const animatedTitle = useAnimatedTitle('DESARROLLO WEB', 150)
    return (

        <section id="works" className="bg-blackbg min-h-screen pt-10 flex flex-col gap-3 items-center overflow-hidden">
            <ReturnButton/>
            <div className="block text-center h-[80%]">
                <h2 className="text-4xl font-bold text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline">
                    {animatedTitle}
                </h2>
                <p className="text-white/70">Explora mis últimos proyectos</p>
            </div>

            <DWContainer/>
        </section>
    );

}

export {DWPortfolio}