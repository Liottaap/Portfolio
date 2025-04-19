import { ModalButton } from "./ModalButton"

function MoreInfoContainer({project}){

    return(
        <div className=' w-auto flex flex-col justify-center gap-2 items-start'>
            <ModalButton />
            <div className='w-full flex justify-center items-center gap-2'>
                <a href={project.gitHub}  target='_blank' className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:delay-200 hover:after:w-full">Github</a>
                <a href={project.link}  target='_blank' className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:delay-200 hover:after:w-full">Site</a>
            </div>
        </div>
    )
}

export {MoreInfoContainer}