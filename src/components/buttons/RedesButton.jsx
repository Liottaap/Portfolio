import linkedin from "../../assets/linkedin-icon-dark.svg";
import github from "../../assets/github-icon-dark.svg";

import whitelinkedin from "../../assets/linkedin-icon.svg"
import whiteGithub from "../../assets/github-icon.svg"

import'../../globals.css'


function RedesButton ({isWhite}) {

     const linkedinIcon = isWhite ? whitelinkedin : linkedin;
     const githubIcon = isWhite ? whiteGithub : github;

     /* No las estoy usando pero las dejo por las dudas, si cambio color de fondo */
    return(
        <div className="flex gap-4  lg:flex items-center justify-center
        md:pr-4
        ">
            <a href="https://www.linkedin.com/in/ana-liotta/" className="h-8 lg:w-8"
                style={{
                    backgroundImage: `url(${linkedinIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",

                }}>
            </a>
            <a href="https://github.com/Liottaap" className="h-8 lg:w-8"
                style={{
                    backgroundImage: `url(${githubIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            </a>

        </div>
    )
}

export default RedesButton