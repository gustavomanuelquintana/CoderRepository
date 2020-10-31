import React, {useState, useEffect} from 'react';
import './ItemList.css';
 



function ItemList({items}){
return items.map( (item) => <ul>{item}</ul>)
}


export default ItemList;
