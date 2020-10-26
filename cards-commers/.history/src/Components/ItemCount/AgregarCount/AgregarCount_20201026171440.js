import React from 'react';

const agregarcount = {
    borderRadius:"5px",
    border:"none",
    margin:"0.2em auto",
    background:"#dc3545",
    color:"white",
    fontFamily:"monospace",
    fontSize:"1.2em",
}
export default function AgregarCount(onAdd, counter){

    const agregarCount = () =>{};

    return(
        <div>
            <button style={agregarcount} onClick={agregarCount}>Agregar</button> 
        </div>
    )
}