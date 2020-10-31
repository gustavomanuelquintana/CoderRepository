import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';


function Item({listProducts}){
    return <Container>
    <Row>
      <Col xs="6" sm="4">
          <div className="containerImage"></div>
      </Col>
      <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
      <Col sm="4">.col-sm-4</Col>
    </Row>
  </Container>

}

export default Item;