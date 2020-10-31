import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){
    const [listProducts, setListProducts] = useState([]);

return <div className="itemList">
        <Item listProducts={items}/>
     </div>
}


export default ItemList;
