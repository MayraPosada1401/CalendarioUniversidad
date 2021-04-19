import React from 'react';
import Header from '../Componentes/header'
import NotasClase from '../Componentes/notasdeclase'
import Footer from '../Componentes/footer'

export default function PaginaNotasClase() {
    return (
        <div className="NotasDeClase">
            <Header/>
            <NotasClase/>
            <Footer/>
        </div>
    );
}