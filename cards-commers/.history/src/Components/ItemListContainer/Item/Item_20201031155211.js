import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    return listProducts.map(listProducts => 
        <Container>
    <Row className="Item">
      <Col xs="6" sm="4">
          <div className="containerSection">
              <img src={listProducts.image}/>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSection">
              <div className="info">
                    <p> Producto: ${listProducts.productName}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSection">
              <h4>Aquí irá el precio</h4>
          </div>
      </Col>
    </Row>
  </Container>  
        );

}

export default Item;