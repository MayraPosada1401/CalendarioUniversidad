import React from 'react';
import Header from '../Componentes/header'
import MisMaterias from '../Componentes/mismaterias'
import Footer from '../Componentes/footer'

export default function PaginaMisMaterias() {
    return (
        <div className="MisMaterias">
            <Header/>
            <MisMaterias/>
            <Footer/>
        </div>
    );
}