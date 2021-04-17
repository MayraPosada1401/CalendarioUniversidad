import React from 'react';
import '../Estilos/footer.css';
import apuntes from '../Imagenes/apuntesf.jpg';
import calendario from '../Imagenes/calendariof.png';
import estudio from '../Imagenes/estudiof.jpg';
import mesa from '../Imagenes/mesaf.jpg';

export default function Iniciarsesion() {

  return (
    <div className="ContenedorPrincipalFooter">
        <br/>

        <div className="contenedor2footer">

            <div>
              <p>Mi calendario Académico y Rutinario</p>
              <p>Uso Exclusivo</p>
              &copy; 2021 Diseñado por Mayra Posada
            </div>

            <div className="contenedorgaleriaimg">
                <img className="tamañoimgfooter" src={apuntes} alt=""/>
                <img className="tamañoimgfooter" src={calendario} alt=""/>
                <img className="tamañoimgfooter" src={estudio} alt=""/>
                <img className="tamañoimgfooter" src={mesa} alt=""/>
            </div>

        </div>
        

    </div>
  );
} 