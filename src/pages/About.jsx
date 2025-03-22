import useAnimatedTitle   from '../components/animatedHook'


function About(){
    const animatedTitle = useAnimatedTitle('ABOUT', 150)
    return(
        <div>
            <h1 className="text-6xl font-bold bg-gradient-to-br text-center from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text underline"> {animatedTitle}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime facere unde eligendi eius ipsam amet ullam, velit aliquid pariatur deserunt qui sunt dolorem natus laborum saepe ipsum ut, tempore eos.</p>
        </div>
    )
}

export default About