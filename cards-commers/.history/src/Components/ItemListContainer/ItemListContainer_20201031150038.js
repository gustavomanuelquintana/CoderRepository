import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const getList = () => {
    return new Promise( (res) => {
        let products;
        res(
            products = [
                {id:0, image:'../../Images/remera-nike.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-adidas.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Polyester 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-puma.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-lacoste.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-tommy.png', productName:'Remera',
                marca:'Nike', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-allstar.png', productName:'Remera',
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