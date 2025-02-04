import { Link } from "react-router-dom"
import Profile from "../../assets/Profile.jpg"


export const Header = () => {

    return(
        <header className="flex flex-col items-center w-100 bg-mainBg pt-20 pb-20">
            <h1 className="text-8xl text-center pb-10">FRONTEND DEVELOPER</h1>
            <nav className="flex text-8xl w-full h-100 justify-center gap-28 items-center">
                <img src={Profile} alt="Foto de perfil de Ana Liotta, desarrolladora Frontend" className="w-1/4" />
                <div className="flex flex-col items-start w-1/3 gap-4">
                    <Link path="../works.jsx"  className="hover:scale-125 hover:translate-x-8 hover:text-9xl">ABOUT</Link>
                    <Link path="../works.jsx"  className="hover:scale-125 hover:translate-x-8 hover:text-9xl">WORK</Link>
                    <Link path="../works.jsx"  className="hover:scale-125 hover:translate-x-8 hover:text-9xl">CONTACT</Link>
                </div>

            </nav>
    </header>
    )
}
