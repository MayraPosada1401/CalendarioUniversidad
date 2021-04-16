import React from 'react';
import '../Estilos/iniciosesion.css';

export default function Iniciarsesion() {

  return (
    <div className="ContenedorPrincipalPL">
      <body>

      <h2 className="TítuloPrincipalPL" >MI CALENDARIO ESTUDIANTIL</h2>

      <div className="ContenedorLogin">
        <div className="Tarjeta">
          <img src="https://i.aquarelle.com/16/images/produits/ramo-mondo-tulipanes-a-domicilio-250x250-31406.jpg"  class="card-img-top image-fluid" alt="Responsive image"/>
          <div className="card-body">
            <h5 className="card-title">Inicio Sesión</h5>

            <div class="">

              <div class="">
                <input type="text" class="form-control" placeholder="Usuario"/>
              </div>

              <div class="">
                <input type="text" class="form-control" placeholder="Contraseña"/>
              </div>
            </div>

            <a href="#" className="btn btn-danger">Ingresar</a>
          </div>
        </div>
      </div>
      
      </body>
    </div>
  );
} 