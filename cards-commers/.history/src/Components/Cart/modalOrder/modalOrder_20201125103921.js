import React, {useState,useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Zoom from "react-reveal/Zoom";


function ModalOrder(props) {
  var tifOptions = Object.keys(props).forEach(function(key) {
    return <option value={key}>{props[key]}</option>
    });
    console.log(tifOptions);
  console.log(buyer);
  debugger
  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
         <Zoom>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <h4>{buyer.email}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      </Zoom>
    </Modal>
    </div>
  );
}

export default ModalOrder;
