import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';

const getList = () => {
    return new Promise( (res) => {
        res(
            products = ["nike", "Airmax", "Running fast"]
        )
    });
}


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([]);
  
    // Use effect
    useEffect( () => {
        getList().then( mercaderia =>{
            console.log(products)
        });
    },[]); // End useEffect

    return (
        <div className="container">
        <ItemList items={itemList} />
        </div>
    );
}



export default ItemListContainer;