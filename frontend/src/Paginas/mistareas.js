import React from 'react';
import Header from '../Componentes/header'
import MisTareas from '../Componentes/mistareas'
import Footer from '../Componentes/footer'

export default function PaginaMisTareas() {
    return (
        <div className="MisTareas">
            <Header/>
            <MisTareas/>
            <Footer/>
        </div>
    );
}