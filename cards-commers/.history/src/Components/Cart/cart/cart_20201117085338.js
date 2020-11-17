import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import './cart.css';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {

    //const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <Container class="itemListContainer">
            <Row sm="12">
            <Col sm="2">
            <div className="col-sm-3 div-box">
                <img
                alt={product.item.name}
                style={{margin: "0 auto", maxHeight: "80px"}} 
                src={product.item.image} className="img-fluid d-block"/>
            </div>
            </Col>
            <Col sm="2">
            <div className="col-sm-3 div-box">
                <h5 className="mb-1">{product.item.productName}</h5>
                <p className="mb-1">Precio: {product.item.precio} </p>
                
            </div>
            </Col>
            <Col sm="2">
            <div className="col-sm-3 text-center div-box">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0">{product.cantidad}</p>
            </div>
            </Col>
            <Col sm="2">
            <div className="col-sm-2  text-right div-box ">
                 <button 
                 onClick={() => {}}
                 className="btn btn-success btn-sm mr-2 mb-1">
                    <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     product.cantidad > 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                       <MinusCircleIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.cantidad === 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
            </Col>
           
            <Col sm="4" className="div-box">
                <h1> Probando </h1>
                 </Col>
                 </Row>
            </Container>
     );
}
 
export default Cartdetail;