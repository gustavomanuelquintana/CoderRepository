import React from 'react';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import './CartWidget.css';

function CartWidget(){
    const {cartCount} = useCartContext();

    return (
        <div className="imgCart">
         <img alt="image Carrito" src={ImageCarrito}/>
         {cartCount}
        </div>
    )
}

export default CartWidget;