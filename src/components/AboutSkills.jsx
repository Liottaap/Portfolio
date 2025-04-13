import'../globals.css'
import '../../src/main.css'

function AboutSkills(){

    return(
<div className="snap-section relative lg:h-screen">
  {/* FRONTEND */}
  <div className=" text-white py-16 px-6 text-center 
                  flex flex-col items-center justify-center 
                  lg:absolute lg:inset-0 lg:w-1/2 lg:clip-left-thin
                  ">
    <h2 className="text-3xl lg:text-6xl font-bold">
      FRONTEND
    </h2>
    <ul className="mt-4 space-y-2 text-sm lg:text-base">
      <li className='text-2xl'>HTML, CSS, JavaScript, React, Sass, Astro</li>
      <li className='text-2xl'>Tailwind, bootstrap</li>
      <li className='text-2xl'>Git, Github, Node, Express</li>
    </ul>
  </div>

  {/* DESIGNER */}
  <div className="bg-whitebg text-darkLetter py-16 px-6 text-center 
                  flex flex-col items-center justify-center 
                  lg:absolute lg:inset-0 lg:left-1/2 lg:w-1/2 lg:clip-right-thin">
    <h2 className="text-3xl lg:text-6xl font-bold">
      DESIGNER
    </h2>
    <ul className="mt-4 space-y-2 text-sm lg:text-base">

      <li className='text-2xl'>UI/UX, Figma, Whimsical</li>
      <li className='text-2xl'>Photoshop, Illustrator, CorelDraw</li>
    </ul>
  </div>
</div>
    )
}

export {AboutSkills}

