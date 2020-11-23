import React from 'react';
import Fade from "react-reveal/Fade";
import './ItemList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from '../Item/Item'; 




function ItemList({...items}){

 return (items.map( products => {
        return (
                
                <Fade bottom cascade>
                <Row  className="ListItemContainer">
                        <Col sm="12">
        <Item key={products.id}  listProducts={products}/>
        </Col>
        </Row>
        </Fade>

        


        )
})) //Fin map

}


export default ItemList;
