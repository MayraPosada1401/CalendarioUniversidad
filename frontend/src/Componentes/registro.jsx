import React from 'react';
import '../Estilos/loginyregistro.css';
import logo from '../Imagenes/logo.png';
import {Link} from 'react-router-dom';

export default function registro() {

  return (
    <div className="ContenedorPrincipalPL">

      <div className="ContenedorLogo">
        <img src={logo} className="" id="edit" alt="..." />
      </div>

      <div className="ContenedorLogin">
        <div className="Tarjeta2-registro-pr">

          <div className="tarjeta2">
            <h4 className="titulosecu-login">Registrate</h4>

            <form className="Contenedor-Camposinput">

              <label htmlFor="usernarme" className="titulosinputs">Usuario de Registro</label>
              <div className="margenes-form">
                <input type="text" className="form-control" placeholder="Usuario"/>
              </div>

              <label htmlFor="usernarme" className="titulosinputs">Correo Electronico</label>
              <div className="margenes-form">
                <input type="text" className="form-control" placeholder="camila@gmail.com"/>
              </div>

              <label htmlFor="usernarme" className="titulosinputs">Contraseña</label>
              <div className="margenes-form">
                <input type="password" className="form-control" placeholder="Contraseña"/>
              </div>

            </form>

            <Link to="/Inicio">
            <div className="contenedorbotoningreso"><input className="btn botoningreso" type="submit" value="Registrarse"/></div>
            </Link>

            <br/>

            <h6 className="ultimotitulo-login">¿Ya tienes tu cuenta? <Link to="/">Ingresa Aquí</Link></h6>
            

          </div>
        </div>
      </div>

      <br/>


    </div>
  );
} 