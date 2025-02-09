import  RedesButton  from "../components/RedesButton"
import '../assets/styles/globals.css'


function Contact() {

    return(
        <footer className="bg-slate-950 text-purple-100 w-full h-screen flex flex-col gap-10 items-center justify-center p-20">
            <h1 className="text-8xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">CONTACT</h1>
            <p className=" text-xl  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti aliquid architecto at iusto praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed fugiat vitae nobis sunt a deleniti adipisci. Est odit, cupiditate facilis doloribus quo repudiandae ipsa officia, quam tenetur maxime vel.inventore delectus esse id enim saepe harum, magni a voluptatum distinctio repellendus explicabo, est cupiditate.</p>
            <div className="flex flex-col  gap-5 justify-center items-center text-2xl">
                <RedesButton isBigger={true}/>
                <p className="text-2xl ">liotta.a.p@gmail.com</p>
            </div>
        </footer>
    )
    
}

export default Contact