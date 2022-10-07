import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Avatar } from 'flowbite-react';
import { CarouselImg } from '../components/CarouselImg';
import { Footer } from '../components/Footer';
import { CarouselFilm } from '../components/CarouselFilm';
import { GridFilm } from '../components/GridFilm';

import { ModalCompra } from '../components/ModalCompra';

export function Home() {
    const [estadoModal, setEstadoModal] = useState(false);
    const [filmeEscolhido, setFilmeEscolhido] = useState('false');
    const [imgProfile, setImgProfile] = useState('https://media-exp1.licdn.com/dms/image/D5603AQEcBYgVMY8izQ/profile-displayphoto-shrink_400_400/0/1665026444474?e=1670457600&v=beta&t=vRu_FuUGdsupQ6ofJKl3zoz2jHmWZM6fx_igcekZvXk')
    const [top5, setTop5] = useState([
        {id:1, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', nome: 'Boneca Russa'},
        {id:2, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', nome: 'EDtv'},
        {id:3, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', nome: 'Gabriel'},
        {id:4, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
        {id:5, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'},
    ])
    const [todosFilmes, setTodosFilmes] = useState([
        {id:111, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', nome: 'Boneca Russa'},
        {id:222, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', nome: 'EDtv'},
        {id:333, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', nome: 'Gabriel'},
        {id:444, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
        {id:555, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'},
        {id:6, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABZEK-7pZ1H5FD4cTyUb9qB_KeyJGz5p-kfPhCFv4GU_3mbdm8Xfsy4IBchlG9PFNdGff8cBNPaeMra72VFnot41nt0y3e8RLgaVwwh3UvyM2H2_MkmadWbQUeGuf811K7-cxJJh7gA.jpg', nome: 'Boneca Russa'},
        {id:7, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABQCoK53qihwVPLRxPEDX98nyYpGbxgi5cc0ZOM4iHQu7KQvtgNyaNM5PsgI0vy5g3rLPZdjGCFr1EggrCPXpL77p2H08jV0tNEmIfs_e8KUfvBJ6Ay5nM4UM1dl-58xA6t1swmautOM.webp', nome: 'EDtv'},
        {id:8, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABbcCX42tsqGbBvO2y9CQv5-7QvYbCfoHtXsuc6NPCtZaKa4l4fBX3XWvUwG9F2A3CTsNpHVmulxBbdXKwK8Q6xGjejd9FoadGkZ7CnGrSl601TOQjzSHJ23NuIPC8j0QMGORL4uRIA.jpg', nome: 'Gabriel'},
        {id:9, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
        {id:10, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'},
        {id:11, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABVopDZ5Fy9_fk_HO5WxHTXKKjKhtWFupbSjuvPwfLK_vytzon4EwRUdGgYJ34JwPxOTK_NkV3aXfkULMB0Dcct-FyfqzH-X44VXuRMp4QeBHlvKwWeZFpZlGdItPzmmg4scmwhG7SQ.jpg', nome: 'Polar'},
        {id:12, comprar: 12.50, alugar: 2.50, image: 'https://occ-0-243-299.1.nflxso.net/dnm/api/v5/rendition/a76057bcfd003711a76fb3985b1f2cf74beee3b8/AAAABd3IBDpxbRcHXvRMFCZeKa2aHLU1P4SJtrACMS9om3yhLjqPlvNlmR_fypPxjtbsbnKaC4JZhPSpDG4r_kdxSHHAltWguMcCB-1Y1OShr2zWfUv7Whf_39fNH5ZJ3_0gxQrs0akmQjQz44_LT7jXH5LMZ7iMBAzac5IEj4m7Fn_5OWEGYnVsDsKG-QTommDooULMDF9bEw.jpg', nome: 'Amigos de Colegio'}
    ])    

    return (
        <div className="h-screen bg-netflix-black-700 absolute w-full">
            
            <header
                className="
                fixed 
                font-bold
                bg-netflix-black-600
                bg-opacity-95
                border-b-2
                border-gray-800
                max-h-[90px]
                min-h-[90px]
                w-full
                h-full
                z-40
                pt-4
                px-10
                md:px-16
                lg:px-32
                2xl:px-48                
                grid
                gap-1
                grid-cols-[1fr,3fr,4fr,0fr,1fr]
                items-center
                justify-center"
            >
                <div className="text-white">
                    <a id="logo" href="#home">
                        <img src="/src/public/assets/logo.png" alt="Logo Image" 
                        className='max-h-[80px] min-h-[80px]'/>
                    </a>
                </div>      
                <nav className="
                    text-white
                    flex
                    flex-1
                    justify-between
                    items-center
                ">                
                    <a href="#home">Início</a>
                    <a target="_blank" href="">Planos</a>  
                    <a href="#movies">Meus Filmes</a>      
                </nav>
                <nav 
                    className="
                    ml-14
                    mr-2
                    text-white
                    justify-center
                    items-center"
                >
                    <form>   
                        <label 
                            htmlFor="search" 
                            className="
                            flex-1
                            mb-2 
                            text-sm 
                            font-medium 
                            text-gray-900 
                            sr-only 
                            dark:text-gray-300"
                        >
                                Digite filme
                        </label>
                        <div className="relative">
                            <div className="
                                flex 
                                flex-1
                                absolute 
                                inset-y-0 
                                left-0 
                                items-center 
                                pl-3 
                                pointer-events-none"
                            >
                                <svg 
                                    aria-hidden="true" 
                                    className="
                                    w-5 
                                    h-5 
                                    text-gray-500 
                                    dark:text-gray-400" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input 
                                type="search" 
                                id="search" 
                                className="
                                    block 
                                    p-4
                                    pl-10
                                    w-full 
                                    text-sm
                                    text-gray-900 
                                    bg-gray-50 
                                    rounded-lg 
                                    border 
                                    border-gray-300 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="Filme ou série..." 
                                required 
                            />
                            <button 
                                type="submit" 
                                className="
                                    text-white 
                                    absolute 
                                    right-2.5 
                                    bottom-2.5 
                                    bg-netflix-red-300
                                    hover:bg-netflix-red-500
                                    focus:ring-4 
                                    focus:outline-none 
                                    focus:ring-blue-300 
                                    font-medium 
                                    rounded-lg 
                                    text-sm 
                                    px-4 
                                    py-2 
                                    dark:bg-netflix-red-300
                                    dark:hover:bg-netflix-red-500
                                    dark:focus:bg-netflix-red-700">
                                        Buscar
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                        </div>
                    </form>
                </nav> 
                <img
                    className="
                        col-start-5 col-end-5
                        h-[54px]
                        rounded-md"
                    src={imgProfile}
                />     
            </header>
            
            <article 
                className="
                    pt-28
                    px-10
                    md:px-16
                    lg:px-32
                    2xl:px-48"
            >
                <CarouselImg />

                <div className='text-white mt-4'>
                    <h3 className='text-base font-bold -mb-3'>Top 5</h3>
                    <CarouselFilm top5={top5}/>
                </div>
                
                <div className='text-white mt-4 mb-4'>
                    <h3 className='text-base font-bold mb-2'>Filmes e Séries</h3>
                    <GridFilm 
                        listaFilmes={todosFilmes} 
                        estado={estadoModal}
                        setEstado={setEstadoModal}
                        setFilme = {setFilmeEscolhido}
                    />
                </div>

                

            </article>    

            
            <Footer />
            
            <ModalCompra 
                estado={estadoModal}
                setEstado={setEstadoModal}
                filme={filmeEscolhido}
            />  
            
        </div>
    )
}