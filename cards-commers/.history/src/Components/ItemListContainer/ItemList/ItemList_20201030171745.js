import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState("");
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const test= new Promise( (resolve) => {
           setItemList();
               
            
        });

        test.then(response => {
            console.log(response)
        },error => {
            console.log(error);
        });
    }); // End useEffect
    
  
    return (
    <div>{itemList}</div>
    );
  }


export default ItemList;
