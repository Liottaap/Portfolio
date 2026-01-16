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
    <div className='flex flex-col gap-3'>
      <Link to='/DWPortfolio' className='mt-20 text-2xl border-2 border-white px-24 md:px-28 lg:px-32 py-2 hover:bg-white hover:text-black'>Portfolio</Link>
      <a href="" className=' text-2xl border-2 border-white px-24 md:px-28 lg:px-32 py-2 hover:bg-white hover:text-black'>CV</a>
    </div>

  </div>

  {/* DESIGNER */}
  <div className="bg-whitebg text-darkLetter py-16 px-6 text-center 
                  flex flex-col items-center justify-center 
                  lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 lg:clip-right-thin">
    <h2 className="text-3xl lg:text-6xl font-bold">
      DESIGNER
    </h2>
    <ul className="mt-4 space-y-2 text-sm lg:text-base">

      <li className='text-2xl'>UX/UI, UX Research, UI Design System</li>
      <li className='text-2xl'>Photoshop, Illustrator, Canva, Figma</li>

    </ul>
    <div className='flex flex-col gap-3'>
      <Link to='/UXPortfolio' className='mt-20 text-2xl border-2 border-blackbg px-24 md:px-28 lg:px-32 py-2 hover:bg-blackbg hover:text-white'>Portfolio</Link>
        <a  href="https://drive.google.com/file/d/1WQDRftv1uDftDcuMx7tUXBiqlvyyEZdy/view?usp=sharing" 
            className=' text-2xl border-2 border-blackbg px-24 md:px-28 lg:px-32 py-2 hover:bg-blackbg hover:text-white'   
            target="_blank"
            rel="noopener noreferrer">CV</a>
    </div>

  </div>
</div>
    )
}

export {AboutSkills}

