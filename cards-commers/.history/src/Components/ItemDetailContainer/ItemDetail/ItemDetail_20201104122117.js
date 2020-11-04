import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({items}){
    console.log(items);
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
    

 return ( items.map(productsDetail => {
   return (
        <Container key={productsDetail.id}>
    <Row className="ItemDetail">
      <Col xs="6" sm="4">
          <div className="containerSectionDetail">
              <div className="imgDetail">
                  <img key={productsDetail.id} src={productsDetail.image}/>
              </div>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSectionDetail">
              <div className="infoDetail">
                    <p className="details"> <span className="infoMainDetail"> {productsDetail.productName}  {productsDetail.color}</span> </p>
                    <p className="details"> <span>Marca:</span> {productsDetail.marca}</p>
                    <p className="details"> <span>Género:</span> {productsDetail.genero}</p>
                    <p className="details"> <span>Estilo:</span> {productsDetail.style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {productsDetail.calidad} - {productsDetail.talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSectionDetail">
      <h3><span className="skuDetail">SKU:{productsDetail.sku}</span></h3>
      <div className="precioDetail">
                    <h3><span className="costDetail">{productsDetail.precio}</span></h3>
                    <div class="cuotasDetail">
                    <h6>12 Cuotas <span class="cuotasDetail">Sin interés</span></h6>
                    </div>
              </div>
              <div className="counter">
              <ItemCount onAdd={handleAdd}  stock={stock} initial={2} /> 
              </div>
          </div>
          
      </Col>
    </Row>
  </Container>  

  
   ) }
));

        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemDetail;