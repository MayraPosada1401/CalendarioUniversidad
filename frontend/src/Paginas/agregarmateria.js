import React from 'react';
import Header from '../Componentes/header'
import AgregarMateria from '../Componentes/agregarmateria'
import Footer from '../Componentes/footer'

export default function PaginaAgregarMateria() {
    return (
        <div className="AgregarMateria">
            <Header/>
            <AgregarMateria/>
            <Footer/>
        </div>
    );
}