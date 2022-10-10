import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalRegister } from "../components/ModalRegister";

import swal from 'sweetalert';

export function Login() {
    // const [user, setUser] = useState({id:1, tioo:1, nome:'Irineu', image: 'https://github.com/IrineuAlmeidaJr.png'});
    const [estadoModal, setEstadoModal] = useState(false);
    const navigate = useNavigate();

    function register() {
        // Fazer o banco registrar
        console.log('ENTROU Regitrar');        
        setEstadoModal(true);
    }

    async function handleSubmit(e) {
        // buscar do banco e ver se tem usuário com aquele email e se bate a senha
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;


        await fetch('http://localhost:8080/api/usuario/buscarativos?' +
        new URLSearchParams({
            filtro: email
        }))
        .then(response => {
            response.json().then(data => {
                console.log(data); 
                if(data.length == 1 && email === data[0].email && senha === data[0].senha) {
                    localStorage.clear();
                    data[0].senha = ''
                    localStorage.setItem("usuario", JSON.stringify(data[0]));
                    if(data[0].nivel === 1) {
                        navigate("/administrador");
                    } else {
                        navigate("/home");   
                    }                             
                } else {
                    swal({
                        title: "Erro!",
                        text: "Verifique o usuario e a senha",
                        icon: "error",
                        button: "Finalizar",
                        dangerMode: true,
                    })  
                    .then(() => {
                        handleClose(); 
                        navigate("/home");
                    });
                }                    
            })
        }) 
        
    }

    return (
        <div className="bg-netflix-black-700  h-screen">
            <div className="bg-bg-film bg-no-repeat bg-left-bottom bg-cover h-full flex flex-col justify-center items-center">
                <div className="bg-netflix-black-700 bg-opacity-95 w-[440px] flex-col p-5 rounded-md">
                    <h3 className="mt-2 mb-4 text-2xl text-white font-medium dark:text-white">
                        Log in
                    </h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                                    Email
                            </label>
                            <input 
                                type="email" 
                                name="email" id="email" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300
                                    text-gray-900 
                                    text-sm 
                                    rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    w-full 
                                    p-2.5 
                                    dark:bg-gray-600 
                                    dark:border-gray-500 
                                    dark:placeholder-gray-400 
                                    dark:text-white" 
                                placeholder="contato@filmes.com" 
                                required 
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="password" 
                                className="
                                    block 
                                    mb-2 
                                    text-sm 
                                    font-medium 
                                    text-white 
                                    dark:text-gray-300"
                            >
                                    Senha
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="••••••••" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm 
                                    rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    w-full 
                                    p-2.5 
                                    dark:bg-gray-600 
                                    dark:border-gray-500 
                                    dark:placeholder-gray-400 
                                    dark:text-white" 
                                required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="
                                w-full 
                                text-white 
                                bg-netflix-red-300
                                hover:bg-netflix-red-700
                                focus:ring-4 
                                focus:outline-none 
                                focus:bg-netflix-red-100
                                font-medium 
                                rounded-lg 
                                text-sm 
                                px-5 
                                py-2.5 
                                text-center 
                                dark:bg-netflix-red-500
                                dark:hover:bg-netflix-red-700 
                                dark:focus:bg-netflix-red-800"
                        >
                                Entrar
                            </button>
                        
                    </form>
                    <div 
                        className="
                            mt-3
                            text-sm 
                            font-medium 
                            text-white
                            dark:text-gray-300"
                    >
                        Ainda não tem conta? 
                        <button  
                            href="#" 
                            className="
                                font-bold
                                ml-2
                                text-blue-700 
                                hover:underline 
                                dark:text-blue-500"
                            onClick={register}
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>               
            </div>

            <ModalRegister 
                estado={estadoModal}
                setEstado={setEstadoModal}
            />  

        </div>
    )
}