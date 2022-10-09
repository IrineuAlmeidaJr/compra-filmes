import { useState } from 'react';
import { Checkout } from '../components/Checkout';

import { Footer } from "../components/Footer"
import { Header } from "../components/Header" 

export function Pagamento(props) {
    const [estadoModal, setEstadoModal] = useState(false);
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [filme, setFilme] = useState(JSON.parse(localStorage.getItem("filme")));

    return (
        <div className="h-full w-full min-h-screen relative bg-netflix-black-700">
            <Header 
                usuario = {usuario}
                setUsuario = {setUsuario} 
            />
            <main className="pb-16"> 
                <article
                    className="
                    flex-1
                    pt-16
                    md:px-16
                    lg:px-32
                    2xl:px-48"
                >
                    
                    <Checkout filme={filme} />               

                </article>
            </main>
            <Footer />
           

        </div>
    )
}