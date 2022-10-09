import React, { useState } from "react";

import { Label, Select } from "flowbite-react";

export function Checkout(props) {

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    function comprarCartao() {

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
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="opcaopagamento"
                                        value="Escolha a forma de pagamento"
                                    />
                                </div>
                                <Select
                                    id="opcaopagamento"
                                    required={true}
                                >
                                    <option value="credito">
                                        Cartão de Cédito
                                    </option>
                                    <option value="debito">
                                        Débito
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
                    </div>
                </div>
            </div>
        </div>
    );
};

