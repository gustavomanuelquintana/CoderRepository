import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState("");
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const test= new Promise( (resolve) => {
            const productos = ["nike","Anti transpirante - deportivo"];
  
        });

        test.then(response => {
            setItemList(response);
            console.log(response);
        },error => {
            console.log(error);
        });
    }); // End useEffect

    return (
        <></>
    );
}



export default ItemListContainer;