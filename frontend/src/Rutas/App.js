import React from 'react';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import iniciosesion from '../Paginas/iniciosesion';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
          <Route exact path="/" component={iniciosesion} />
      </Switch>    

      </BrowserRouter>
    </div>
  );
}