import React from 'react';
import './ItemDetail.css';


function ItemDetail({items}){

 return (items.map( products => {
        return( <div>
            <h2>{products.name}</h2>
            </div>)
}))


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemDetail;