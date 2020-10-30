import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState();
  
    // Use effect
    useEffect(() => {
      // Ira un comentario
        const itemList = new Promise( (resolve,reject) => {

        })
    });
  
    return (
      <ItemList />
    );
  }


export default ItemList;
