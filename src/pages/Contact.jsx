import  RedesButton  from "../components/RedesButton"
import {useAnimatedTitle}   from '../components/Hooks/animatedHook'
import'../globals.css'


function Contact() {
    const animatedTitle = useAnimatedTitle('CONTACT', 150)
    return(
        <footer id='contact' className="snap-section bg-mainbg text-whiteletter w-full flex flex-col gap-10 items-center justify-center p-20">
            <h2 className=" text-5xl font-bold bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{animatedTitle}</h2>
            <p className=" text-xl  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corrupti aliquid architecto at iusto praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sed fugiat vitae nobis sunt a deleniti adipisci. Est odit, cupiditate facilis doloribus quo repudiandae ipsa officia, quam tenetur maxime vel.inventore delectus esse id enim saepe harum, magni a voluptatum distinctio repellendus explicabo, est cupiditate.</p>
            <div className="flex flex-col  gap-5 justify-center items-center text-2xl">
                <RedesButton isBigger={true} isWhite={true}/>
                <p className="text-2xl ">liotta.a.p@gmail.com</p>
            </div>
        </footer>
    )
    
}

export {Contact}