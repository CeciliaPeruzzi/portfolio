import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      <Switch>
          {/*<Route path="/" exact= {true} component={Proyectos}/>*/}
          {/*<Route path="/" exact= {true} component={Tecnologias}/>*/}
          {/*<Route path="/" exact= {true} component={SobreMi}/>*/}
          
      </Switch>
      <Header />
      <Proyectos/>
      <Tecnologias/>
      <SobreMi/>
      <Footer/>
      
    </Router>
  );
}

export default App;
