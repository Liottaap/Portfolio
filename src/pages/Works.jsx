
import HomeButton from "../components/HomeButton";
import ProyectsContainer from "../components/ProyectsContainer"
import ButtonsContainer from '../components/ButtonsContainer';
import {useAnimatedTitle}   from '../components/animatedHook'
import'../assets/styles/globals.css'


function Works () {
    
    const animatedTitle = useAnimatedTitle('WORKS', 150)
    return(
        <div id='works' className="snap-section ">
            <HomeButton />
            <section className="bg-whitebg flex flex-col  pt-3">

                {/* <HomeButton/> */}
                <div className="flex flex-col justify-center items-center  text-2xl">
                    <h1 className="text-6xl font-bold bg-gradient-to-br text-center from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline"> {animatedTitle}</h1>
                    <p className="text-whitesmoke">Explore my latest proyects</p>
                </div>
                <ProyectsContainer />
            </section>
       </div>


    )
}

export default Works