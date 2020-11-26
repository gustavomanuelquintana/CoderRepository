import React, { useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/firestore";
import ModalWindow from "./Modal/Modal";
import "../Cart/CartItem.css";
import Cartdetail from "./cart/cart";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ButtonPrimary,ButtonDark} from '../../Components/ButtonGlobal/index';
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
import { ReturnIcon, TrashIcon } from "../icons/index";
import imageHeader from "../../Images/imageHeader.png";
import { getFirestore } from "../../firebase";

const amountPrice = (cart, total, setTotal) => {
  let totalPrice = 0;
  let price = cart.forEach((value) => {
    totalPrice += value.item.precio * value.cantidad;
  });
  setTotal(totalPrice);
};
const count = (cart, countercart, setCountercart) => {
  let counter = 0;
  let itemCounter = cart.forEach((value) => (counter += value.cantidad));
  setCountercart(counter);
};

const Cart = () => {
  const { cart, clear } = useCartContext();
  const [countercart, setCountercart] = useState(0);
  const [total, setTotal] = useState(0);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    adress: "",
    showCheckout: false,
  });
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    count(cart, countercart, setCountercart);
    amountPrice(cart, total, setTotal);
  }, [cart]);

  async function createOrder(e) {
    e.preventDefault();
    const dateOrder = {
      buyer: { email: email.email, name: name.name, address: address.address },
      cartItems: cart,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      total: total,
    };
    const db = getFirestore();
    const orders = db.collection("orders");
    try {
      const doc = await orders.add(dateOrder);
      console.log("documento creado con el id: " + doc.id);
      setOrder({ id: doc.id, dateOrder });
      setModalShow(true);
    } catch (err) {
      console.log("Erro creating order");
    }
  }

  return (
      <div className="containerDetail">
        <Row>
          <Col sm="2" xs="5">
            <Link class="regresar" to="/">
              {" "}
              <ul>
                <li>
                  <ReturnIcon width={"20px"} />
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
            {/*Modal Order is Open*/}
            <ModalWindow
              order={order}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            {/* Modal Order is Close*/}
            {/*Start Cart Items*/}
            {cart.length > 0 ? (
              cart.map((product) => (
                <Cartdetail
                  key={product.id}
                  product={product}
                  title={"Section Car"}
                />
              ))
            ) : (
              <div className="p-3 text-center text-muted">
                No tienes ningún producto en tu carrito de compras.
              </div>
            )}
            {/*Fin Cart Items*/}
          </Col>
          <Col sm="4">
            {/*Detail Cart -> Counter, Total and Button Continuar*/}
            {cart.length > 0 && (
              <div className=" divTest">
                <div className="col-sm-12 totalItemImg">
                  <div className="itemGroup">
                    <h6>Total Items:</h6>
                  </div>
                  <div className="itemGroup">
                    <p className=" typeSize">{countercart}</p>
                  </div>
                  <div>
                    <img src={imageHeader} />
                  </div>
                </div>
                <div class="col-sm-12 totalItem">
                  <h6>Total Precio</h6>
                  <p className=" typeSize">${total}</p>
                </div>
                <hr />
                <div className="col-sm-12 buttonDetailCart">
                  <Row>
                    <Col sm="6">
                      <ButtonPrimary text={"Continuar"} onClick={()=> setOrder({ showCheckout: true })} />
                    </Col>
                    <Col sm="6">
                     <ButtonDark text={"Vaciar"} onClick={() => clear(cart)}/>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
            {order.showCheckout && (
              <div className=" divTest">
                <div class="col-sm-12 totalItem">
                  <h6>Finalización Compra</h6>
                </div>
                <hr />
                <div className="col-sm-12">
                  <form>
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        name="email"
                        type="email"
                        value={order.email}
                        onChange={(e) =>
                          setEmail({ [e.target.name]: e.target.value })
                        }
                        class="form-control"
                        placeholder="Ingrese su E-mail"
                        required
                      ></input>
                      <label>Nombre y Apellido</label>
                      <input
                        name="name"
                        type="text"
                        value={order.name}
                        class="form-control"
                        placeholder="Ingrese su Nombre"
                        onChange={(e) =>
                          setName({ [e.target.name]: e.target.value })
                        }
                        required
                      ></input>
                      <label>Dirección</label>
                      <input
                        name="address"
                        type="text"
                        value={order.adress}
                        placeholder="Ingrese su Dirección"
                        class="form-control"
                        onChange={(e) =>
                          setAddress({ [e.target.name]: e.target.value })
                        }
                        required
                      ></input>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="col-sm-12 buttonDetailCart">
                  <Row>
                    <Col sm="12 buttonsForm">
                      <div className="col-sm-6">
                        <button
                          onClick={createOrder}
                          className="btn btn-success"
                          type="submit"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="col-sm-6 ">
                        <ButtonDark type={"submit"} />
                        <button
                          onClick={() => setOrder({ showCheckout: false })}
                          className="btn btn-dark"
                          type="submit"
                        >
                          Cancelar
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
  );
};

export default Cart;
