import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const getList = () => {
    return new Promise( (res) => {
        let products;
        res(
            products = [
                {id:0, image:'../../Images/remera-nike.jpg', productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-adidas.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Polyester 100%', talle:'L',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-puma.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'XS',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-under.jpg', productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Polyester 100%%', talle:'XL',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-topper.jpg', productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'XXL',
                color: 'Negro/Blanco', precio:'$2500'},
                {id:0, image:'../../Images/remera-allstar.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'S',
                color: 'Negro/Blanco', precio:'$2500'}
            ]
        )
    });
}


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([{}]);
  
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