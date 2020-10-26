import React from 'react';

export default function ViewCount({value}){
    const countnumber = {
        margin:"0.25em auto",
        textShadow: "20px",

    }

    return(
        <div style={countnumber} class="countNumber">{value}</div>
    )
}