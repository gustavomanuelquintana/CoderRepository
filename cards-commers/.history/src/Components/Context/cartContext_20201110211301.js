import React, {useContext} from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const cartProvider = ({ children, defaultValue}) => {
    const [cartbuy,setCartbuy] = useState(defaultValue)



    return <CartContext.Provider>
        {children}
    </CartContext.Provider>
}