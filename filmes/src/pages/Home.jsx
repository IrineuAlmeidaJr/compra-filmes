import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export function Home() {

    return (
        <div className=" bg-netflix-black-700 h-screen">
            <header
                className="
                bg-netflix-black-600
                w-full
                p-5 
                pb-2
                fixed
                grid
                gap-1
                grid-cols-[1fr,2fr,3fr]                  
                "
            >
            <div className="text-white">
                <a id="logo" href="#home">
                    <img src="" alt="Logo Image" />
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
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
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
                            placeholder="Insira nome filme ou série..." 
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
                </form>
            </nav>      
            </header>
        </div>
    )
}