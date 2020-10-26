import React from 'react';

export default function ViewCount({value}){
    const countnumber = {
        margin:"0.25em auto",
        textShadow: "50px red",

    }

    return(
        <div style={countnumber} class="countNumber">{value}</div>
    )
}