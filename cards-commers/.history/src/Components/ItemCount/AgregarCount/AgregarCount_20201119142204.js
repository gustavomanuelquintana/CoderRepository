import React from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
export default function AgregarCount({onAdd,stock, counter}){


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter,stock)}>Agregar al Carrito</button> 
        </div>
    )
}