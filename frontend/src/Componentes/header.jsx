import React from 'react';
import '../Estilos/header.css';
import {Link} from 'react-router-dom';

export default function header() {

  return (
    <div className="ContenedorPrincipalHeader">

      <nav className="navbar navbar-expand-md navbar-dark fixed-top fondo-navbar">
        <a className="navbar-brand text-dark" href="#"><strong>Mi Calendario</strong></a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto colorletra-items">
            <li className="nav-item">
              <Link to= "/NotasClase"  className="nav-link text-dark" href="#">Notas de Clases</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Tareas Pendientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Links importantes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Proyectos</a>
            </li>
          </ul>
          <form className=" mt-2 mt-md-0 contenedorbotonsalir">
            <Link to="/">
            <button className="btn my-2 my-sm-0 botonsalir" type="submit">Cerrar Sesión</button>
            </Link>
          </form>
        </div>
      </nav>

      <div id="carouselExampleCaptions" className="carousel slide mt-5" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2" class="active"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active imagenes-carrusel1"></div>

        <div className="carousel-item imagenes-carrusel2"></div>

        <div className="carousel-item imagenes-carrusel3"></div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> 

    </div>
  );
} 