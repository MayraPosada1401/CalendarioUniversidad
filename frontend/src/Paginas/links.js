import React from 'react';
import Header from '../Componentes/header'
import Links from '../Componentes/links'
import Footer from '../Componentes/footer'

export default function PaginaLinks() {
    return (
        <div className="Links">
            <Header/>
            <Links/>
            <Footer/>
        </div>
    );
}