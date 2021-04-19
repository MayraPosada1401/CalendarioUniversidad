import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import iniciosesion from '../Paginas/iniciosesion';
import inicio from '../Paginas/inicio';
import notasclase from '../Paginas/notasdeclase';
import mistareas from '../Paginas/mistareas'


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={iniciosesion} />
          <Route exact path="/Inicio" component={inicio} />
          <Route exact path="/NotasClase" component={notasclase} />
          <Route exact path="/MisTareas" component={mistareas} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}