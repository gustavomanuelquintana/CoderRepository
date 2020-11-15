import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
    //Estado
 const [cart, setCart] = useState(defaultCart);
 const [state, dispatch] = useReducer(CartReducer, initialState);

 function onAdd(item){
   const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    
    const array = Object.values(item);
    setCart(array);
    console.log(cart); // No recibo los datos, se actualiza el render y queda el valor por default
    
   

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