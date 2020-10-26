import React from 'react';

export default function AgregarCount(){
    const agregarcount = {
        borderRadius:"5px",
        background:"red",
        color:"white",
        fontSize:"1em",
    }
    const agregarCount = () =>{};

    return(
        <div>
            <button style={agregarcount} onClick={agregarCount}>Agregar</button> 
        </div>
    )
}