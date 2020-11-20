import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import sumItems from '../Context/cartContext';
import './CartWidget.css';


const count= (cart,countercart,setCountercart) => {
    let counter = 0;
    let itemCounter = cart.forEach( value => counter += value.cantidad);
    setCountercart(counter)
  }

function CartWidget(){
    const {cart} = useCartContext();
    const [countercart,setCountercart] = useState(0);
    const {itemCount} = sumItems();

    useEffect( ()=>{
        count(cart,countercart,setCountercart)
      },[cart]);


    return (
        <Link to="/cart">
        <div className="imgCart">
         <img alt="image Carrito" src={ImageCarrito}/>
         { countercart > 0 &&
         <p class="cartWidgetCount">{itemCount}</p>
        }
        </div>
        </Link>
    )
}

export default CartWidget;