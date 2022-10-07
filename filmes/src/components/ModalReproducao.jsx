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

export function ModalReproducao() {

    return(
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bg-netflix-black-700 bg-opacity-90">                
                    TESTE
                </Box>
            </Modal>
        </div>
    )
}