import React from 'react';
import '../Estilos/formularioproyects-img.css';
import boton1 from '../Imagenes/botondes1.png';
import boton2 from '../Imagenes/botondes2.png';


export default function formularioproyectsimg() {

  return (
    <div className="ContenedorPrincipalFormularioProyecImg">

      <div className="row contenedor-FormPr-fpyi">

        <div className="col-md-3 order-md-2 mb-4">

          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Seleccionar Imagen</span>
          </h4>

          <div className="centrarelcotonfoto-pfpi">

          <button className="boton-subirimg-pfpi mt-4">
            <img src={boton1} className="botonimg-subir-pfip" alt=""/>
          </button>

          </div>
          
        </div>
   
        <div className="col-md-8 order-md-1 medidadelmarginleft-pfpi">
          
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

          <button className="btn colorbotonsubmit-pfpi btn-lg btn-block" type="submit">Guardar Imagen y Nota</button> 

          <hr className="mb-4"/>

        </div>
      
      </div>

      <div className="centrarbotonfoto2-pfpi my-5">

        <h4 className="pb-4 titulo2-form-ppipf">Añadir Imagen</h4>

        <button className="boton2fotosubir-pfpi">
          <img src={boton2} className="tamañoimagen2subir-fpip py-3" alt=""/>
        </button>

        <button className="btn colorbotonsubmit-pfpi btn-lg btn-block my-3" type="submit">Guardar Imagen</button> 

        <hr className="mb-4"/>

      </div>

      <div className="Contenedor3formularioproyect-pfpi">

        <h4 className="pb-4 titulo2-form-ppipf">Añadir Proyecto</h4>

        <form className="needs-validation" novalidate="">
          
          <div className="mb-3">
            <label for="">Título<span className="text-muted"></span></label>
            <input type="" className="form-control" id=""/>
          </div>

          <div className="mb-3">
            <label for="">Materia<span className="text-muted"></span></label>
            <input type="" className="form-control" id=""/>
          </div>

          <div className="mb-3">
            <label for="date" className="form-label">Example date </label>
            <input type="date" className="form-control" id="date"/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Breve Descripción</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Descripción y cosas a tener en cuenta</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Items de Evaluación</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Parametros e instrucciones</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
          </div>
          
            
        </form>

        <button className="btn colorbotonsubmit-pfpi btn-lg btn-block my-3" type="submit">Guardar Proyecto</button> 

      </div>

    </div>
    );
}