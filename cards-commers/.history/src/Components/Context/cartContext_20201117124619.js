import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const sumItems = cart => {
    let total = cart.reduce((total,product) => total + product.item.precio * product.cantidad,0).toFixed(2);
    console.log("funciona o no:" + total);
    return {total}

  } 

export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 
 
function onAdd(item){
         
        let index = cart.findIndex(el => el.item.id == item.item.id);

        if(index == -1){
            setCart( [...cart, item]);
        } else {
            console.log("repetido");
        }
        
}






//const amountOfItems = (id) => cart.filter((item) => item.id === id).length;




 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart, onAdd, onRemove, clear, cartCount : cart.length, sumItems}}>
        {children}
    </CartContext.Provider>
}