import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const sumItems = cartItems => {
    debugger;
   let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
   let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
   return { itemCount, total }
}



export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


function onAddItem(state,item,counter){
    let index = state.cartItems.findIndex(el => el.item.id === item.item.id);
    debugger;
    if(index === -1){
    let upgrade = state.cartItems.concat({
            ...item,
             cantidad:counter
        });
        
        return {
           ...state,
           sumItems(...upgrade);
        }
        //setCart( [...cart, item]);
    } else {
       alert('Articulo repetido');
   //item = {...item, cantidad: item.cantidad++};
       //setCart([...cart])
    }       
};



//Function Increase item Cart
function increase(item){
    let index = cart.findIndex(el => el.item.id === item.item.id);
    const updateCart = [...cart];

updateCart[index] = {
  ...updateCart[index],
  cantidad: updateCart[index].cantidad + 1,
};
setCart(updateCart);

console.log("INC", JSON.stringify(cart), Array.isArray(cart));
}

//Function Decrease item Cart
function decrease(item){
    let index = cart.findIndex(el => el.item.id === item.item.id);
    const updateCart = [...cart];

updateCart[index] = {
  ...updateCart[index],
  cantidad: updateCart[index].cantidad - 1,
};
setCart(updateCart);

console.log("DEC", JSON.stringify(cart), Array.isArray(cart));
}

function removeItem(itemId){
    setCart(cart.filter( item => itemId.item.id != item.item.id));
}


 function clear(itemId){
    setCart(cart.filter(item =>item.id !== itemId.id));
 }



 return <CartContext.Provider value = {{cart,increase,decrease,removeItem, onAddItem, clear, cartCount : cart.length}}>
        {children}
    </CartContext.Provider>
}