import React from 'react';
import {Link} from 'react-router-dom';

const agregarcount = {
    borderRadius:"2px",
    margin:"0.2em auto",
    background:"orange",
    fontFamily: 'Titillium Web',
    color:"black",
    fontSize:"0.5em",
}
export default function AgregarCount({onAdd, counter}){
    

    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>

    )
}