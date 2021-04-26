import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import iniciosesion from '../Paginas/iniciosesion';
import inicio from '../Paginas/inicio';
import notasclase from '../Paginas/notasdeclase';
import mistareas from '../Paginas/mistareas';
import links from '../Paginas/links';
import proyectos from '../Paginas/proyectos';
import formularioPyI from '../Paginas/formularioproyects-img';
import mismaterias from '../Paginas/mismaterias';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={iniciosesion} />
          <Route exact path="/Inicio" component={inicio} />
          <Route exact path="/NotasClase" component={notasclase} />
          <Route exact path="/MisMaterias-Apuntes" component={mismaterias} />
          <Route exact path="/MisTareas" component={mistareas} />
          <Route exact path="/Links" component={links} />
          <Route exact path="/Proyectos" component={proyectos} />
          <Route exact path="/FormularioImagenes-Proyectos" component={formularioPyI} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}