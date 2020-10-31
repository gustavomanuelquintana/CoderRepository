import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState("");
  
    // Use effect
    useEffect( () => {
      // Ira un comentario
         const test= new Promise( (resolve) => {
           setItemList(resolve(
           <>
            <div></div>
           </>
           ));
               
            
        });

        test.then(response => {
            console.log(response)
        },error => {
            console.log(error);
        });
    }); // End useEffect

    return (
        <></>
    );
}



export default ItemListContainer;