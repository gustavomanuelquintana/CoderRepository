import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){

return items.map( products => {
        return <Item listProducts={products}/>
}


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemList;
