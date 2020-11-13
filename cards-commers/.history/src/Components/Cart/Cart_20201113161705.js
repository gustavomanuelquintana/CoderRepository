import React, {useState} from 'react';
import {useCartContext} from '../../Components/Context/cartContext';


const Cart = () => {
    const {cart} = useCartContext();
    const [products] = useState(cart);
        
    function prueba(products){
        products.map((name) => console.log(name));
    }

    return (
        
    )
}

export default Cart;