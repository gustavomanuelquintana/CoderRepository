import React from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

function ItemListContainer({titulo}){
    return (
        <div className="container">
    <h1>{titulo}</h1>
    </div>
    )
}

export default ItemListContainer;