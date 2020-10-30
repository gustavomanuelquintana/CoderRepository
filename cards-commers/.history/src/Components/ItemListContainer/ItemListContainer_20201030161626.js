import React from 'react';
import './ItemListContainer.css';

function ItemListContainer({titulo}){
    return (
        <div className="container">
    <h1>{titulo}</h1>
    </div>
    )
}

export default ItemListContainer;