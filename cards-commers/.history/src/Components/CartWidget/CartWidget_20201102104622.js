import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 

const style = {
    height: "80px",
    width: "80px",
}

function CartWidget(){
    return (
        <a href="http://localhost:3000/">
         <img style={style} alt="image Carrito" src={ImageCarrito}/>
        </a>
    )
}

export default CartWidget;