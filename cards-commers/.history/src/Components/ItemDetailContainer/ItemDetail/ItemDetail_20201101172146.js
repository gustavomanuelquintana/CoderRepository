import React from 'react';
import './ItemDetail.css';


function ItemDetail({items}){

 return (items.map( products => {
    return (
        <Container key={listProducts.id}>
    <Row className="Item">
      <Col xs="6" sm="4">
          <div className="containerSection">
              <div className="img">
                  <img key={listProducts.id} src={listProducts.image}/>
              </div>
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
                    <h3><span className="sku">SKU:{listProducts.sku}</span></h3>
                    <h3><span className="cost">{listProducts.precio}</span></h3>
              </div>
          </div>
      </Col>
    </Row>
  </Container>  
)
}))


        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemDetail;