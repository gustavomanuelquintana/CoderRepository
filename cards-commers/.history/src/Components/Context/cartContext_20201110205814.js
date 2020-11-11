import React, {useContext} from 'react';

export const cartContext = React.createContext([]);

export const itemCartContext = useContext(cartContext);

