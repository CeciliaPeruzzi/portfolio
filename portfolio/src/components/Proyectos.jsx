import React from 'react'
import imagen1 from '../assets/images/patagonic.png'
import imagen2 from '../assets/images/urlshortner.png'
import imagen3 from '../assets/images/carrito.png'


function Proyectos() {

  const proyectos = [
    {
      id: 1,
      titulo: 'Patagonic',
      descripcion: 'Desarrollo de una página web fullstack a través de un proyecto integrador de 8 sprints trabajando de forma grupal',
      skills: 'JavaScript / NodeJS / Express.js / MySQL / HTML / CSS',
      imagen: imagen1,
      enlace: 'https://patagonic-ew96.onrender.com/',
    },
    {
      id: 2,
      titulo: 'Acortador de links',
      descripcion: 'Aca va la descripcion de la pagina de digital house, con todas las tecnologias que utilice, etc.',
      skills: 'JavaScript / NodeJS / Express.js / MongooDB / HTML / CSS',
      imagen: imagen2,
      enlace: 'https://urlshortener-20u9.onrender.com/',
    },
    {
      id: 3,
      titulo: 'extension visual',
      descripcion: 'Aca va la descripcion de la pagina de zeta, con todas las tecnologias que utilice, etc.',
      skills: 'JavaScript / NodeJS / ExpressJS / MySQL / HTML / CSS',
      imagen: imagen3,
      enlace: 'enlace del proyecto3',
    }
  ]
    return (
    <div className="proyectos-container">
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