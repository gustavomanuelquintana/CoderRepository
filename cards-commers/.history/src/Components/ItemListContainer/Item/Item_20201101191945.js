import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({listProducts}){   
    return (
        <Container key={listProducts.id}>
    <Row className="Item">
      <Col xs="6" sm="12">
                  <img key={listProducts.id} src={listProducts.image}/>
      </Col>
      <Col xs="6" sm="12">
                    <p className="details"> <span>Producto:</span> {listProducts.productName}  {listProducts.color} </p>
                    <p className="details"> <span>Marca:</span> {listProducts.marca}</p>
                    <p className="details"> <span>Género:</span> {listProducts.genero}</p>
                    <p className="details"> <span>Estilo:</span> {listProducts.style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {listProducts.calidad} - {listProducts.talle}</p>
      </Col>
      <Col sm="4">
      <div className="containerSection">
      <div className="precio">
                    <h3><span className="sku">SKU:{listProducts.sku}</span></h3>
                    <h3><span className="cost">{listProducts.precio}</span></h3>
              </div>
          </div>
      </Col>
    </Row>
  </Container>  
)
}

export default Item;