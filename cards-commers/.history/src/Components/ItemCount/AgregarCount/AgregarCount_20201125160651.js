import React from 'react';
import {Link} from 'react-router-dom';

const agregarcount = {
    borderRadius:"2px",
    margin:"0.2em auto",
    background:"orange",
    fontFamily: 'Titillium Web',
    color:"black",
    fontSize:"0.8em",
}
export default function AgregarCount({onAdd, counter}){
    

    return(
        <div>
            <button className="btn btn-warning" style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>

    )
}