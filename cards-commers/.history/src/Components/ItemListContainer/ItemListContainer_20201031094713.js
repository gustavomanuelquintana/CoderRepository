import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState("");
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const test= new Promise( (resolve) => {
            const productos = ["nike","Anti transpirante - deportivo"];
  
        });

    }); // End useEffect

    return (
        <>
        <ItemList />
        </>
    );
}



export default ItemListContainer;