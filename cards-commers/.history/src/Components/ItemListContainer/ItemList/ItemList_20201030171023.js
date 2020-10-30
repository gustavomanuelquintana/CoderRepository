import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState("");
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const {itemList} = new Promise( (resolve) => {
            resolve(
                <> 
                    <div><h2>probando</h2></div>
                </>
                
            )

        });

        itemList.then(response => {
            console.log(response)
        },error => {
            console.log(error);
        });
    }); // End useEffect
    
  
    return (
      <ItemList />
    );
  }


export default ItemList;
