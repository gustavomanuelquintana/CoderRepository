import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const getList = () => {
    return new Promise( () => {
        
    });
}


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([]);
  
    // Use effect
    useEffect( () => {

    },[]); // End useEffect

    return (
        <div className="container">
        <ItemList items={itemList} />
        </div>
    );
}



export default ItemListContainer;