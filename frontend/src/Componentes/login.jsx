import React from 'react';
import '../Estilos/iniciosesion.css';
import logo from '../Imagenes/logo.png';
import security from '../Imagenes/security.png';
import user from '../Imagenes/user.png';

export default function Iniciarsesion() {

  return (
    <div className="ContenedorPrincipalPL">
      
      <div className="ContenedorLogo">
         <img src={logo} className="" id="edit" alt="..." />
      </div>

      <div className="ContenedorLogin">
        <div className="Tarjeta">

          <div className="tarjeta2">
            <h4 className="titulosecu-login">Ingresa a tu cuenta</h4>

            <form className="Contenedor-Camposinput">

              <label htmlFor="usernarme" className="titulosinputs">Usuario de Registro</label>

              <div className="margenes-form">
                <span className="input-group-text">
                  <img className="Tamañoiconologin" src={user} alt=""/>
                </span>
                <input type="text" className="form-control" placeholder="Usuario"/>
              </div>

              <label htmlFor="usernarme" className="titulosinputs">Contraseña de Registro</label>
              
              <div className="margenes-form">
                <span className="input-group-text">
                  <img className="Tamañoiconologin" src={security} alt=""/>
                </span>
                <input type="password" className="form-control" placeholder="Contraseña" name="clave"/>
              </div>

            </form>

            <div className="contenedorbotoningreso"><input className="btn botoningreso" type="submit" value="Ingresar"/></div>

            <br/>

            <h6 className="ultimotitulo-login">¿Eres nuevo? <a href=""> Registrate aquí</a></h6>
            

          </div>
        </div>
      </div>

      <br/>
      
      
    </div>
  );
} 