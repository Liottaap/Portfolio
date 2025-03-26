

import ProjectsContainer from "../components/ProjectsContainer"
import {useAnimatedTitle}   from '../components/Hooks/animatedHook'
import'.././globals.css'



function Works () {
    
    const animatedTitle = useAnimatedTitle('WORKS', 150)
    return (

        <section id="works" className="snap-section  flex flex-col pt-20 justify-around items-center bg-whitebg overflow-hidden">
            <div className="block text-center">
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