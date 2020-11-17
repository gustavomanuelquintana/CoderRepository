import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart,total }) => {
 const [cart, setCart] = useState(defaultCart);
 const [total, setTotal] = useState(total);

 
 
function onAdd(item){
        let index = cart.findIndex(el => el.item.id == item.item.id);

        if(index == -1){
            cart.cantidad += 1;

            return{
                setCart( [...cart, item]),
                setTotal(item.total + ); 
            }
        } 
              
}


//const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart, onAdd, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}