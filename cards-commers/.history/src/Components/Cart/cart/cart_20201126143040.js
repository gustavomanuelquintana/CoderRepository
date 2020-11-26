import React, { useState, useEffect } from "react";
import "./cart.css";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";
import { useCartContext } from "../../Context/cartContext";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  CartIcon,
  TrashIcon,
} from "../../icons/index";

const Cartdetail = ({ product }) => {
  const { increase, decrease, removeItem } = useCartContext();
  const [show, setShow] = useState(false);

  const increaseItem = () => {
    increase(product);
  };

  const decreaseItem = () => {
    decrease(product);
    setShow(true);
  };
 
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("dismounted");
    };
  }, [product]);

  return (
    <Container>
      <div className="row col-sm-12 ml-4 no-gutters py-2">
        <div className="col-sm-3 p-2">
          <img
            alt={product.item.name}
            style={{ margin: "0 auto", maxHeight: "100px" }}
            src={"/images/" + product.item.image}
            className="img-fluid d-block"
          />
        </div>
        <div className="col-sm-3 p-2 detailItem">
          <h5 className="mb-1">{product.item.productName}</h5>
          <p className="mb-1 typeSize">${product.item.precio} </p>
        </div>
        <div className="col-sm-3 p-2 text-center detailItem ">
          <h5 className="mb-1">Cantidad</h5>
          <p className="mb-0 typeSize">{product.cantidad}</p>
        </div>
        <div className="col-sm-3  text-right ">
          <button
            onClick={increaseItem}
            className="btn btn-primary btn-sm mr-2 mb-1"
          >
            <PlusCircleIcon width={"20px"} />
          </button>

          {product.cantidad > 0 && (
            <button
              onClick={()=> decrease(product),setShow(true)}
              className="btn btn-danger btn-sm mb-1 mr-3"
            >
              <MinusCircleIcon width={"20px"} />
            </button>
          )}
          {product.cantidad === 1 && (
            <button
              onClick={()=>removeItem(product)}
              className="btn btn-dark btn-sm mb-1"
            >
              <TrashIcon width={"20px"} />
            </button>
          )}
          <Toast
            className="toast"
            onClose={() => setShow(false)}
            show={show}
            delay={1000}
            autohide
          >
            <Toast.Body>
              Has eliminado un producto del carrito! <CartIcon width={"20px"} />
            </Toast.Body>
          </Toast>
        </div>
      </div>
    </Container>
  );
};

export default Cartdetail;
