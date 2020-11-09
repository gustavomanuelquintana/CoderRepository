import React from 'react';

const agregarcount = {
    borderRadius:"5px",
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'monospace',
    color:"white",
    fontSize:"1.2em",
}
export default function AgregarCount({item,onAdd, counter}){


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>
    )
}