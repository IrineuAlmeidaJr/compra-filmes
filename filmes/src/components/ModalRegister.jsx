import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';


import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px'
};

export function ModalRegister(props) {

    const [cadastrarUsuario, setCadastrarUsuario] = useState('')
    
    const handleClose = () => props.setEstado(false);


    return (
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/*  
                     * * * ATEÇÃO * * *
                    Depois estudar como fazer aqui o event.preventDefault() 
                */}
                <Box sx={style} className="bg-netflix-black-700 bg-opacity-90">                
                    <form>
                        <h3 className="mb-4 text-2xl text-white font-medium dark:text-white">
                            Cadastro
                        </h3>
                        <div className="mb-6">
                            <label 
                                htmlFor="first_name" 
                                className="
                                    block 
                                    mb-2 
                                    text-sm 
                                    font-medium 
                                    text-white
                                    dark:text-gray-300"
                            >
                                Nome completo
                            </label>
                            <input 
                                type="text" 
                                id="first_name" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    w-full 
                                    p-2.5 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="John" 
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label 
                                htmlFor="email" 
                                className="
                                    block 
                                    mb-2 
                                    text-sm 
                                    font-medium 
                                    text-white
                                    dark:text-gray-300"
                            >
                                Endereço de email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    w-full 
                                    p-2.5 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="contato@filmes.com" 
                                required
                            />
                        </div> 
                        <div className='mb-6'>
                            <label 
                                htmlFor="urlImage" 
                                className="block mb-2 text-sm font-medium text-white dark:text-gray-300">
                                    Imagem Perfil
                            </label>
                            <input 
                                type="urlImage" 
                                name="text" id="urlImage" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    w-full 
                                    p-2.5 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="Informe uma url de imagem para usar no seu perfil" 
                                required 
                            />
                        </div>
                        <div className="mb-6">
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
                                id="password" 
                                className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm 
                                    rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block w-full p-2.5 
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="•••••••••" 
                                required />
                        </div> 
                        <div className="mb-6">
                            <label 
                                htmlFor="confirm_password" 
                                className="
                                    block 
                                    mb-2 
                                    text-sm 
                                    font-medium 
                                    text-white
                                    dark:text-gray-300"
                                >
                                    Digite novamente a senha
                            </label>
                            <input 
                                type="password" 
                                id="confirm_password" 
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
                                    dark:bg-gray-700 
                                    dark:border-gray-600 
                                    dark:placeholder-gray-400 
                                    dark:text-white 
                                    dark:focus:ring-blue-500 
                                    dark:focus:border-blue-500" 
                                placeholder="•••••••••" 
                                required 
                            />
                        </div>
                        <div className='mt-8 px-20 flex justify-between'>
                            <button 
                                type="submit" 
                                className="
                                    text-white 
                                    bg-green-500 
                                    hover:bg-green-700 
                                    focus:ring-4 
                                    focus:outline-none 
                                    focus:ring-green-300 
                                    font-medium 
                                    rounded-lg 
                                    text-sm 
                                    w-full 
                                    sm:w-auto 
                                    px-5 
                                    py-2.5 
                                    text-center 
                                    dark:bg-green-600 
                                    dark:hover:bg-green-700 
                                    dark:focus:ring-green-800"
                                onClick={cadastrarUsuario}
                            >
                                    Confirmar
                            </button>
                            <button 
                                onClick={handleClose}
                                className="
                                    text-white 
                                    bg-red-600 
                                    hover:bg-red-700 
                                    focus:ring-4 
                                    focus:outline-none 
                                    focus:ring-red-300 
                                    font-medium 
                                    rounded-lg 
                                    text-sm 
                                    w-full 
                                    sm:w-auto 
                                    px-5 
                                    py-2.5 
                                    text-center 
                                    dark:bg-red-600 
                                    dark:hover:bg-red-700 
                                    dark:focus:ring-red-800"
                            >
                                    Cancelar
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
