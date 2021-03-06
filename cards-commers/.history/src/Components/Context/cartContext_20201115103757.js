import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 function onAdd(item){
    const Storage = (item) => {
        localStorage.setItem('cart', JSON.stringify(item.length > 0 ? item: []));
    }
    Storage(item);
    
    const array = Object.values(item);
    console.log("viendo si funca el array" + array.itemcart);
    
   

 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);

 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{cart,cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}