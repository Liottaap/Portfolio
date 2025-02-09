import linkedin from "../assets/linkedin-icon.svg";
import github from "../assets/github-icon.svg";
import whatssap from "../assets/whatssap-icon.svg"


function RedesButton ({isBigger}) {

     const buttonSize = isBigger ? "w-16 h-16 gap-10" : "w-8 h-8 gap-4"


    return(
        <div className="flex gap-4 items-center justify-center w-auto h-auto">
            <button className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`}
                style={{
                    backgroundImage: `url(${linkedin})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            </button>
            <button className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`} 
                style={{
                    backgroundImage: `url(${github})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            </button>
            <button  className={`${buttonSize} ${isBigger ? 'hover:animate-border' : ''}`}
                style={{
                    backgroundImage: `url(${whatssap})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            </button>
        </div>
    )
}

export default RedesButton