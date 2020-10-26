import React from 'react';

export default function ViewCount({value}){
    const countnumber = {
        margin:"0.30em auto",
        fontStyle:"italic",

    }

    return(
        <div style={countnumber} class="countNumber">{value}</div>
    )
}