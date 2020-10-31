import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){
    const [productsitems, setListProducts] = useState([]);

     // Use effect
     useEffect( () => {
         items.map(num => num)
       console    },[]); // End useEffect

return <div className="itemList">
        <Item listProducts={productsitems}/>
     </div>
}


export default ItemList;
