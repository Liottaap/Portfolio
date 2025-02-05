
import Profile from "../../assets/Profile3.png"
import RedesButton from "../RedesButton";

export const Header = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      };
    return(
        <header className="flex flex-col items-center w-100 min-h-screen  bg-slate-950 pt-5">
            <div className="w-full h-20 flex justify-end pr-20">
                <RedesButton/>
            </div>
            <h1 className="text-8xl text-center pb-10 font-extrabold bg-gradient-to-br from-cyan-400 to-pink-500 text-transparent bg-clip-text">FRONTEND DEVELOPER</h1>
            
            <nav className="flex text-8xl w-11/12 h-100 justify-between  p-[8px] bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg">
                <img src={Profile} alt="Foto de perfil de Ana Liotta, desarrolladora Frontend" className="w-1/3" />

                <div className="flex flex-col items-end w-2/3  gap-4 box-content bg-slate-950 pr-10 justify-center">
                    <button onClick={() => scrollToSection("about")} className="hover:scale-x-105 hover:-translate-x-10 hover:text-9xl transition-all font-bold bg-gradient-to-br from-cyan-400 to-pink-500 text-transparent bg-clip-text" >ABOUT</button>
                    <button onClick={() => scrollToSection("works")} className="hover:scale-x-105 hover:-translate-x-10 hover:text-9xl transition-all font-bold bg-gradient-to-br from-cyan-400 to-pink-500 text-transparent bg-clip-text">WORK</button>
                    <button onClick={() => scrollToSection("footer")} className="hover:scale-x-105 hover:-translate-x-10 hover:text-9xl transition-all font-bold bg-gradient-to-br from-cyan-400 to-pink-500 text-transparent bg-clip-text">CONTACT</button>
                </div>
            </nav>
        </header>
    )
}
