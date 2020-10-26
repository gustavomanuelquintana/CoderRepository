import React from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


export default function ItemCount() {
    const styleContain={
        backgroundColor:"white",
    }
    const styleBox = {
        display:"flex",
        justifyContent:"center",
        margin:"0.25em",
        padding:"5px",
        width:"150px",
        height:"40px",
        backgroundColor: "red",
    }
    const clickAction = ( ) => {}


    return (
        <div class="section-car" style={styleContain}>   
        <div class="box-count" style={styleBox}> 
            <ButtonsCount suma={false} onClick={clickAction} /> <ViewCount /> <ButtonsCount suma={true} onClick={clickAction} />
        </div>

        <div class="box-add"> <AgregarCount /> </div>
        </div>
        );
}

