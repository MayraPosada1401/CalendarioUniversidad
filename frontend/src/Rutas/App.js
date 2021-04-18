import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import iniciosesion from '../Paginas/iniciosesion';
import inicio from '../Paginas/inicio'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={inicio} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}