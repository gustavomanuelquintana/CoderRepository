import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import '../Cart/CartItem.css';
import Cartdetail from './cart/cart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/cartContext';

const Cart = () => {
    const {cart, itemCount} = useCartContext();
    
    console.log("Probando de item cart para agregar componentes: " + cart);
        


    return (
        <>
        <div className="containerDetail">
          <Row>
            <Col sm="2" xs="5">
            <Link class="regresar" to="/"> <ul>
                <li>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-arrow-left-square-fill"
             
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm9.5 8.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
                    />
                  </svg>
                  Regresar
                </li>
              </ul>
              </Link>
            </Col>
            <Col sm="12">
    <h2>Section Car</h2>
          </Col>
          </Row>
    <Row sm="12">
        <Col sm="8">
          {
            cart.length > 0 ?
            cart.map(product => <Cartdetail key={product.id} product={product} title={"Section Car"}/>)
            : <div className="p-3 text-center text-muted"> Your cart is empty</div>
          }
          </Col>
     
      <Col sm="4">
        {
            cart.length > 0 &&
            <div className="col-sm-3 p-3">
            <div className="card card-body">
                <p className="mb-1">Total Items</p>
                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                <p className="mb-1">Total Payment</p>
                <h3 className="m-0 txt-right">"Ira el total"</h3>
                <hr className="my-4"/>
                <div className="text-center">
                    <button type="button" className="btn btn-primary mb-2" onClick={()=> {}}>CHECKOUT</button>
                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={()=>{}}>CLEAR</button>
                </div>

            </div>
        </div>
             }
          </Col>
    </Row>
        </div>
      </>
    )
}

export default Cart;