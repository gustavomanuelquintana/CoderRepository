import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import './CartWidget.css';


function CartWidget(){
    const {cart} = useCartContext();
    const [countercart,setCountercart] = useState(0);

    useEffect( ()=>{
        count(cart,countercart,setCountercart)
      },[cart]);


    return (
        <Link to="/cart">
        <div className="imgCart">
         <img alt="image Carrito" src={ImageCarrito}/>
         { countercart > 0 &&
         <p class="cartWidgetCount">{countercart}</p>
        }
        </div>
        </Link>
    )
}

export default CartWidget;