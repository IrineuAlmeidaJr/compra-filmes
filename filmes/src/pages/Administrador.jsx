import { useState } from 'react';
import { useEffect } from 'react';

import { Footer } from "../components/Footer"
import { Header } from "../components/Header" 
import { GridExibicao } from '../components/GridExibicao';
import { ModalReproducao } from '../components/ModalReproducao';

export function Administrador() {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    return (
        <div className="h-full w-full min-h-screen relative bg-netflix-black-700">
            <Header 
                usuario = {usuario}
                setUsuario = {setUsuario} 
            />
            <main className="pb-28"> 
                <article
                    className="
                    flex-1
                    pt-28
                    px-10
                    md:px-16
                    lg:px-32
                    2xl:px-48"
                >

                {/* 
                    Aqui pode fazer a parte do ADM, ai depois se necessário criar 
                    novas páginas.
                */} 

                </article>
            </main>
            <Footer />
            {/* <ModalReproducao 
                estado={estadoModal}
                setEstado={setEstadoModal}
                filme={filmeEscolhido}
            /> */}
        </div>
    )
}