import { useState } from 'react';
import { useEffect } from 'react';

import { Footer } from "../components/Footer"
import { Header } from "../components/Header" 
import { GridExibicao } from '../components/GridExibicao';
import { ModalReproducao } from '../components/ModalReproducao';

export function MeusFilmes() {
    const [estadoModal, setEstadoModal] = useState(false);
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [listaFilmes, setListaFilmes] = useState([]);
    const [filmeEscolhido, setFilmeEscolhido] = useState('');

    function carregarTodosFilmes() {
        fetch('http://localhost:8080/api/compra/buscar?' +
        new URLSearchParams({
            id: usuario.id
        }))
        .then(response => {
            response.json().then(data => {
                setListaFilmes(data)                     
            })
        })   
    }

    useEffect(() => {
        carregarTodosFilmes()
    },[])

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

                <GridExibicao 
                    filmes={listaFilmes}
                    setEstado={setEstadoModal}
                    setFilme={setFilmeEscolhido}
                />  

                </article>
            </main>
            <Footer />
            <ModalReproducao 
                estado={estadoModal}
                setEstado={setEstadoModal}
                filme={filmeEscolhido}
            />
        </div>
    )
}