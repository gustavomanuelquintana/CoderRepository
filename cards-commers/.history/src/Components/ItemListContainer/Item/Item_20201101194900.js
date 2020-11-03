import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item({items}){   
    return (items.map( productsDetail => {
        return (
            <Container key={productsDetail.id}>
        <Row className="Item">
          <Col xs="6" sm="4">
              <div className="containerSection">
                  <div className="img">
                      <img key={productsDetail.id} src={productsDetail.image}/>
                  </div>
              </div>
          </Col>
          <Col xs="6" sm="4">
          <div className="containerSection">
                  <div className="info">
                        <p className="details"> <span className="infoMain"> {productsDetail.productName}  {productsDetail.color}</span> </p>
                        <p className="details"> <span>Marca:</span> {productsDetail.marca}</p>
                        <p className="details"> <span>Género:</span> {productsDetail.genero}</p>
                        <p className="details"> <span>Estilo:</span> {productsDetail.style}</p>
                        <p className="details"> <span>Calidad / Talle:</span> {productsDetail.calidad} - {productsDetail.talle}</p>
                  </div>
              </div>
          </Col>
          <Col sm="4">
          <div className="containerSection">
          <h3><span className="sku">SKU:{productsDetail.sku}</span></h3>
          <div className="precio">
                        <h3><span className="cost">{productsDetail.precio}</span></h3>
                        <div class="cuotas">
                        <h6>12 Cuotas <span class="cuotasDetail">Sin interés</span></h6>
                        </div>
                  </div>
              </div>
              
          </Col>
        </Row>
      </Container>  
    )
    }))

}

export default Item;