import React from 'react';
import Header from '../Componentes/header'
import Proyectos from '../Componentes/proyectos'
import Footer from '../Componentes/footer'

export default function PaginaProyectos() {
    return (
        <div className="Proyectos">
            <Header/>
            <Proyectos/>
            <Footer/>
        </div>
    );
}