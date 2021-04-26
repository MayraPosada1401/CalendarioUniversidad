import React from 'react';
import '../Estilos/notasdeclase.css';
import {Link} from 'react-router-dom';

export default function notasdeclase() {

  return (
    <div className="ContenedorPrincipalNotasClase">

    <div className="row contenedor-NotasDeclaseform">

    <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Mis Materias y Apuntes</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <Link to="/MisMaterias-Apuntes"><h6 className="my-0">Cálculo</h6></Link>
                <small className="text-muted">Carlos</small>
              </div>
              <span className="text-muted">12 notas</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Cálculo</h6>
                <small className="text-muted">Carlos</small>
              </div>
              <span className="text-muted">12 notas</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Cálculo</h6>
                <small className="text-muted">Carlos</small>
              </div>
              <span className="text-muted">12 notas</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Cálculo</h6>
                <small className="text-muted">Carlos</small>
              </div>
              <span className="text-muted">12 notas</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Cálculo</h6>
                <small className="text-muted">Carlos</small>
              </div>
              <span className="text-muted">12 notas</span>
            </li>
          </ul>

          <form className="card p-2 centrarboton-nc">
            <div className="input-group centrarboton-nc">
              <div className="input-group-append centrarboton-nc">
                <button type="submit" className="btn colorbotonag-nc centrarboton-nc">Agregar Materia</button>
                <button type="submit" className="btn colorbotonag-nc centrarboton-nc">Eliminar Materia</button>
              </div>
            </div>
          </form>
        </div>

       
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Añadir Apuntes</h4>
          <form className="needs-validation" novalidate="">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="country">Materia</label>
                <select className="custom-select d-block w-100" id="country" required="">
                  <option value="">Seleccione</option>
                  <option>Cálculo</option>
                  <option>Matemáticas</option>
                </select>
                <div className="invalid-feedback">
                  Seleccione una materia
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Título</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                <div className="invalid-feedback">
                  Ingrese el título
                </div>
              </div>
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

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Nota 1</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Nota 2</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Nota 3</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className="mb-3">
              <label for="email">Links<span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="www.eafit.edu.co"/>
            </div>

            <div className="mb-3">
              <label for="email">Links<span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="www.eafit.edu.co"/>
            </div>

            <div className="mb-3">
              <label for="email">Links<span className="text-muted">(Optional)</span></label>
              <input type="email" className="form-control" id="email" placeholder="www.eafit.edu.co"/>
            </div>

            <hr className="mb-4"/>

            <div className="row">
              <div className="col-md-6 mb-3">
              <label for="country">Importancia</label>
                <select className="custom-select d-block w-100" id="" required="">
                  <option value="">Seleccione</option>
                  <option>Mucha</option>
                  <option>Media</option>
                  <option>Poca</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label for="cc-number">Profesor@</label>
                <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
              </div>
            </div>
            <button className="btn colorboton-pnt-guardar btn-lg btn-block" type="submit">Guardar Nota</button>
          </form>
        </div>
      </div>


    </div>
    );
}