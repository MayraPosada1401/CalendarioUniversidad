import React from 'react';
import '../Estilos/agregarmateria.css';

export default function agregarmateria() {

  return (
    <div className="ContenedorAgregarMateria mx-3">

        <div className="col-md-8 order-md-1 margenesform5-pam my-5">
          <h4 className="mb-3 pt-5">Añadir Materia</h4>
          <form className="needs-validation" novalidate="">

            <div className="mb-3">
              <label for="">Materia</label>
              <input type="" className="form-control" placeholder=""/>
            </div>
            
            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label for="lastName">Profesor</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
              </div>
              
              <div className="col-md-6 mb-3">
                <label for="lastName">Universidad</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
              </div>

            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Descripción 1</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Descripción 2 <span className="text-muted">(Opcional)</span></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Descripción 3 <span className="text-muted">(Opcional)</span></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>

            <hr className="mb-4"/>

            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Horario</span>
            </h4>

            <h6 className="py-2 font-italic">Lunes</h6>

            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Hora 1<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Hora 2<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

            </div>

            <h6 className="py-2 font-italic">Martes</h6>

            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Hora 1<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Hora 2<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

            </div>

            <h6 className="py-2 font-italic">Miercoles</h6>

            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Hora 1<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Hora 2<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

            </div>

            <h6 className="py-2 font-italic">Jueves</h6>

            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Hora 1<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Hora 2<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

            </div>

            <h6 className="py-2 font-italic">Viernes</h6>

            <div className="row">
              
              <div className="col-md-6 mb-3">
                <label>Hora 1<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Hora 2<span className="text-muted"> (Opcional)</span></label>
                <input className="form-control" type="time"/>
              </div>

              <button className="btn colorbotonform-pam my-4 btn-lg btn-block mx-3" type="submit">Guardar Materia</button>

            </div>
            
          </form>
        </div>

    </div>
  );
} 