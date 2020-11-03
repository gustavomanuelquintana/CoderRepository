import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({items}){
    let stock= 14;
    const handleAdd = (counter) => {
      return ({stock}) => {
        if (stock <=0){
          alert('No hay stock')
        }else {
          alert(`Se van agregar ${counter} articulos`)
        }
      }
    }

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
                    <p className="details"> <span>Producto:</span> {productsDetail.productName}  {productsDetail.color} </p>
                    <p className="details"> <span>Marca:</span> {productsDetail.marca}</p>
                    <p className="details"> <span>Género:</span> {productsDetail.genero}</p>
                    <p className="details"> <span>Estilo:</span> {productsDetail.style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {productsDetail.calidad} - {productsDetail.talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSection">
      <div className="precio">
                    <h3><span className="sku">SKU:{productsDetail.sku}</span></h3>
                    <h3><span className="cost">{productsDetail.precio}</span></h3>
                    <h6>12 Cuotas <span class="cuotasDetail">Sin interés</span></h6>
              </div>
              <div className="counter">
              <ItemCount onAdd={handleAdd}  stock={stock} initial={2} /> 
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