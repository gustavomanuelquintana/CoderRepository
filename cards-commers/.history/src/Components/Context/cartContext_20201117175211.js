import React, {useState,useContext} from 'react';
import { Alert } from 'react-bootstrap';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);
 const [total, setTotal] = useState(0);


function onAdd(item){
        let index = cart.findIndex(el => el.item.id == item.item.id);

        if(index == -1){
            setCart( [...cart, item]);
        } else {
            Alert('Articulo Duplicado')
        } 
                    
}

//const amountOfItems = (id) => cart.filter((item) => item.id === id).length;


console.log(cart);

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart, onAdd, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}