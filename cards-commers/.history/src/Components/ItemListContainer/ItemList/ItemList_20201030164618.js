import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState();
  
    // Use effect
    useEffect(() => {
      // Ira un comentario
        const itemList = new Promise( (resolve,reject) => {
            resolve(
                <div>
                    <h2>Probando</h2>
                </div>
            )
        })
    });

    itemList.then( response =>{
        alert(response)
    },error => {
        alert(error);
    });
  
    return (
      <ItemList />
    );
  }


export default ItemList;
