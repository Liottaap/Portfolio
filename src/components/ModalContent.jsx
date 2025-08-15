import './projectsArray'
import { motion } from "framer-motion";

function ModalContent({ project, setIsOpen }) {
  return (
    <div className="fixed z-[9999] inset-0 bg-black/60 flex justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl bg-blackbg border-2 rounded-lg p-10 
                   flex flex-col gap-20 max-h-[90vh] lg:h-[80vh] overflow-hidden"
      >
        {/* Botón cerrar */}
        <button
          className="absolute top-4 right-6 text-whiteLetter text-4xl"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        {/* Título */}
        <h1 className="text-whiteLetter text-3xl lg:text-6xl font-bold">
          {project.name}
        </h1>

        {/* Texto scrollable */}
        <div className="text-whiteLetter text-base overflow-y-auto pr-2">
          <p className="text-sm md:text-xl">{project.desc}</p>
        </div>
      </motion.div>
    </div>
  );
}

export { ModalContent };