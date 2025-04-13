

import ProjectsContainer from "../components/ProjectsContainer"
import {useAnimatedTitle } from '../components/hooks/animatedHook'
import'.././globals.css'


function Works () {
    
    const animatedTitle = useAnimatedTitle('WORKS', 150)
    return (

        <section id="works" className="flex flex-col p-10 pb-20 gap-3 items-center overflow-hidden">
            <div className="block text-center h-[80%]">
                <h2 className="text-5xl font-bold text-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline">
                    {animatedTitle}
                </h2>
                <p className="text-whitesmoke">Explore my latest projects</p>
            </div>

            <ProjectsContainer/>
        </section>
    );

}

export {Works}