import React from "react";

export default function ButtonsCount({suma,onClick,counter,counterState}) {
    const styleButton = {
        fontWeight: "bold",
        fontSize:"1.5em",
        background: "#172522",
        color: "white",
        margin:"0 auto",
        height:"100%",
    }
    let signo = suma ? '+' : '-';

    let amount = suma ? (counter + 1) : (counter - 1);

  return ( <button onClick={amount} style={styleButton}>{signo}</button> )
}
