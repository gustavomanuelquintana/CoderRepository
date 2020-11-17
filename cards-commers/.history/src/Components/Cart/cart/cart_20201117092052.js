import React, { useContext } from 'react';
import './cart.css';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {

    //const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <main>
        <section>
          <div className="banner-innerpage">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 align-self-center text-center">
                  <h1 className="title">Cart Listing</h1>
                  <h6 className="subtitle op-8">
                    We are small team of creative people working together
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="spacer">
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-9">
                  <div className="row shop-listing">
                    <table className="table shop-table">
                      <tr>
                        <th className="b-0">Name</th>
                        <th className="b-0">Price</th>
                        <th className="b-0">Quantity</th>
                        <th className="b-0 text-right">Total Price</th>
                      </tr>
                        <tr>
                          <td>{product.item.productName}</td>
                          <td>{product.item.precio}</td>
                          <td>
                            <button
                              onClick={(e) =>{}}
                              className="btn btn-primary btn-sm"
                            >
                              +
                            </button>
                            {product.item.cantidad}
                            <button className="btn btn-primary btn-sm">-</button>
                          </td>
                          <td className="text-right">
                            <h5 className="font-medium m-b-30">Item Total</h5>
                          </td>
                        </tr>
                      <tr>
                        <td colspan="3" align="right">
                          Subtotal :subtotal
                        </td>
                        <td colspan="4" align="right">
                          <button
                            className="btn btn-danger"
                            onClick={() => {}}
                          >
                            Empty cart
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     );
}
 
export default Cartdetail;