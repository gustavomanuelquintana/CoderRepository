import React, {useState, useEffect} from 'react';
import './ItemList.css';
 

function ItemList() {
    const [itemList, setItemList] = useState();
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const itemList = new Promise( (resolve,reject) => {
           resolve(setItemList=> {
                return <>
                    <div className="probando"></div>
                </>
           })

        })
    }); // End useEffect
    
  
    return (
      <ItemList />
    );
  }


export default ItemList;
