import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const getList = () => {
    return new Promise( (res) => {
        let products;
        res(
            products = [
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/cards-logo.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'}
            ]
        )
    });
}


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([]);
  
    // Use effect
    useEffect( () => {
        getList().then( mercaderia => {
           setItemList(mercaderia);
        });
    },[]); // End useEffect

    return (
        <div className="container">
            <h2>{titulo}</h2>
        <ItemList items={itemList} />
        </div>
    );
}



export default ItemListContainer;