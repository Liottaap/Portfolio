import React from 'react'
import { useParams } from 'react-router-dom'
import { ButtonsContainer } from '../components/MenuContainer'
import RedesButton from '../components/buttons/RedesButton'
import ReturnButton from '../components/buttons/ReturnButton'
import { UXprojectsArray } from '../components/projectsArray'

function WorksItem() {
  const { id } = useParams() // obtengo el id desde la URL
  const project = UXprojectsArray.find(p => p.id === id) // busco el proyecto

  if (!project) {
    return <p>Proyecto no encontrado</p>
  }

  return (
    <main className='flex flex-col'>
      <ButtonsContainer/>
      
      {/* HEADER */}
      <header className='flex flex-col md:flex-row p-2 gap-4 justify-around items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>
        <div className='flex flex-col gap-2 md:gap-4'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl pl-4'>{project.name}</h1>
          <h2 className='pl-4 text-sm'>Rol: UX/UI Designer</h2>
          <h2 className='pl-4 text-sm'>Duración: 3 meses</h2>
        </div>
        <img src={project.banner} alt={project.name} className="h-full object-contain w-80" />
      </header>

      {/* SECCIONES DE TEXTO */}
      <section className='flex flex-col m-10 lg:m-20 gap-20 justify-between items-center'>
        <article>
          <h3>Resumen</h3>
          <p>{project.resumen}</p>
        </article>

        <article>
          <h3>Hipótesis</h3>
          <p>{project.hipotesis}</p>
        </article>

        <article>
          <h3>Problemática</h3>
          <p>{project.problema}</p>
        </article>

        <article>
          <h3>Proceso de diseño</h3>
          <p>{project.proceso}</p>
        </article>
        <article>
          <h3>Resultados</h3>
          <p>{project.resultados}</p>
        </article>

      </section>

      {/* IMÁGENES DEL ARRAY */}
      <article className='flex  mb-20 items-left justify-center flex-wrap'>
        {project.img.map((imagen, index) => (
          <img key={index} src={imagen} alt={`${project.name} ${index + 1}`} className='w-[250px] object-contain' />
        ))}
      </article>


      <ReturnButton linkTo='/UXPortfolio' positionClass="bottom-10 left-10" textColor='blackbg' borderColor='blackbg' />
      
      <footer className='flex justify-around items-center px-20 p-2'>
        <h3>Liotta Ana Paula</h3>
        <p>liotta.a.p@gmail.com</p>
        <RedesButton/>
      </footer>
    </main>
  )
}

export default WorksItem