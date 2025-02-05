import linkedinLight from "../assets/linkedin-icon.svg";
import githubLight from "../assets/github-icon.svg";

function RedesButton ({isDark}) {

    return(
        <div className="flex gap-4 items-center justify-center pb-8 w-auto h-auto">
            <button className="w-12 h-12"
                style={{
                    backgroundImage: `url(${linkedinLight})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
            </button>
            <button className="w-12 h-12" 
style={{
    backgroundImage: `url(${githubLight})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}}>
            </button>
        </div>
    )
}

export default RedesButton