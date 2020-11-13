import React, {useState,useContext} from 'react';
import Cart from '../Cart/Cart';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


export const CartProvider = ({ children, defaultCart }) => {
 const [cart, setCart] = useState(defaultCart);

 function onAdd(item){
   console.log("itemmmmmmmmmmmmmmmmm:" + item);
    return (
        <div className="container">
            {
                item.map(({product}) => <Cart key={product.id} product={product}/>)
            }
        </div>
    )


 }

 function onRemove(itemID){
     console.log("Estamos intentando REMOVER un item: " + itemID);
 }

 function clear(item){
     console.log("Borraremos el item completo")
 }



    return <CartContext.Provider value = {{cart, onAdd, onRemove, clear}}>
        {children}
    </CartContext.Provider>
}