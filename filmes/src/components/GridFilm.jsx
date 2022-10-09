import * as React from 'react';
import { useState } from 'react';

import { Item } from "./Item"

import { ModalCompra } from "./ModalCompra";

export function GridFilm(props) {
    
    const openModal = () => props.setEstado(true);

    return(
        <div className="grid grid-cols-4 gap-2 ">
            {props.listaFilmes.map(film => {
                return (
                    <div key={film.id} onClick={() => props.setFilme(film)}>
                        <div onClick={openModal}>                        
                            <Item                           
                                image = {film.foto}
                                nome={''}
                            />                        
                        </div>
                    </div>                    
                )
            })}

        </div>
    )
}