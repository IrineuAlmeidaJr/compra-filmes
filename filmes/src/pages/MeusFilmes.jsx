import * as React from 'react';
import { useState } from 'react';

import { Footer } from "../components/Footer"
import { Header } from "../components/Header" 

export function MeusFilmes() {
    const [estadoModal, setEstadoModal] = useState(false);
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    return (
        <div>
            <Header 
                usuario = {usuario}
                setUsuario = {setUsuario} 
            />
            {/* CONTINUAR */}
            <Footer />
        </div>
    )
}