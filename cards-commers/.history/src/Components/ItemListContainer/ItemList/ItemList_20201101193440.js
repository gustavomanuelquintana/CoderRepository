import React, {useState, useEffect} from 'react';
import './ItemList.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../Item/Item'; 




function ItemList({items}){

 return (items.map( products => {
        return(
        <Container sm="12">
                <Row>
        <Item listProducts={products}/>
        </Row>
        </Container>
        )
}))


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemList;
