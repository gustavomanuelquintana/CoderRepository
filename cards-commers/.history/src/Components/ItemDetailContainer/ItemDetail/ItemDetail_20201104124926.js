import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({item:{id,image,productName,marca,genero,style,items,color,calidad,talle,sku,precio}}){
    console.log({item});
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
    

 return ( 
   
        <Container key={id}>
    <Row className="ItemDetail">
      <Col xs="6" sm="4">
          <div className="containerSectionDetail">
              <div className="imgDetail">
                  <img key={id} src={image}/>
              </div>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSectionDetail">
              <div className="infoDetail">
                    <p className="details"> <span className="infoMainDetail"> {productName}  {color}</span> </p>
                    <p className="details"> <span>Marca:</span> {marca}</p>
                    <p className="details"> <span>Género:</span> {genero}</p>
                    <p className="details"> <span>Estilo:</span> {style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {calidad} - {talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSectionDetail">
      <h3><span className="skuDetail">SKU:{sku}</span></h3>
      <div className="precioDetail">
                    <h3><span className="costDetail">{precio}</span></h3>
                    <div className="cuotasDetail">
                    <h6>12 Cuotas <span className="cuotasDetail">Sin interés</span></h6>
                    </div>
              </div>
              <div className="counter">
              <ItemCount onAdd={handleAdd}  stock={stock} initial={2} /> 
              </div>
          </div>
          
      </Col>
    </Row>
  </Container>  

  

);

        /*<div className="itemList">
        <Item listProducts={items} />
     </div>*/
}


export default ItemDetail;