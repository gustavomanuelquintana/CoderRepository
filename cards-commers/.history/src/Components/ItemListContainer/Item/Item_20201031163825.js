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
              <img key={listProducts} src={listProducts.image}/>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSection">
              <div className="info">
                    <p key={listProducts} className="details"> <span>Producto:</span> {listProducts.productName}  {listProducts.color} </p>
                    <p key={listProducts} className="details"> <span>Marca:</span> {listProducts.marca}</p>
                    <p key={listProducts} className="details"> <span>Género:</span> {listProducts.genero}</p>
                    <p key={listProducts} className="details"> <span>Estilo:</span> {listProducts.style}</p>
                    <p key={listProducts} className="details"> <span>Calidad / Talle:</span> {listProducts.calidad} - {listProducts.talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSection">
      <div className="precio">
                    <h3 key={listProducts}><span>SKU:</span>{listProducts.sku}</h3>
                    <h3 key={listProducts}>{listProducts.precio}</h3>
              </div>
          </div>
      </Col>
    </Row>
  </Container>  
        );

}

export default Item;