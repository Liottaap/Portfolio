import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/UXPortfolio/${project.id}`}
      className="cursor-pointer relative w-[350px] h-[450px] m-2 overflow-hidden border-4 border-white hover:border-none p-2 rounded-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={project.mockup}
        alt={project.name}
        className="w-full h-full object-contain rounded-xl"
      />
      {hover && (
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black/50 transition ease-out duration-200">
          {project.name}
        </h2>
      )}
    </Link>
  );
}

export default ProjectCard;