import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import './CartWidget.css';

function CartWidget(){
    return (
        <div className="imgCart">
         <img alt="image Carrito" src={ImageCarrito}/>
        </div>
    )
}

export default CartWidget;