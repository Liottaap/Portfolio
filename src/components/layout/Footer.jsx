import  RedesButton  from "../RedesButton"

function Footer() {
    return(
        <footer id='footer' className="bg-slate-950 w-full flex flex-col gap-10 items-start justify-center p-20">
            <h1 className="text-8xl font-bold bg-gradient-to-br from-cyan-400 to-pink-500 text-transparent bg-clip-text">CONTACT</h1>
            <p className="w-1/2 text-xl text-whitesmoke">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti aliquid architecto at iusto praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed fugiat vitae nobis sunt a deleniti adipisci. Est odit, cupiditate facilis doloribus quo repudiandae ipsa officia, quam tenetur maxime vel.inventore delectus esse id enim saepe harum, magni a voluptatum distinctio repellendus explicabo, est cupiditate.</p>
            <div className="flex flex-col w-1/2 justify-center items-center text-2xl">
                <RedesButton/>
                <p className="text-2xl text-whitesmoke"d>liotta.a.p@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer