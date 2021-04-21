import React from 'react';
import '../Estilos/formularioproyects-img.css';

export default function formularioproyectsimg() {

  return (
    <div className="ContenedorPrincipalFormularioProyecImg">

      <div className="row contenedor-FormPr-fpyi">

        <div className="col-md-4 order-md-2 mb-4">

          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Seleccionar Imagen</span>
          </h4>

          <div className="centrarelcotonfoto-pfpi">

          <button className="boton-subirimg-pfpi mt-4">
            <img src="https://www.incubaweb.com/wp-content/uploads/2016/09/upload-696x696.png" className="botonimg-subir-pfip" alt=""/>
          </button>

          </div>
          

        </div>
   
        <div className="col-md-8 order-md-1">
          
          <h4 className="mb-3">Añadir Imagen y Nota</h4>
          <form className="needs-validation" novalidate="">
            <div className="mb-3">
              <label for="">Título<span className="text-muted"></span></label>
              <input type="" className="form-control" id=""/>
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
              <label for="exampleFormControlTextarea1" className="form-label">Breve Descripción</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            
          </form>

          <button className="btn colorbotonsubmit-pfpi btn-lg btn-block" type="submit">Guardar Nota</button> 

        </div>
      
      </div>

      <hr className="mb-4 mx-5"/>

    </div>
    );
}