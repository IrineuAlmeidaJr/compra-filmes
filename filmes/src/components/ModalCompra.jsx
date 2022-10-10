import { useNavigate } from "react-router-dom";

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

export function ModalCompra(props) {
    
    const navigate = useNavigate();

    const handleClose = () => { props.setEstado(false)}
        
    function comprar() {
        localStorage.setItem("tipo", 1);
        localStorage.setItem("filme", JSON.stringify(props.filme));
        navigate("/pagamento");   
    }

    function alugar() {
        localStorage.setItem("tipo", 0);
        localStorage.setItem("filme", JSON.stringify(props.filme));
        navigate("/pagamento");   
    }

    return(
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-netflix-black-700 bg-opacity-90">                
                    <h1 className='text-xl font-bold'>{props.filme.titulo}</h1>
                    <p className='text-white text-justify mt-2'><span className='font-bold text-lg'>Descrição: </span>{props.filme.descricao}</p>
                    <p className='text-white mt-2'><span className='font-bold text-lg'>Comprar: </span>{!!props.filme.valor ? props.filme.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : props.filme.valor}</p>
                    <p className='text-white mt-2'><span className='font-bold text-lg'>Alugar: </span>{!!props.filme.valor ?(props.filme.valor*0.25).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : props.filme.valor}</p>
                    <div className='mt-8 px-20 flex justify-between'>
                            <button 
                                onClick={comprar} 
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
                            >
                                    Comprar
                            </button>
                            <button  
                                onClick={alugar}
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
                            >
                                    Alugar
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
                </Box>
            </Modal>
        </div>
    )
}