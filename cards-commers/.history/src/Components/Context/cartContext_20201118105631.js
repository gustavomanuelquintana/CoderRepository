import React, {useState,useContext} from 'react';
import { Alert } from 'react-bootstrap';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


function onAdd(item){
    let index = cart.findIndex(el => el.item.id === item.item.id);

    if(index === -1){
        const updateCart = cart.concat({
            ...item,
            cantidad:1
        });
        setCart(updateCart);
        console.log("ADD", JSON.stringify(cart), Array.isArray(cart));
        //setCart( [...cart, item]);
    } else {
       alert('Articulo repetido');
   //item = {...item, cantidad: item.cantidad++};
       //setCart([...cart])
    }       
};

function onRemove(itemId){
    setCart(cart.filter(item =>item.id !== itemId.id));
   /* return{
        ...cart,
        ...sumItems(cart.filter(item => item.id !== itemId.item.id)),
        cartItems: [...cart.filter(item => item.id !== itemId.item.id)]

    }*/
}

function increase(item){
    let index = [0];
    const updateCart = [...cart];
// new object for replace existing one
updateCart[index] = {
  ...updateCart[index],
  cantidad: updateCart[index].cantidad + 1
};
setCart(updateCart);

console.log("INC", JSON.stringify(cart), Array.isArray(cart));
}

function countCart(){
    let total = 0;
    let countVariable = cart.map(item => item.cantidad);
    let resultCount = countVariable.length;
    console.log(countVariable);
    return countVariable.length;
}

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart,onRemove,increase, onAdd, clear, countCart}}>
        {children}
    </CartContext.Provider>
}