import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 
const onAdd = (item) => setCart([...cart, item[1]);


//const amountOfItems = (id) => cart.filter((item) => item.id === id).length;




const onRemove = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart,cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}