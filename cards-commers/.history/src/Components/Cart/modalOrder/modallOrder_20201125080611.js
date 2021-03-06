import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

function closeModal(){
    setClose(true);
  };

function modalOrder({order}) {
    const [close, setClose] = useState(false);

    useEffect(()=>{
        closeModal(close,setClose)
    },[close]);
  return (
    <div>
      <Modal isOpen={true} onRequestClose={closeModal}>
        <Zoom>
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
          <div className="order-details">
            <h3 className="success-message">Your order has been placed.</h3>
            <h2>Order</h2>
            <ul>
              <li>
                <div>Name:</div>
                <div>{order.name}</div>
              </li>
              <li>
                <div>Email:</div>
                <div>{order.email}</div>
              </li>
              <li>
                <div>Address:</div>
                <div>{order.address}</div>
              </li>
              <li>
                <div>Date:</div>
                <div>{order.date}</div>
              </li>
              <li>
                <div>Total:</div>
                    <div>{order.total}</div>
              </li>
              <li>
                <div>Cart Items:</div>
                <div>
                  {order.cartItems.map((x) => (
                    <div>
                      {x.count} {" x "} {x.title}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}

export default modalOrder;
