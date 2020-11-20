import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const sumItems = cartItems => {
    let total1;
    let itemCount = cartItems.reduce((total1, product) => total1 + product.cantidad, 0);
    let total = cartItems.reduce((total1, product) => total1 + product.item.precio * product.cantidad, 0).toFixed(2);

    console.log(itemCount);
    console.log(total);
    return { itemCount, total }
}

export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);


function onAddItem(state,item){
    let index = state.cartItems.findIndex(el => el.item.id === item.item.id);
    debugger;
    if(index === -1){
         let updateCart = state.cartItems.concat({
            ...item,
            cantidad: 1
        });
        return {
            ...state,
            ...sumItems(updateCart),
            cartItems:[...updateCart]
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