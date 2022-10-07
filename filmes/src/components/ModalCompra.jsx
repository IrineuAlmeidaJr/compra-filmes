import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  border: 'none',
//   boxShadow: 24,
  p: 4,
  borderRadius: '16px'
};

export function ModalCompra(props) {

    const handleClose = () => { props.setEstado(false)}
        
    return(
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-netflix-black-700 bg-opacity-90">                
                    <h1 className='text-xl font-bold'>{props.filme.nome}</h1>
                    <p className='text-white mt-2'><span className='font-bold text-lg'>Descrição: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi deserunt reprehenderit nam laborum minima aspernatur facere, eveniet quam, necessitatibus ipsa adipisci nisi, quaerat culpa. Ullam officia eum itaque laboriosam recusandae?</p>
                    <p className='text-white mt-2'><span className='font-bold text-lg'>Comprar: </span>R$ {props.filme.comprar}</p>
                    <p className='text-white mt-2'><span className='font-bold text-lg'>Alugar: </span>R$ {props.filme.alugar}</p>
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
                            >
                                    Comprar
                            </button>
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