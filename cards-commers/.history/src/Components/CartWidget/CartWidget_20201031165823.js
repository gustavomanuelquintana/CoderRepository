import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 

function CartWidget(){
    return (
        <a href="http://localhost:3000/">
         <img src={ImageCarrito}/>
        </a>
    )
}

export default CartWidget;