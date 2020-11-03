import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 
import './CartWidget.css';

function CartWidget(){
    return (
        <a href="http://localhost:3000/">
         <img className="imgCart" alt="image Carrito" src={ImageCarrito}/>
        </a>
    )
}

export default CartWidget;