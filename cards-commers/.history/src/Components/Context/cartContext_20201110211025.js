import React, {useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const cartProvider = ({ children }) => {



    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}