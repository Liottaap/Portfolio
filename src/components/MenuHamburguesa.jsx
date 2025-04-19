import { useState } from "react";
import MenuIcon from '../assets/menu-bar.png';
import linkedin from "../assets/linkedin-icon-dark.svg";
import github from "../assets/github-icon-dark.svg";
import whitelinkedin from "../assets/linkedin-icon.svg";
import whiteGithub from "../assets/github-icon.svg";
function MenuHamburguesa({ isWhite }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkedinIcon = isWhite ? whitelinkedin : linkedin;
    const githubIcon = isWhite ? whiteGithub : github;

    return (
        <div className="relative inline-block z-50">
            {/* Botón hamburguesa */}
            <img
                src={MenuIcon}
                onClick={toggleMenu}
                className="cursor-pointer w-[32px] h-[32px] lg:hidden "
                alt="Abrir menú de redes sociales"
            />

            {/* Menú desplegable */}
            <div
                className={`absolute left-0 w-auto top-full mt-2 bg-blackbg border-2 border-whitebg rounded-md w-48 overflow-hidden 
                transition-all duration-300 ease-in-out 
                ${isOpen ? 'max-h-40 translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'}`}
            >
                <ul className="flex flex-col items-center justify-center space-y-4 py-4">
                    <a
                        href="https://www.linkedin.com/in/ana-liotta/"
                        className="h-10 w-10"
                        style={{
                            backgroundImage: `url(${linkedinIcon})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                    <a
                        href="https://github.com/Liottaap"
                        className="h-10 w-10"
                        style={{
                            backgroundImage: `url(${githubIcon})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </ul>
            </div>
        </div>
    );
}

export { MenuHamburguesa };