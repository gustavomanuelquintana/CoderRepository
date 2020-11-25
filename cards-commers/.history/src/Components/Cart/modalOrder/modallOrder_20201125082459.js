import React, {useState,useEffect} from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

function closeModal(clase,setClose){
    setClose(true);
  };

function ModalOrder(order) {
    const [modalShow, setModalShow] = useState(false);

   return (
    <div>
      <Modal isOpen={() => setModalShow(false)} onRequestClose={() => setModalShow(false)}>
        <Zoom>
          <button className="close-modal" onHide={() => setModalShow(false)}>
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
                
                </div>
              </li>
            </ul>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}

export default ModalOrder;
