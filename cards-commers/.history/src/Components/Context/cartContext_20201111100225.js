import React, {useState,useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const cartProvider = ({ children, defaultValue }) => {



    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}