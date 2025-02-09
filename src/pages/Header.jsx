import { Link } from 'react-router-dom';
import '../assets/styles/globals.css'
import RedesButton from "../components/RedesButton";

function Header() {

    return(
        <header className="flex flex-col items-center gap-20 min-h-screen pb-5 pr-10 pl-10 bg-slate-950">
            <div className="w-full h-14 flex p-4 justify-end items-center pr-20">
                <RedesButton/>
            </div>
            <h1 className="text-9xl text-center pb-10 font-extrabold   bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {Array.from("FRONTEND DEVELOPER").map((letter, index) => (
                <span key={index} className="animate-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                {letter}
                </span>
            ))}
            </h1>
            <nav className="w-9/12 h-max relative flex items-center  p-4  text-white border-l-8 border-b-8 border-transparent bg-clip-border animate-border ">
                <div className="flex flex-col w-full items-end justify-end gap-10 text-8xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pr-10">
                    <Link to="/about" className=" inline-block text-purple-400 cursor-pointer hover:scale-125 hover:-translate-x-44 transition-all duration-500">ABOUT</Link>
                    <Link to="/works" className=" inline-block text-purple-400 cursor-pointer hover:scale-125 hover:-translate-x-44 transition-all duration-500">WORKS</Link>
                    <Link to="/contact" className=" inline-block w-92 text-purple-400 cursor-pointer hover:scale-125 hover:-translate-x-44 transition-all duration-500">CONTACT</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header


