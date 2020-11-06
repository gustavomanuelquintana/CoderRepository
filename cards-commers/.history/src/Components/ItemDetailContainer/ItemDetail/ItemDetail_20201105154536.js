import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from '../../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail(item){
  console.log(item.item[0].calidad);

  
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
   
        <Container>
    <Row key={item.id} className="ItemDetail">
      <Col xs="6" sm="4">
          <div className="containerSectionDetail">
              <div className="imgDetail">
                  <img src={item.item[0].image}/>
              </div>
          </div>
      </Col>
      <Col xs="6" sm="4">
      <div className="containerSectionDetail">
              <div className="infoDetail">
                    <p className="details"> <span className="infoMainDetail"> {item.item[0].productName}  {item.color}</span> </p>
                    <p className="details"> <span>Marca:</span> {item.item[0].marca}</p>
                    <p className="details"> <span>Género:</span> {item.item[0].genero}</p>
                    <p className="details"> <span>Estilo:</span> {item.item[0].style}</p>
                    <p className="details"> <span>Calidad / Talle:</span> {item.item[0].calidad} - {item.item[0].talle}</p>
              </div>
          </div>
      </Col>
      <Col sm="4">
      <div className="containerSectionDetail">
      <h3><span className="skuDetail">SKU:{item.item[0].sku}</span></h3>
      <div className="precioDetail">
                    <h3><span className="costDetail">{item.item[0].precio}</span></h3>
                    <div className="cuotasDetail">
                    <h6>12 Cuotas <span className="cuotasDetail">Sin interés</span></h6>
                    </div>
              </div>
              <div className="counter">
              <ItemCount onAdd={handleAdd}  stock={stock} initial={2} /> 
              </div>
          </div>
          
      </Col>
      <Col sm="12">
        <div class="detail-section">
          <p class="fontDetail">La remera NIKE Hybrid aporta comodidad a tu día a día.
Está confeccionada en tejido de algodón suave con una silueta clásica y un llamativo estampado.
Corte estandar.
Logo NIKE estampado.</p>
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