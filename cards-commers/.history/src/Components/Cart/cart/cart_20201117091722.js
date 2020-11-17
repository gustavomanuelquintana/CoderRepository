import React, { useContext } from 'react';
import './cart.css';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {

    //const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
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
  <h2>Section Cart</h2>
          </Col>
        </Row>
      </div>
     );
}
 
export default Cartdetail;