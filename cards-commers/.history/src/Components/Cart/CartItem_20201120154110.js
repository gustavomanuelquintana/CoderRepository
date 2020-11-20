import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import '../Cart/CartItem.css';
import Cartdetail from './cart/cart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import {useCartContext} from '../Context/cartContext';
import imageHeader from '../../Images/imageHeader.png';




const amountPrice = (cart,total,setTotal) => {
  let totalPrice = 0;
  let price = cart.forEach( value =>{totalPrice+= (value.item.precio * value.cantidad)}); 
  setTotal(totalPrice)
}

const count= (cart,countercart,setCountercart) => {
  let counter = 0;
  let itemCounter = cart.forEach( value => counter += value.cantidad);
  setCountercart(counter)
}

const Cart = () => {
    const {cart, cartCount, totalItem, clear} = useCartContext();
    const [countercart,setCountercart] = useState(0);
    const [total,setTotal] = useState(0);

    useEffect( ()=>{
      count(cart,countercart,setCountercart)
      amountPrice(cart,total,setTotal);
    },[cart]);

    function clearItems(){
      clear(cart)
    }
   
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
    <h2>Carrito de Compras</h2>
          </Col>
          </Row>
    <Row sm="12 mt-4">
        <Col sm="8">
          {
            cart.length > 0 ?
            cart.map(product => <Cartdetail key={product.id} product={product.item} title={"Section Car"}/>)
            : <div className="p-3 text-center text-muted">No tienes ningún producto en tu carrito de compras.</div>
          }
          </Col>
     
      <Col sm="4">
        {
            cart.length > 0 &&
             <div className="col-sm-7 divTest">
               <div className="col-sm-12 totalItemImg">
                 <div className="itemGroup">
                 <h6>Total Items:</h6>
                 </div>
                 <div className="itemGroup"><p className=" typeSize">{countercart}</p></div>
                 <div><img src={imageHeader}/></div>
               </div>
               <div class="col-sm-12 totalItem">
                 <h6>Total Precio</h6>
        <p className=" typeSize">${total}</p>
               </div>
               <hr />
               <div className="col-sm-12">
                 <Row>
                   <Col sm="6"><button className="btn btn-danger">CHECKOUT</button></Col>
                   <Col sm="6"><button onClick={clearItems} className="btn btn-secondary ml-4">Clear</button></Col>
               </Row>
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