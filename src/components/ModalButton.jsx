import { ModalContent } from "./ModalContent";
import { useState } from "react";
import { projectsArray } from "./projectsArray";
import { useEffect } from "react";
function ModalButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };
  // 👉 Ocultar elementos de fondo
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);
  
  return (
    <>
        <button
            className="border-2 border-whiteLetter rounded-md p-2 w-[130px] text-center flex items-center justify-center hover:bg-whitebg hover:text-blackbg transition-all"
            onClick={() => openModal(projectsArray[0])}
        >Show more
        </button>

      {isOpen && selectedProject && (
        <ModalContent project={selectedProject} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export { ModalButton };