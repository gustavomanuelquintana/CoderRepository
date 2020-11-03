import React from 'react';

const agregarcount = {
    borderRadius:"5px",
    border:"none",
    margin:"0.2em auto",
    background:"#000",
    fontFamily: 'monospace',
    color:"white",
    fontFamily:"monospace",
    fontSize:"1.2em",
}
export default function AgregarCount({onAdd, counter}){


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar</button> 
        </div>
    )
}