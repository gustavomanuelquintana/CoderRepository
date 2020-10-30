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
        console.log(response);
    },error => {
        console.log(error);
    });
  
    return (
      <ItemList />
    );
  }


export default ItemList;
