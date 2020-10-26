import React from "react";

export default function ButtonsCount({suma,onClick}) {
    const styleButton = {
        fontWeight: "bold",
        fontSize:"1.5em",
        background: "#172522",
        color: "white",
        margin:"0.25em auto",
        height:"100%",
    }
    let signo = suma ? '+' : '-';

  return ( <button style={styleButton}>{signo}</button> )
}
