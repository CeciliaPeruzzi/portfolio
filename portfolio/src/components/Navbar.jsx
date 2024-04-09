import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/tecnologias">Tecnologías</Link>
      <Link to="/sobremi">Sobre mí</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;