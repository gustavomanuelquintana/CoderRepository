import React from 'react';
import './ItemList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../Item/Item'; 




function ItemList({items}){

 return (items.map( products => {
        return (
                
                <Row  className="ListItemContainer">
                        <Col sm="12">
        <Item keys={products.id}  listProducts={products}/>
        </Col>
        </Row>

        


        )
})) //Fin map

}


export default ItemList;
