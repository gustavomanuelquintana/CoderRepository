import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([]);
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const test= new Promise( (res) => {
            const productos = ["nike","Anti transpirante - deportivo"];
            res(setItemList(productos))
  
        });

    },[]); // End useEffect

    return (
        <div className="container">
        <ItemList items={itemList} />
        </div>
    );
}



export default ItemListContainer;