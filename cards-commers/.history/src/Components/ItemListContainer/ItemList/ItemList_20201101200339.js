import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../Item/Item'; 




function ItemList({items}){

 return (items.map( products => {
        return (
        <Item listProducts={products}/>
        )
})) //Fin map


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemList;
