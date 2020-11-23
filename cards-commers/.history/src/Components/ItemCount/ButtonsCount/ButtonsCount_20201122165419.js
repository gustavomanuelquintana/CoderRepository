import React from "react";
const styleButton = {
    fontWeight: "bold",
    fontSize:"1.5em",
    backgroundColor: "#229acd",
    width:"30px",
    color: "white",
    margin:"0 auto",
    height:"100%",
}

export default function ButtonsCount({suma,onClick,counter,counterState}) {
   
    let signo = suma ? '+' : '-';

    let amount = suma ? (counter + 1) : (counter - 1);

  return ( <button onClick={onClick(amount)} style={styleButton}>{signo}</button> )
}
