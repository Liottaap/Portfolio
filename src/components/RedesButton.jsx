import linkedin from "../assets/linkedin-icon-dark.svg";
import github from "../assets/github-icon-dark.svg";
import whatsapp from "../assets/whatsapp_dark.svg"
/* Version blanca de los iconos */
import whitelinkedin from "../assets/linkedin-icon.svg"
import whiteGithub from "../assets/github-icon.svg"
import whiteWhatsapp from "../assets/whatssap-icon.svg"

function RedesButton ({isBigger, isWhite}) {

     const buttonSize = isBigger ? "w-16 h-16 gap-10" : "w-8 h-8 gap-4"
     const linkedinIcon = isWhite ? whitelinkedin : linkedin;
     const githubIcon = isWhite ? whiteGithub : github;
     const whatssapIcon = isWhite ? whiteWhatsapp : whatsapp;
     /* No las estoy usando pero las dejo por las dudas, si cambio color de fondo */
    return(
        <div className="flex gap-4 items-center justify-center w-auto h-auto">
            <button className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`}
                style={{
                    backgroundImage: `url(${linkedinIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: '50px',
                    height: '50px'
                }}>
            </button>
            <button className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`} 
                style={{
                    backgroundImage: `url(${githubIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: '50px',
                    height: '50px'
                }}>
            </button>
            <button  className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`}
                style={{
                    backgroundImage: `url(${whatssapIcon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: '50px',
                    height: '50px'
                }}>
            </button>
        </div>
    )
}

export default RedesButton