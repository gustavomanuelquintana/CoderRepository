import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const cartProvider = ({ children, defaultValue }) => {
 const [cart, setCart] = useState(defaultValue);






    return <CartContext.Provider defaultValue = {[]}>
        {children}
    </CartContext.Provider>
}