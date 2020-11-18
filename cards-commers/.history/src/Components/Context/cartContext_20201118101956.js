import React, {useState,useContext} from 'react';
import { Alert } from 'react-bootstrap';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


function onAdd(item){
    let index = cart.findIndex(el => el.item.id == item.item.id);

    if(index == -1){
        setCart( [...cart, item]);
    } else {
       item = {...item, cantidad: item.cantidad++};
       setCart([...cart])
    }       
}

function onRemove(itemId){
    setCart(cart.filter(item =>item.id !== itemId.id));
   /* return{
        ...cart,
        ...sumItems(cart.filter(item => item.id !== itemId.item.id)),
        cartItems: [...cart.filter(item => item.id !== itemId.item.id)]

    }*/
}

function increase(item){
    cart.findIndex(el => el.item.id === item.item.id).cantidad++;
}

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart,onRemove,increase, onAdd, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}