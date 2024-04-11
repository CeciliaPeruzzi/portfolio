import React from 'react'
import imagen1 from '../assets/images/patagonic.png'
import imagen2 from '../assets/images/urlshortner.png'



function Proyectos() {

  const proyectos = [
    {
      id: 1,
      titulo: 'Patagonic',
      descripcion: 'Desarrollo de una página web a través de un proyecto de 8 sprints trabajando de forma grupal. A través de las tecnologías empleadas, el resultado es un sitio intuitivo para el usuario.',
      skills: 'JavaScript / NodeJS / Express.js / MySQL',
      imagen: imagen1,
      enlace: 'https://patagonic-ew96.onrender.com/',
    },
    {
      id: 2,
      titulo: 'Acortador de links',
      descripcion: 'Este sitio está creado para optimizar el trabajo de los usuarios a la hora de incorporar links. Mejora la usabilidad, la accesibilidad y ahorro de espacio de los enlaces en cualquier plataforma que se desee.',
      skills: 'JavaScript / NodeJS / Express.js / MongooDB',
      imagen: imagen2,
      enlace: 'https://urlshortener-20u9.onrender.com/',
    },
    
  ]
    return (
    <div className="proyectos-container" id= "proyectos">
      <h1>Proyectos</h1>
      <div className='proyectos'>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} className='proyecto-card'>
          <img src={proyecto.imagen} alt={proyecto.titulo} />
          <h3>{proyecto.titulo}</h3>
          <p className='descripcion'>{proyecto.descripcion}</p>
          <p className='skills'>{proyecto.skills}</p>
          <a href={proyecto.enlace} target='_blanck' rel='noopener nonreferrer'>
            Ver Proyecto
          </a>
        </div>  
      ))}
      </div>
    </div>
    )
      }

export default Proyectos;