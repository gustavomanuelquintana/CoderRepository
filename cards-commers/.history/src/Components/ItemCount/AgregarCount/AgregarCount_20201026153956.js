import React from 'react';

export default function AgregarCount(){
    const agregarcount = {
        borderRadius:"5px",
        background:"red",
        color:"white",
        fontSize:"2em",
    }
    const agregarCount = () =>{};

    return(
        <div>
            <button onClick={agregarCount}>Agregar</button> 
        </div>
    )
}