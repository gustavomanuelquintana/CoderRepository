import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){
    const [productsitems, setListProducts] = useState([]);

     // Use effect
     useEffect( () => {
     setListProducts(items.map(num => (<p>{num}</p>));
    },[]); // End useEffect

return <div className="itemList">
        <Item listProducts={productsitems}/>
     </div>
}


export default ItemList;
