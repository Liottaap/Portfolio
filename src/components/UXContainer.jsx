import React from 'react';
import { UXUIprojectsArray } from './projectsArray';
import { Link } from 'react-router-dom';

function UXContainer({ filter }) {
  const filteredProjects = UXUIprojectsArray.filter(project => {
    if (filter === "Todos") return true; 
    if (filter === "Ux/Ui") return project.type === "UX/UI";
    if (filter === "Ui") return project.type === "UI";
    if (filter === "Ux") return project.type === "UX";
    return true;
  });

  return (
    <section className="flex flex-wrap gap-6 w-full justify-center">
      {filteredProjects.map(project => (
        <Link
          key={project.id}
          to={`/UXPortfolio/${project.id}`}
          className="group cursor-pointer flex flex-col justify-around w-[350px] h-[450px] border-4 border-white rounded-xl  hover:border-none transition"
        >
          {/* 🔹 IMAGEN */}
          <div className="h-[320px] flex items-center justify-center bg-black/10">
            <img
              src={project.mockup}
              alt= {project.name}
              className="max-h-full max-w-full object-contain p-4"
            />
          </div>

          {/* 🔹 TEXTO */}
          <div className="flex flex-col justify-center gap-1 px-4 text-white">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <span className="text-sm text-white/60">{project.type} project</span>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default UXContainer;