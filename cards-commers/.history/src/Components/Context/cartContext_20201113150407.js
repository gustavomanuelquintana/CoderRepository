import React, {useState,useContext} from 'react';
import Products from '../../Components/Products/Products';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


 function onAdd(item){

    const [products] = useState(Products);
    console.log("Estamos intentando agregar un item : " + item)
 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);
 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{ cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}