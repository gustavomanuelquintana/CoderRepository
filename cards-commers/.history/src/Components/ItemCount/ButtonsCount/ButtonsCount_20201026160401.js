import React from "react";

export default function ButtonsCount({suma,onClick}) {
    const styleButton = {
        fontWeight: "bold",
        fontSize:"1.5em",
        background: "",
        color: "white",
    }
    let signo = suma ? '+' : '-';

  return ( <button style={styleButton}>{signo}</button> )
}
