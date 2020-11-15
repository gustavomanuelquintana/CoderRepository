import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'react-router-dom';
import {useCartContext} from '../../Components/Context/cartContext';

const Cart = ({titleCart}) => {
    const {cart} = useCartContext();
    const [products] = useState(cart);
        


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
            <Col sm="10">
    <h2>{titleCart}</h2>
            </Col>
          </Row>
          <Row><h3>Probando</h3></Row>
        </div>
      </>
    )
}

export default Cart;