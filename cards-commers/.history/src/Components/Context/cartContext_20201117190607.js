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
            Alert('Articulo Duplicado')
        }       
}

function onRemove(itemId){
    let discount = cart.filter(item =>item.id === itemId.id ? itemId.cantidad-- : item)
    if (discount == 0) {
        setCart(discount);
    }else {
        setCart(itemId);
    }
}

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart,onRemove, onAdd, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}