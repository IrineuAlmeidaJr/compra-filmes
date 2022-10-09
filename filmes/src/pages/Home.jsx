import { useState, useEffect } from 'react';

import { Header } from '../components/Header';
import { CarouselImg } from '../components/CarouselImg';
import { Footer } from '../components/Footer';

import { CarouselFilm } from '../components/CarouselFilm';
import { GridFilm } from '../components/GridFilm';
import { ModalCompra } from '../components/ModalCompra';

export function Home() {
    const [estadoModal, setEstadoModal] = useState(false);
    const [filmeEscolhido, setFilmeEscolhido] = useState('false');
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
    // const [usuario, setUsuario] = useState({id:1, nome:'Leo', assinatura: 0, image:'https://media-exp1.licdn.com/dms/image/D5603AQEcBYgVMY8izQ/profile-displayphoto-shrink_400_400/0/1665026444474?e=1670457600&v=beta&t=vRu_FuUGdsupQ6ofJKl3zoz2jHmWZM6fx_igcekZvXk'})
    // const [top5, setTop5] = useState([
    //     {id:1, foto: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', titulo: 'Boneca Russa'},
    //     {id:2, foto: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', titulo: 'EDtv'},
    //     {id:3, foto: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', titulo: 'Gabriel'},
    //     {id:4, foto: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', titulo: 'Polar'},
    //     {id:5, foto: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', titulo: 'Amigos de Colegio'},
    // ])
    // const [todosFilmes, setTodosFilmes] = useState([
    //     {id:111, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', nome: 'Boneca Russa'},
    //     {id:222, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', nome: 'EDtv'},
    //     {id:333, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', nome: 'Gabriel'},
    //     {id:444, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
    //     {id:555, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'},
    //     {id:6, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', nome: 'Boneca Russa'},
    //     {id:7, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', nome: 'EDtv'},
    //     {id:8, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', nome: 'Gabriel'},
    //     {id:9, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
    //     {id:10, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'},
    //     {id:11, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
    //     {id:12, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'}
    // ])

    const [todosFilmes, setTodosFilmes] = useState([])
    const [top5, setTop5] = useState([])
    
    function carregarTodosFilmes() { 
        fetch("http://localhost:8080/api/produto/buscartodos?filtro")
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