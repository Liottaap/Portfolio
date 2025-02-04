
import Linkedin from '../../assets/linkedin-icon-dark.svg'
import Github from '../../assets/github-icon-dark.svg'

export const Footer = () => {
    return(
        <footer className="bg-mainBg w-full flex flex-col gap-10 items-start justify-center p-20">
            <h1 className="text-8xl">CONTACT</h1>
            <p className="w-1/2 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti aliquid architecto at iusto praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed fugiat vitae nobis sunt a deleniti adipisci. Est odit, cupiditate facilis doloribus quo repudiandae ipsa officia, quam tenetur maxime vel.inventore delectus esse id enim saepe harum, magni a voluptatum distinctio repellendus explicabo, est cupiditate.</p>
            <div className="flex flex-col w-1/2 justify-center items-center text-2xl">
                <div className="flex gap-10 items-center justify-center pb-8 w-auto h-auto">
                    <button className="w-12 h-12"
                        style={{backgroundImage:`url(${Linkedin}`, 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",}}>
                    </button>
                    <button className="w-12 h-12" 
                        style={{
                            backgroundImage:`url(${Github}`, 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",}}>
                    </button>
                </div>
                <p className="text-2xl"d>liotta.a.p@gmail.com</p>
            </div>
        </footer>
    )
}
