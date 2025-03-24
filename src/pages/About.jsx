import {useAnimatedTitle}   from '../components/animatedHook'
import'../assets/styles/globals.css'

function About(){
    const animatedTitle = useAnimatedTitle('ABOUT', 150)
    return(
        <div id='about' className='snap-section'>
            <h1 className="text-6xl font-bold bg-gradient-to-br text-center from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline"> {animatedTitle}</h1>
            <div>
                <img src="" alt="" />
                <p className='text-whitebg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere unde eligendi eius ipsam amet ullam, velit aliquid pariatur deserunt qui sunt dolorem natus laborum saepe ipsum ut, tempore eos.</p>
            </div>

        </div>
    )
}

export default About