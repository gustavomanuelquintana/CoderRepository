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
    let index;
    const updateCart1 = cart.concat({
        ...item,
        cantidad:1
    });
    const updateCart1 = [...cart, item];

    updateCart1[index] = {
        ...updateCart1[index],
        cantidad: updateCart1[index].cantidad + 1
    };
    setCart(updateCart1);

    console.log("INCREMENTO", JSON.stringify(cart), Array.isArray(cart));
}

 function clear(item){
     console.log("Borraremos el item completo")
 }



 return <CartContext.Provider value = {{cart,onRemove,increase, onAdd, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}