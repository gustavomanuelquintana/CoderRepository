import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){
    const [listProducts, setListProducts] = useState([]);

     // Use effect
     useEffect( () => {
       setListProducts(items);
    },[]); // End useEffect

return <div className="itemList">
        <Item listProducts={listProducts}/>
     </div>
}


export default ItemList;
