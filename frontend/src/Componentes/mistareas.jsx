import React from 'react';
import '../Estilos/mistareas.css';


export default function mistareas() {

  return (
    <div className="ContenedorPrincipalMisTareas">

      <div className="row contenedor-MisTareasform">

        <div className="col-md-4 order-md-2 mb-4">
          
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted pt-5">Añadir Tarea</span>
          </h4>
          
          <form>
            
            <div className="mb-3">
              <label for="">Título<span className="text-muted"></span></label>
              <input type="" className="form-control" id="" placeholder=""/>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Tarea 1</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Tarea 2</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Mes</label>
                <select className="custom-select d-block w-100" id="" required="">
                  <option value="">Seleccione</option>
                  <option>Enero</option>
                  <option>Febrero</option>
                  <option>Marzo</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">Día</label>
                <select className="custom-select d-block w-100" id="" required="">
                  <option value="">Seleccione</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <div className="col-md-3 mb-3">
                <label for="zip">Año</label>
                <input type="text" className="form-control" id="zip" placeholder="" required=""/>
              </div>
            </div>

          </form>

          <form className="card p-2 contenedor-boton-agretarea">
            <div className="input-group contenedor-boton-agretarea">
              <div className="input-group-append contenedor-boton-agretarea">
                <button type="submit" className="btn boton-guardartarea-pmt">Agregar Tarea</button>
              </div>
            </div>
          </form>
        </div>

       
        <div className="col-md-8 order-md-1">
          <div className="row margenes-cards-pmt my-5">

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 my-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <div className="mb-1 text-muted">Para: Septiembre 3</div>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="contenedor1boton-pmt">
                <a href="#" className="btn boton-pmt my-4">Tarea Hecha</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    
        </div>
      </div>
  
    </div>
  );
} 