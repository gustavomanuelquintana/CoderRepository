import React from 'react';

export default function AgregarCount(){
    const agregarcount = {
        borderRadius:"5px",
        border:"none",
        background:"red",
        color:"white",
        fontFamily:"monospace",
        fontSize:"1.1em",
    }
    const agregarCount = () =>{};

    return(
        <div>
            <button style={agregarcount} onClick={agregarCount}>Agregar</button> 
        </div>
    )
}