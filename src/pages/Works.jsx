import ProyectsContainer from "../components/ProyectsContainer"
import ButtonsContainer from '../components/ButtonsContainer';
import HomeButton from "../components/HomeButton";
function Works () {
    return(
        <section className="bg-slate-950 min-h-screen  flex gap-20 flex-col pt-5 pb-40 ">
            <ButtonsContainer/>
            <HomeButton/>
            <div className="flex flex-col justify-center items-center gap-10 text-2xl">
                <h1 className="text-6xl font-bold bg-gradient-to-br text-center from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline">  / WORKS </h1>
                <p className="text-whitesmoke">Explore my latest proyects</p>
            </div>

            <ProyectsContainer/>
        </section>

    )
}

export default Works