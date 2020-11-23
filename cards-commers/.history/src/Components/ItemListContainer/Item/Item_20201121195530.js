import React from 'react';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';
import remeraNike from '../../Images/remera-nike.jpg';
import gorraGorinAzul from '../../Images/gorra-gorin-azul.jpg';
import remeraAdidas from '../../Images/remera-adidas.jpg';
import remeraPuma from '../../Images/remera-puma.jpg';
import gorraAdidasMilitar from '../../Images/gorra-adidas-militar.jpg';
import remeraTopper from '../../Images/remera-topper.jpg';
import camperaNikeNegra from '../../Images/campera-nike-negra.jpg';
import remeraUnder from '../../Images/remera-under.jpg';
import remeraAllstar from '../../Images/remera-allstar.jpg';
import pelotaNike from '../../Images/pelota-nike.jpg';


function Item({listProducts:{id,image,marca,sku,precio}}){   
    
    return (
        <>
        <Row className="RowItems">
      <Col  xs="12" sm="12" className="colDivItem">
                       <div className="img">
                 <Link to={`/item/${id}`}> <img key={id} src={image}/> </Link>
              </div>
                    <div className="containerSection">
              <div className="info">
                    <p> <span className="detailDeport">RUNNING</span> </p>
                    <p> <span className="detailMarca"> {marca}</span></p>
              </div>
          </div>
          <div className="containerSection">
      <div className="precio">
                    <h3><span className="sku">SKU:{sku}</span></h3>
                    <h3><span className="cost">${precio}</span></h3>
              </div>
          </div>
      </Col>
      </Row>
      </>
)
}

export default Item;