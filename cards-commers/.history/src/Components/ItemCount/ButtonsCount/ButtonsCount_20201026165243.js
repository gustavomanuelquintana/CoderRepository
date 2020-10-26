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

    let amount = suma ? (counterState(counter + 1)) : (counterState(counter - 1));

  return ( <button onClick={operationCount} style={styleButton}>{signo}</button> )
}
