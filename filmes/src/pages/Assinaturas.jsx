import * as React from 'react';
import { useState } from 'react';

import { Card } from 'flowbite-react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ModalAssinatura } from '../components/ModalAssinatura';

export function Assinaturas() {
    const [estadoModal, setEstadoModal] = useState(false);
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

    const [valorAssinatura, setValorAssinatura] = useState('');

    // Fazer o Fetch API que irá trazer os valores das assinaturas

    function AssinarOuro() {
        setEstadoModal(true);
        setValorAssinatura('19.90');
        console.log(`Entrou ${usuario.nome} Assinar Ouro`);
        
    }

    function AssinarPrata() {
        setEstadoModal(true);
        setValorAssinatura('9.90');
        console.log(`Entrou ${usuario.nome} Assinar Prata`);
    }

    return(
        <div className="h-full w-full min-h-screen relative bg-netflix-black-700">
            
            <div className="pb-28">
                <Header
                    usuario = {usuario}
                    setUsuario = {setUsuario}
                />  

                <article 
                    className="
                        flex-1
                        justify-center
                        pt-28
                        px-10
                        md:px-16
                        lg:px-32
                        2xl:px-48"
                >

                    <h1 className='
                        mt-5
                        text-white 
                        text-lg
                        font-bold
                        uppercase'
                    >
                        Escolha seu plano e assista a tudo na Fipflix
                    </h1>

                    <div className=' 
                        mt-6
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        justify-items-center'
                    >

                        <div className="max-w-sm shadow-lg hover:shadow-netflix-red-300">
                            <Card>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                                Plano Prata 🥈 
                                </h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">
                                    R$
                                </span>
                                <span className="text-5xl font-extrabold tracking-tight">
                                    9,99
                                </span>
                                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                                    /mês
                                </span>
                                </div>
                                <ul
                                    role="list"
                                    className="my-7 space-y-5"
                                >
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            Smartphones e tablets
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            3 tela de cada vez
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            Top 5 semanal disponível 
                                        </span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Alta definição e tecnologia 4k
                                        </span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Baixar filmes
                                        </span>
                                    </li>
                                    <li className="flex space-x-3 line-through decoration-gray-500">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Todos conteúdos
                                        </span>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-lg bg-netflix-red-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-netflix-red-500 focus:outline-none focus:ring-4 focus:ring-red-200 dark:focus:bg-netflix-red-800"
                                    onClick={AssinarPrata}
                                >
                                    Assinar
                                </button>
                            </Card>
                        </div>

                        <div className="max-w-sm shadow-lg hover:shadow-netflix-red-300">
                            <Card>
                                <h5 className="mb-1 text-xl font-medium text-gray-500 dark:text-gray-400">
                                Plano Outro 🥇 
                                </h5>
                                <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">
                                    R$
                                </span>
                                <span className="text-5xl font-extrabold tracking-tight">
                                    19,99
                                </span>
                                <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                                    /mês
                                </span>
                                </div>
                                <ul
                                    role="list"
                                    className="my-7 space-y-5"
                                >
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            Smartphones e tablets
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            3 tela de cada vez
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                                            Top 5 semanal disponível 
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Alta definição e tecnologia 4k
                                        </span>
                                    </li>
                                    <li className="flex space-x-3">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Baixar filmes
                                        </span>
                                    </li>
                                    <li className="flex space-x-3 ">
                                        <svg
                                            className="h-5 w-5 shrink-0 text-netflix-red-300 dark:text-netflix-red-700"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                        </svg>
                                        <span className="text-base font-normal leading-tight text-gray-500">
                                            Todos conteúdos
                                        </span>
                                    </li>
                                </ul>
                                <button
                                    className="inline-flex w-full justify-center rounded-lg bg-netflix-red-300 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-netflix-red-500 focus:outline-none focus:ring-4 focus:ring-red-200 dark:focus:bg-netflix-red-800"
                                    onClick={AssinarOuro}
                                >
                                    Assinar
                                </button>
                            </Card>
                        </div>
                    </div>
                </article>                
            </div>  
            <Footer />  
            <ModalAssinatura
                estado={estadoModal}
                setEstado={setEstadoModal}
                valor={valorAssinatura}
                usuario={usuario}
            /> 
        </div>
    )
}