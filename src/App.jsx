import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import SobreMi from './components/SobreMi';
import Footer from './components/Footer';

import './assets/css/styles.css'

function App() {
  return (
    
    <Router>
      
      <Navbar />
      <Header />
      <Proyectos/>
      <Tecnologias/>
      <SobreMi/>
      <Footer/>
      
    </Router>
  );
}

export default App;

/* cuyo traidng integrado

import Navbar from "../../components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";
import nosotrosImg from "@/images/fumigador.png";
import "@/css/nosotros.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <main>
      <section id="nosotros" className="nosotros-section">
        <div className="nosotros-container">
            
            <div className="nosotros-img">
            <Image src={nosotrosImg} alt="Sobre nosotros" width={500} height={400}/>
            </div>

            
            <div className="nosotros-texto">
            <p>Somos una empresa joven y pujante, fundada en 2022, con foco en la Calidad.
            Nuestra División de <b>Saneamiento Ambiental</b> ofrece Productos y Servicios para Industrias, Comercios y Hogares a gran parte de la provincia de San Juan.
            Contamos con un gran equipo de profesionales y técnicos que nos apoyan en el Área de Manejo Integrado de Plagas; el Área de Seguridad, dedicada a la Venta, Mantenimiento, 
            y Recarga de Extintores; Instalación de redes de incendio; Venta de productos químicos. </p>
            </div>
        </div>
        </section>

        <section id="servicios">
          <h1>Servicios</h1>
          <p>Descripción de los servicios.</p>
        </section>
        <section id="contacto">
          <h1>Contacto</h1>
          <p>Cómo contactarnos.</p>
        </section>
      </main>
    </>
  );
}*/