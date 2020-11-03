import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import remeraNike from '../../Images/remera-nike.jpg';


const getDetailInfo = () => {
    return new Promise( (res) => {
        setTimeout( () => {
            let products;
        res(
            products = [
                {id:0, image:remeraNike, productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Blanco',sku:'700020125628001', precio:'$3.500', cuotas:''}
            ]
        )
        },2000);
    });
}


function ItemDetailContainer({titulo}){
    const [itemDetail, setItemDetail] = useState([]);
  
    // Use effect
    useEffect( () => {
        getDetailInfo().then( mercaderia => {
            setItemDetail(mercaderia);
        });
    },[]); // End useEffect

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
}



export default ItemDetailContainer;