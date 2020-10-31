import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    return listProducts.map(listProducts => 
        <Container key={listProducts.id}>
    <Row className="Item">
      <Col xs="6" sm="4">
          <div className="containerSection">
              <img src={listProducts.image.remeraAdidas}/>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSection">
              <div className="info">
                    <p className="details"> <span>Producto:</span> {listProducts.productName}  {listProducts.color} </p>
                    <p className="details"> <span>Marca:</span> {listProducts.marca}</p>
                    <p className="details"> <span>Género:</span> {listProducts.genero}</p>
                    <p className="details"> <span>Estilo:</span> {listProducts.style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {listProducts.calidad} - {listProducts.talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSection">
      <div className="precio">
                    <h3><span>SKU:</span>{listProducts.sku}</h3>
                    <h3>{listProducts.precio}</h3>
              </div>
          </div>
      </Col>
    </Row>
  </Container>  
        );

}

export default Item;