import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Item from '../Item/Item'; 




function ItemList({items}){
return <div className="itemList">
        <Item listPrenducts={items}/>
     </div>
}


export default ItemList;
