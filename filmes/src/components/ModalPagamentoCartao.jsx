import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import swal from 'sweetalert';

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

export function ModalPagamentoCartao(props) {
    const navigate = useNavigate();
    const handleClose = () => { props.setEstado(false)}

    function gerarAssinatura(event) {
       event.preventDefault();
        console.log(`${props.usuario.nome} - Gerou Assinatura`); 
        // *** Fazer aqui requisição FETCH API  para inserir na tabela assinatura
        // mas tomar cuidado pode dar erro aqui pq pode sair e não terminar verificar
        swal({
            title: "Sucesso!",
            text: "Assinatura concluida",
            icon: "success",
            button: "Finalizar",
            dangerMode: true,
        })  
        .then(() => {
            handleClose(); 
            navigate("/home");
        });
          
    }
        
    return(
        <div>
            <Modal
                open={props.estado}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={gerarAssinatura}>
                    <Box sx={style}
                        className="
                            flex 
                            flex-col
                            justify-center
                            bg-netflix-black-700
                            bg-opacity-90
                            "
                    >     
                        <p className="text-white text-xl font-semibold">Pagamento Cartão</p>
                        <div className="input_text mt-6 relative"> 
                            <input 
                                type="text" 
                                className="
                                    h-12 
                                    pl-7 
                                    outline-none 
                                    px-2 
                                    focus:border-red-900 
                                    transition-all 
                                    w-full 
                                    border-b 
                                    rounded-lg" 
                                placeholder="Nome completo" 
                                required
                            /> 
                            <span className="absolute left-0 text-white text-sm -top-4">
                                Nome do dono do cartão
                            </span> 
                        </div>
                        <div className="input_text mt-8 relative"> 
                            <input 
                                type="text" 
                                className="h-12 pl-7 outline-none px-2 focus:border-red-900 transition-all w-full border-b rounded-lg" 
                                placeholder="0000 0000 0000 0000" 
                                data-slots="0" 
                                data-accept="\d" 
                                size="19"
                                required 
                            /> 
                            <span className="text-white absolute left-0 text-sm -top-4">
                                Número do cartão
                            </span> 
                        </div>
                        <div className="mt-8 flex gap-5 ">
                            <div className="input_text relative w-full"> 
                            <input 
                                type="text" 
                                className="
                                    h-12 
                                    pl-7 
                                    outline-none 
                                    px-2 
                                    focus:border-red-900 
                                    transition-all 
                                    w-full 
                                    border-b 
                                    rounded-lg" 
                                    placeholder="MM/AA" 
                                    data-slots="my"
                                    required 
                            /> 
                            <span className="text-white absolute left-0 text-sm -top-4">
                                Data de validade
                            </span> 
                            </div>
                            <div className="input_text relative w-full"> 
                                <input 
                                    type="text" 
                                    className="
                                        h-12 
                                        pl-7 
                                        outline-none 
                                        px-2 
                                        focus:border-red-900 
                                        transition-all 
                                        w-full 
                                        border-b 
                                        rounded-lg" 
                                    placeholder="000" 
                                    data-slots="0" 
                                    data-accept="\d" 
                                    size="3" 
                                    required
                                /> 
                                <span className="text-white absolute left-0 text-sm -top-4">Código de Segurança (CVV)</span> 
                            </div>
                        </div>
                        <p className="text-white text-lg text-center mt-4 font-semibold">
                            Valor total: R$ {props.valor}
                        </p>
                        <div className="flex justify-center mt-4"> 
                            <button 
                                type="submit" 
                                className="
                                    outline-none 
                                    pay 
                                    h-12 
                                    bg-netflix-red-300  
                                    text-white 
                                    mb-3 
                                    hover:bg-netflix-red-700 
                                    rounded-lg w-1/2 
                                    cursor-pointer 
                                    transition-all"
                            >
                                Pagar
                            </button> 
                        </div>
                    </Box>
                </form>
            </Modal>
        </div>
    )
}