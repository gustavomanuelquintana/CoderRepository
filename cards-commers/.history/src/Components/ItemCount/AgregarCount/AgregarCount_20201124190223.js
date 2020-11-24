import React from 'react';
import {Link} from 'react-router-dom';

const agregarcount = {
    border:"2px solid black",
    margin:"0.2em auto",
    background:"orange",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
export default function AgregarCount({onAdd, counter}){
    

    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>

    )
}