import React from 'react';
import { useParams } from 'react-router-dom';
import { UXUIprojectsArray } from '../components/projectsArray';
import { ButtonsContainer } from '../components/MenuContainer';
import ReturnButton from '../components/buttons/ReturnButton';
import RedesButton from '../components/buttons/RedesButton';

function ProjectDetail() {
  const { id } = useParams();

  const project = UXUIprojectsArray.find(p => p.id === id);

  if (!project) {
    return (
      <p className="text-center mt-10 text-lg text-gray-400">
        Proyecto no encontrado
      </p>
    );
  }

  const roleMap = {
    'UX': 'UX Designer',
    'UI': 'UI Designer',
    'UX/UI': 'UX/UI Designer',
    'Todos': 'Todos'
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <ButtonsContainer />

      {/* 🔹 HEADER */}
      <header className="flex flex-col md:flex-row items-center justify-around p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 gap-4">
  {/* Texto del header */}
  <div className="flex flex-col gap-2 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{project.name}</h1>
    <h2 className="text-sm md:text-base">Rol: {roleMap[project.type]}</h2>
    <h2 className="text-sm md:text-base">Duración: 3 meses</h2>
  </div>

  {/* Banner envuelto en un div */}
  {project.banner && (
    <div className="w-full md:w-1/3 h-[400px] overflow-hidden">
      <img
        src={project.banner}
        alt={project.name}
        className="w-full h-full object-contain"
      />
    </div>
  )}
</header>

      {/* 🔹 IMAGEN PRINCIPAL DEL PROYECTO */}
      {project.img && project.img[0] && (
        <section className="flex justify-center my-20">
          <img
            src={project.img[0]}
            alt={`${project.name} presentación`}
            className="max-w-[90%] object-contain rounded-xl shadow-lg"
          />
        </section>
      )}

      {/* 🔹 BOTÓN DE RETORNO */}
      <ReturnButton
        linkTo="/UXPortfolio"
        // positionClass="bottom-10 left-10"
        textColor="blackbg"
        borderColor="blackbg"
      />

      {/* 🔹 FOOTER */}
      <footer className="flex justify-around items-center px-6 py-3 bg-neutral-900 text-sm md:text-base">
        <h3>Liotta Ana Paula</h3>
        <p>liotta.a.p@gmail.com</p>
        <RedesButton />
      </footer>
    </main>
  );
}

export default ProjectDetail;
