import React from 'react';
import ButtonsCount from './ButtonsCount/ButtonsCount';
import ViewCount from './ViewCount/ViewCount';
import AgregarCount from './AgregarCount/AgregarCount';


export default function ItemCount() {
    const styleContain={
        backgroundColor:"white",
        display:"flex",
    }
    const styleBox = {
        color:"red",
        fontWeight:"bold",
        fontSize:"1em",
        display:"flex",
        justifyContent:"center",
        width:"100px",
        height:"30px",
        background: "lightgrey",
    }
    const boxAdd ={
        fontWeight: "bold",
        fontSize: "1em",
        color: "red",
    }
    const clickAction = ( ) => {}


    return (
        <div class="section-car" style={styleContain}>   
        <div class="box-count" style={styleBox}> 
            <ButtonsCount suma={false} onClick={clickAction} /> <ViewCount /> <ButtonsCount suma={true} onClick={clickAction} />
        </div>

        <div class="box-add" style={boxAdd}> <AgregarCount /> </div>
        </div>
        );
}


