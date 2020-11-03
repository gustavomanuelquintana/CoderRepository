import React from 'react';
import './ItemDetail.css';




function ItemDetail({items}){

 return (items.map( products => {
        return <Item listProducts={products}/>
}))


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemList;