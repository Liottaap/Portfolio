
import LogoLA from '../assets/LogoPorfolio.png'

function HomeButton () {

    return(
        <button className='w-20 h-20 shadow-[6px_6px_0px_#c2b2b2] rounded-full'
        style={{
            backgroundImage: `url(${LogoLA})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
    </button>
    )
}

export default HomeButton