import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Label, Select } from "flowbite-react";

export function Checkout(props) {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [opcao, setOpcao] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setOpcao(e.target.value);
        console.log(e.target.value);
        console.log(e.target.value === 'credito');
    }

    function dataAtualFormatada(){
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return diaF+"/"+mesF+"/"+anoF;
    }

    function dataAtualFormatadaBanco(){
        var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return anoF+"-"+mesF+"-"+diaF;
    }

    function comprarCartao() {
        const transacao = JSON.stringify({
            id: 0,
            data: dataAtualFormatadaBanco(),
            produto: props.filme,
            usuario: usuario,
            dataexp: null, // null porque é comprar se fosse alugar teria a data
            tipo: 1
        })

        console.log(transacao);

        const url = "http://localhost:8080/api/compra/2";
        fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: transacao
        })
        .then(() => {
            swal({
                title: "Sucesso!",
                text: "Compra concluida",
                icon: "success",
                button: "Finalizar",
                dangerMode: true,
            })  
            .then(() => {
                navigate("/home");
            });
        })
        .catch(function(err) {
            console.error('Error - ', err);
        })
    }

    function comprarBoleto() {
        const transacao = JSON.stringify({
            id: 0,
            data: dataAtualFormatadaBanco(),
            produto: props.filme,
            usuario: usuario,
            dataexp: null, // null porque é comprar se fosse alugar teria a data
            tipo: 1
        })

        const url = "http://localhost:8080/api/compra/1";
        fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: transacao
        })
        .then(() => {
            swal({
                title: "Sucesso!",
                text: "Compra concluida",
                icon: "success",
                button: "Finalizar",
                dangerMode: true,
            })  
            .then(() => {
                navigate("/home");
            });
        })
        .catch(function(err) {
            console.error('Error - ', err);
        })

    }

    function comprarPix() {
        const transacao = JSON.stringify({
            id: 0,
            data: dataAtualFormatadaBanco(),
            produto: props.filme,
            usuario: usuario,
            dataexp: null, // null porque é comprar se fosse alugar teria a data
            tipo: 1
        })

        const url = "http://localhost:8080/api/compra/3";
        fetch(url,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: transacao
        })
        .then(() => {
            swal({
                title: "Sucesso!",
                text: "Compra concluida",
                icon: "success",
                button: "Finalizar",
                dangerMode: true,
            })  
            .then(() => {
                navigate("/home");
            });
        })
        .catch(function(err) {
            console.error('Error - ', err);
        })

    }

    return (
        <div className="flex justify-center items-center">
            <div 
                className="
                    py-16 
                    px-4 
                    md:px-6 
                    2xl:px-0 
                    flex 
                    justify-center 
                    items-center 
                    2xl:mx-auto 
                    2xl:container"
                >
                <div 
                    className="
                        flex 
                        flex-col 
                        justify-start 
                        items-start 
                        w-full 
                        space-y-9"
                >
                    <div 
                        className="
                            flex 
                            flex-col 
                            xl:flex-row 
                            justify-center 
                            xl:justify-between 
                            space-y-6 
                            xl:space-y-0 
                            xl:space-x-6 
                            w-full"
                    >
                        <div 
                            className="
                                xl:w-3/5 
                                flex flex-col 
                                sm:flex-row 
                                xl:flex-col 
                                justify-center 
                                items-center 
                                bg-gray-100 
                                py-7 
                                sm:py-0 
                                xl:py-10 
                                px-10 
                                xl:w-full"
                        >
                            <div 
                                className="
                                    flex 
                                    flex-col 
                                    justify-start 
                                    items-start 
                                    w-full 
                                    space-y-4"
                            >
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">
                                    {props.filme.titulo}
                                </p>
                                <p className="text-base font-semibold leading-none text-gray-600">
                                {!!props.filme.valor ? 
                                    props.filme.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
                                    : 
                                    props.filme.valor
                                }
                                </p>
                            </div>
                            <div 
                                className="
                                    mt-6 
                                    sm:mt-0 
                                    xl:my-10 
                                    xl:px-20 
                                    w-52 
                                    sm:w-96 
                                    xl:w-auto"
                            >
                                <img 
                                    className="m-2"
                                    src={props.filme.foto} 
                                    alt={props.filme.titulo} 
                                />
                            </div>
                        </div>

                        <div 
                            className="
                                p-8 
                                bg-gray-100 
                                flex 
                                flex-col 
                                lg:w-full 
                                xl:w-3/5"
                            >
                                
                            <div id="select">
                                <div className="mb-2 block ">
                                    <Label
                                        htmlFor="opcaopagamento"
                                    />
                                    <p className="text-base leading-4 text-gray-800">
                                        Escolha a forma de pagamento
                                    </p>                                    
                                </div>
                                <Select
                                    id="opcaopagamento"
                                    onChange={handleChange}
                                    className="text-base leading-4 text-gray-800"
                                >
                                    <option value="">
                                        
                                    </option>
                                    <option value="credito">
                                        Cartão de Cédito
                                    </option>
                                    <option value="boleto">
                                        Boleto
                                    </option>
                                    <option value="pix">
                                        PIX
                                    </option>
                                </Select>
                            </div>
                            
                            {/* 
                                Aqui Fazer um IF se for:
                                    - Cartão
                                    - Boleto
                                    - Pix                            
                            */}
                            {
                                opcao === 'credito' &&(
                                    <div className="mt-2">
                                        <h3 
                                            className="
                                            flex 
                                            justify-start
                                            mb-2
                                            text-base 
                                            font-bold
                                            leading-4 
                                            text-gray-800"
                                        >
                                            Pagamento com Cartão
                                        </h3>
                                        <label 
                                            className="
                                                mt-8 
                                                text-base 
                                                leading-4 
                                                text-gray-800"
                                            >
                                                Detalhe Cartão
                                            </label>
                                        <div className="mt-2 flex-col">
                                            <div>
                                                <input 
                                                    className="
                                                        border 
                                                        rounded-tl 
                                                        rounded-tr 
                                                        border-gray-300 
                                                        p-4 
                                                        w-full 
                                                        text-base 
                                                        leading-4
                                                        placeholder-gray-600 
                                                        text-gray-600" 
                                                    type="text" 
                                                    placeholder="0000 1234 6549 15151" />
                                            </div>
                                            <div 
                                                className="flex-row flex">
                                                <input 
                                                    className="
                                                        border 
                                                        rounded-bl 
                                                        border-gray-300 
                                                        p-4 
                                                        w-full 
                                                        text-base 
                                                        leading-4 
                                                        placeholder-gray-600 
                                                        text-gray-600"
                                                    type="text" 
                                                    placeholder="MM/AA" />
                                                <input 
                                                    className="
                                                        border 
                                                        rounded-br 
                                                        border-gray-300 
                                                        p-4 
                                                        w-full 
                                                        text-base 
                                                        leading-4 
                                                        placeholder-gray-600
                                                        text-gray-600" 
                                                    type="text" 
                                                    placeholder="CVC" />
                                            </div>
                                        </div>

                                        <label 
                                            className="
                                                mt-8 
                                                text-base 
                                                leading-4 
                                                text-gray-800"
                                            > 
                                                Nome no cartão</label>
                                        <div className="mt-2 flex-col">
                                            <div>
                                                <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
                                            </div>
                                        </div>

                                        <button 
                                            onClick={comprarCartao}
                                            className="
                                                mt-8 border 
                                                border-transparent 
                                                hover:border-gray-300 
                                                bg-netflix-red-500
                                                hover:bg-netflix-red-700
                                                text-white 
                                                flex justify-center 
                                                items-center 
                                                py-4 
                                                rounded 
                                                w-full">
                                            <div>
                                                <p className="text-base leading-4">
                                                    Pagar
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                )                                
                            }

                            {
                                opcao === 'boleto' &&(
                                    <div className="mt-2">
                                        
                                        <label 
                                            className="
                                                mt-8 
                                                text-base
                                                font-bold 
                                                leading-4 
                                                text-gray-800"
                                            >
                                                Pagemento com Boleto
                                            </label>
                                        <div className="mt-2 flex-col">
                                            <img src="https://www.rtek.com.br/wp-content/uploads/2017/08/boletobancario.jpg" />
                                        </div>

                                        
                                        <button 
                                            onClick={comprarBoleto}
                                            className="
                                                mt-8 border 
                                                border-transparent 
                                                hover:border-gray-300 
                                                bg-netflix-red-500
                                                hover:bg-netflix-red-700
                                                text-white 
                                                flex justify-center 
                                                items-center 
                                                py-4 
                                                rounded 
                                                w-full">
                                            <div>
                                                <p className="text-base leading-4">
                                                    Pagar
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                )                                
                            }

                            {                            
                                opcao === 'pix' &&(
                                    <div className="mt-2">
                                        <label 
                                            className="
                                                mt-8 
                                                text-base 
                                                font-bold
                                                leading-4 
                                                text-gray-800"
                                            >
                                                Pagamento com PIX
                                            </label>
                                        <div className="mt-2 flex-col">
                                            <p className="
                                                text-base 
                                                leading-4 
                                              text-gray-800"
                                                
                                            >
                                                <span className="font-bold">Nome: </span>
                                                {usuario.nome}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex-col">
                                            <p className="
                                                text-base 
                                                leading-4 
                                              text-gray-800"
                                                
                                            >
                                                <span className="font-bold">Data: </span>
                                                {dataAtualFormatada()}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex flex-col items-center ">
                                            <img src="https://ibnossolar.org.br/wp-content/uploads/2019/03/código-QR_facebook.png"
                                            className="w-[60%]" />
                                        </div>

                                        <button 
                                            onClick={comprarPix}
                                            className="
                                                mt-8 border 
                                                border-transparent 
                                                hover:border-gray-300 
                                                bg-netflix-red-500
                                                hover:bg-netflix-red-700
                                                text-white 
                                                flex justify-center 
                                                items-center 
                                                py-4 
                                                rounded 
                                                w-full">
                                            <div>
                                                <p className="text-base leading-4">
                                                    Pagar
                                                </p>
                                            </div>
                                        </button>
                                    </div>
                                )                                
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

