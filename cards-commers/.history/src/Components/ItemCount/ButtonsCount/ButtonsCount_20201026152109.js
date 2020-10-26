import React from "react";

export default function ButtonsCount({suma,onClick}) {
    let signo = suma ? '+' : '-';

  return ( <button>{signo}</button> )
}
