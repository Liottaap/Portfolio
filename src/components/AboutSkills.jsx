import'../globals.css'
import '../../src/main.css'
import { Link } from 'react-router-dom'
function AboutSkills(){

    return(
<div className="snap-section relative lg:h-screen">
  {/* FRONTEND */}
  <div className=" bg-blackbg  text-white py-16 px-6 text-center 
                  flex flex-col items-center justify-center 
                  lg:absolute lg:inset-0 lg:w-1/2 lg:clip-left-thin
                  ">
    <h2 className="text-3xl lg:text-6xl font-bold">
      FRONTEND
    </h2>
    <ul className="mt-4 space-y-2 text-sm lg:text-base">
      <li className='text-2xl'>HTML, CSS, JavaScript, React, Sass</li>
      <li className='text-2xl'>Tailwind, bootstrap</li>
      <li className='text-2xl'>Git, Github</li>
    </ul>
    <Link to='DWPortfolio' className='mt-20 text-2xl border-2 border-white px-24 md:px-28 lg:px-32 py-2 hover:bg-white hover:text-black'>Portfolio</Link>

  </div>

  {/* DESIGNER */}
  <div className="bg-whitebg text-darkLetter py-16 px-6 text-center 
                  flex flex-col items-center justify-center 
                  lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 lg:clip-right-thin">
    <h2 className="text-3xl lg:text-6xl font-bold">
      DESIGNER
    </h2>
    <ul className="mt-4 space-y-2 text-sm lg:text-base">

      <li className='text-2xl'>UI/UX, Figma, Whimsical, Adobe XD</li>
      <li className='text-2xl'>Photoshop, Illustrator, Canva</li>
    </ul>
    <Link to='/UXPortfolio' className='mt-20 text-2xl border-2 border-blackbg px-24 md:px-28 lg:px-32 py-2 hover:bg-blackbg hover:text-white'>Portfolio</Link>
  </div>
</div>
    )
}

export {AboutSkills}

