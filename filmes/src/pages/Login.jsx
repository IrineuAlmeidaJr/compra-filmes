import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalRegister } from "../components/ModalRegister";

export function Login() {
    const [user, setUser] = useState({});
    const [estadoModal, setEstadoModal] = useState(false);
    const navigate = useNavigate();

    function register() {
        // Fazer o banco registrar
        console.log('ENTROU Regitrar');        
        setEstadoModal(true);
    }

    function handleSubmit(e) {
        // buscar do banco e ver se tem usuário com aquele email e se bate a senha
        e.preventDefault();
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;
        console.log(email + "  " + senha)
        if(email === 'irineu@hotmail.com' && senha === '123456')
            navigate("/home");
    }

    return (
        <div className="bg-netflix-black-700  h-screen">
            <div className="bg-bg-film bg-no-repeat bg-left-bottom bg-cover h-full flex flex-col justify-center items-center">
                <div className="bg-netflix-black-700 bg-opacity-95 w-[440px] flex-col p-5 rounded-md">
                    <h3 className="mt-2 mb-4 text-2xl text-white font-medium dark:text-white">
                        Log in
                    </h3>
                    <form className="space-y-6" action="#">
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
                            onClick={handleSubmit}
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