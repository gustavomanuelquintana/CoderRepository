import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const sumItems = cart => {
    Storage(cart);
    let itemCount = cart.reduce((total,item) => total + item.cantidad, 0 );
    let total = cart.reduce((total, product) => total + product.precio * product.cantidad, 0).toFixed(2);
    return {itemCount,total}
}


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 const Storage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart.length > 0 ? cart : []));
 }
 



function onAdd(item){
 
        let index = cart.findIndex(el => el.item.id == item.item.id);

        if(index == -1){
            setCart( [...cart, item]);
        } else {
            console.log("repetido");
        }
        
}





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



 return <CartContext.Provider value = {{cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}