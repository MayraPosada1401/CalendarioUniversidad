import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import iniciosesion from '../Paginas/iniciosesion';
import inicio from '../Paginas/inicio';
import notasclase from '../Paginas/notasdeclase'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={iniciosesion} />
          <Route exact path="/Inicio" component={inicio} />
          <Route exact path="/NotasClase" component={notasclase} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}