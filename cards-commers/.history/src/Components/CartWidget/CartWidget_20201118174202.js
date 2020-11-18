import React from 'react';
import {Link} from 'react-router-dom';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import './CartWidget.css';

function CartWidget(){
    const {cartCount} = useCartContext();

    return (
        <Link to="/cart">
        <div className="imgCart">
         <img alt="image Carrito" src={ImageCarrito}/>
         { cartCount > 0 &&
         <p class="cartWidgetCount">{cartCount}</p>
        }
        </div>
        </Link>
    )
}

export default CartWidget;