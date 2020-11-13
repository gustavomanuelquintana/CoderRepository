import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 function onAdd(item){
    return console.log(cacheitem.find(obj => obj.id === item));

 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);
 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{cacheitem,cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}