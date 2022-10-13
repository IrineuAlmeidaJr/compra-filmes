import { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { CarouselImg } from '../components/CarouselImg';
import { Footer } from '../components/Footer';

import { CarouselFilm } from '../components/CarouselFilm';
import { GridFilm } from '../components/GridFilm';
import { ModalCompra } from '../components/ModalCompra';

export function Home() {
    const [filtro, setFiltro] = useState('');
    const [estadoModal, setEstadoModal] = useState(false);
    const [filmeEscolhido, setFilmeEscolhido] = useState('false');
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    const [todosFilmes, setTodosFilmes] = useState([])
    const [top5, setTop5] = useState([])
    
    function carregarTodosFilmes() { 
        fetch("http://localhost:8080/api/produto/buscartodos?" +
        new URLSearchParams({
            filtro: filtro
        }))
        .then(response => {
            response.json().then(data => {
                setTodosFilmes(data)
                // console.log(data);                     
            })
        })         
    }

    function carregarTop5() {
        fetch("http://localhost:8080/api/produto/buscarmaisvendidos")
        .then(response => {
            response.json().then(data => {
                let aux = [];
                for(let i=0; i<5; i++) {
                    aux.push(data[i]);
                }                
                setTop5(aux)
                // console.log(data);                     
            })
        })
    }

    useEffect(() => {
        carregarTodosFilmes();
        carregarTop5();        
    },[])
    
    return (
        <div className="h-full w-full min-h-screen relative bg-netflix-black-700">            
            <Header
                usuario={usuario}
                setUsuario={setUsuario}
                setFiltro={setFiltro}
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
                    <CarouselImg />

                    <section className='text-white mt-4'>
                        <h3 className='text-base font-bold -mb-3'>Top 5</h3>
                        <CarouselFilm 
                            top5={top5}
                            estado={estadoModal}
                            setEstado={setEstadoModal}
                            setFilme = {setFilmeEscolhido}
                        />
                    </section>
                    
                    <section className='text-white mt-4 mb-4'>
                        <h3 className='text-base font-bold mb-2'>Filmes e Séries</h3>
                        <GridFilm 
                            listaFilmes={todosFilmes} 
                            estado={estadoModal}
                            setEstado={setEstadoModal}
                            setFilme = {setFilmeEscolhido}
                        />
                    </section>
                </article> 
            </main>
            <Footer />
            <ModalCompra 
                estado={estadoModal}
                setEstado={setEstadoModal}
                filme={filmeEscolhido}
            />  
        </div>
    )
}