import React from 'react';

export default function AgregarCount(){
    const agregarcount = {
        borderRadius:"5px",
        border:"none",
        margin:"0.2em auto",
        background:"red",
        color:"#dc3545",
        fontFamily:"monospace",
        fontSize:"1.2em",
    }
    const agregarCount = () =>{};

    return(
        <div>
            <button style={agregarcount} onClick={agregarCount}>Agregar</button> 
        </div>
    )
}