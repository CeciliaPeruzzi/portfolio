import React from 'react';
import image from "../assets/images/IMG_1077.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Cecilia Peruzzi</h1>
          <h2>Desarrolladora Web Full Stack</h2>
          <p>¡Hola! Soy Cecilia, una desarrolladora web en constante búsqueda de aprendizaje y crecimiento. Mi enfoque es aprender de cada desafío y colaborar de manera efectiva en equipos..</p>
        </div>
        <div className="header-image">
          <img src= {image} alt="Cecilia Peruzzi" />
        </div>
      </div>
      <div className="header-buttons">
        <a href="https://www.linkedin.com/in/cecilia-peruzzi-8b9130294/" target="_blank" rel="noopener noreferrer">
            <button className ="button">
                <FontAwesomeIcon icon={faLinkedin} />
                <span>LinkedIn</span>
            </button>
        </a>
        <a href="https://github.com/CeciliaPeruzzi" target="_blank" rel="noopener noreferrer">
            <button>
                <FontAwesomeIcon icon={faGithub} />
                <span>GitHub</span>
            </button>
        </a>
        <a href="https://drive.google.com/file/d/1NGOEsi-RCfG-oDrlKmZsXlhQbkOpKAMG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>
                <FontAwesomeIcon icon={faCircleDown} />
                <span>Curriculum</span>
            </button>
        </a>
      </div>
    </header>
  );
};

export default Header;