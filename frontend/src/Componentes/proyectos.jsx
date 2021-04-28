import React from 'react';
import '../Estilos/proyectos.css';
import {Link} from 'react-router-dom';

export default function proyectos() {

  return (
    <div className="ContenedorPrincipalProyectos">

        <div className="row mb-2 contenedorcards-pp-n">

          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 colortitulo1-proyectos-carsd-pp">Materia</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">Título Proyecto</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <p><a className="btn color-botoncards-ppn mt-4" data-toggle="modal" data-target="#staticBackdrop" href="#" role="button">View details »</a></p>
              </div>
              <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178f0914324%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178f0914324%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 colortitulo1-proyectos-carsd-pp">Materia</strong>
                <h3 className="mb-0">
                  <a className="text-dark" href="#">Título Proyecto</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <p><a className="btn color-botoncards-ppn mt-4" data-toggle="modal" data-target="#staticBackdrop" href="#" role="button">View details »</a></p>
              </div>
              <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_178f0914324%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_178f0914324%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.1953125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
            </div>
          </div>

        </div>

        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              
          <div className="modal-dialog centartodalatarjetanota-ppi my-4">

                <div className="modal-content">
                  
                  <div className="modal-header">
                    <h2 className="modal-title font-italic" id="staticBackdropLabel">Proyecto Economía Naranja</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  
                  <div className="mx-3 mt-2 text-muted"><h5>Materia: Funcionamiento Industrial Economico</h5></div>
                  
                  <div className="d-block">
                    <p className="text-muted mx-3">22/01/2022</p>
                  </div>

                  <div className="mx-3 mt-3">
                    <h5>Breve Descripción</h5>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi neque consequuntur pariatur quae ipsum totam eveniet fugit temporibus voluptatum accusantium earum provident, consectetur suscipit dignissimos eos corporis ab dicta incidunt?</p>
                    <h5>Descripción</h5>
                    <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, dicta explicabo ab illo doloribus aliquam nulla quisquam reiciendis nesciunt sapiente libero blanditiis iure labore deleniti culpa sed! Incidunt, aut aperiam!</p>
                    <h5>Items a Evaluar</h5>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolorum dignissimos reiciendis labore eveniet pariatur vel! Dolorem ipsa eveniet, libero unde praesentium laboriosam. Molestiae soluta rerum repudiandae rem, amet consequatur.</p>
                    <h5>Parametros del Trabajo</h5>
                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolorum dignissimos reiciendis labore eveniet pariatur vel! Dolorem ipsa eveniet, libero unde praesentium laboriosam. Molestiae soluta rerum repudiandae rem, amet consequatur.</p>
                  </div>
                  
                  <div className="modal-footer contenedorcolorboton3-ppyi">
                    <button type="button" className="btn colorboton3-ppyi" data-dismiss="modal">Cerrar</button>
                  </div>

                </div>

              </div>
            
            </div>


        <div className="Contenedorimagenesdes-pp">

          <br/>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5 centraimagen1-proyepp">
            <img className="featurette-image img-fluid mx-auto centraimagen1-proyepp" data-src="holder.js/500x500/auto"  src="https://educrea.cl/wp-content/uploads/2016/04/MISC-juego-1-250x250.png" data-holder-rendered="true"/>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-5 centraimagen1-proyepp">
              <img className="featurette-image img-fluid mx-auto centraimagen1-proyepp" data-src="holder.js/500x500/auto" src="https://www.messengerpeople.com/wp-content/uploads/2018/08/whatsapp-chatbot.png" data-holder-rendered="true"/>
            </div>
            <div className="col-md-7">
              <h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
              <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

        </div>

        <br/>

        <div className="row my-5 mx-5 contenedor-galeriaimg-ppyi">
   
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" 
            className="w-100 shadow-1-strong rounded mb-4" alt=""/>

            <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
            className="w-100 shadow-1-strong rounded mb-4" alt=""/>
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
            className="w-100 shadow-1-strong rounded mb-4" alt=""/>

            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
            className="w-100 shadow-1-strong rounded mb-4" alt=""/>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
            className="w-100 shadow-1-strong rounded mb-4"alt=""/>

            <img src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
            className="w-100 shadow-1-strong rounded mb-4" alt=""/>
          </div>

          <br/>
          
          <Link to="/FormularioImagenes-Proyectos" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <button className="btn colorboton-ppyi-form  btn-lg btn-block" type="submit">Añadir Imagen o Proyecto</button>
          </Link>

        </div>

    </div>
  );
} 