import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { PlayerVideo } from './PlayerVideo'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  border: 1,
  borderColor: 'text.disabled',
  boxShadow: 24,
  p: 4,
  borderRadius: '16px'
};

export function ModalReproducao(props) {

    const handleClose = () => props.setEstado(false);

    return(
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-netflix-black-700">                
                    <h1 className='text-xl text-white font-bold mb-4'>{props.filme.titulo}</h1>
                    <PlayerVideo
                        key={props.filme.url}
                        filme={props.filme}
                    />
                    <p className='my-2  text-white text-justify'><span className='font-bold text-lg'>Descrição: </span>{props.filme.descricao}</p>
                </Box>
            </Modal>
        </div>
    )
}