import React from 'react';
import {Link} from 'react-router-dom';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
export default function AgregarCount({onAdd, counter}){


    return(
        <Link to="/cart">
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>
        </Link>
    )
}