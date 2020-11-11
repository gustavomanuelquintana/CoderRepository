import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const cartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);







    return <CartContext.Provider value = {[cart]}>
        {children}
    </CartContext.Provider>
}