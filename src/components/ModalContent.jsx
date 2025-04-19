import './projectsArray'
import { motion } from "framer-motion";


function ModalContent({ project, setIsOpen }) {
    return (
        <div className="fixed z-[9999] inset-0  flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-max h-full md:w-[80%] md:h-[80%] bg-blackbg border-2 rounded-lg p-6 grid grid-cols-[30%,70%] grid-rows-[10%,30%,70%]"
            >
            <button
                className="col-start-2 row-start-1 justify-self-end self-end text-whiteLetter text-4xl"
                onClick={() => setIsOpen(false)}
            >
                ×
            </button>
            <h1 className="col-start-1 col-end-3 lg:col-end-2 row-start-2 text-whiteLetter text-3xl lg:text-6xl font-bold self-center">
                {project.name}
            </h1>
            <div className='col-start-1 col-end-3 lg:col-start-2 row-start-3 scroll-m-0'>
                <p className=" text-whiteLetter self-center text-base">{project.desc}</p>
            </div>

            </motion.div>
        </div>
    );
  }

export { ModalContent }