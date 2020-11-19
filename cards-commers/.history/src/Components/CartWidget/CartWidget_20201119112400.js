import React from 'react';
import {Link} from 'react-router-dom';
import ImageCarrito from "../../Images/carrito-img.png"; 
import {useCartContext} from '../Context/cartContext';
import './CartWidget.css';


const count= (cart,countercart,setCountercart) => {
    let counter = 0;
    let itemCounter = cart.forEach( value => counter += value.cantidad);
    setCountercart(counter)
  }

function CartWidget(){
    const {cart} = useCartContext();
    const [countercart,setCountercart] = useState(0);
    const {cartCount} = useCartContext();

    useEffect( ()=>{
        count(cart,countercart,setCountercart)
      },[cart]);


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