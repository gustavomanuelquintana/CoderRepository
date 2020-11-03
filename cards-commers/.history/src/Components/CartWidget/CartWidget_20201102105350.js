import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 
import './CartWidget.css';

function CartWidget(){
    return (
        <div className="imgCart">
        <a href="http://localhost:3000/">
         <img alt="image Carrito" src={ImageCarrito}/>
        </a>
        </div>
    )
}

export default CartWidget;