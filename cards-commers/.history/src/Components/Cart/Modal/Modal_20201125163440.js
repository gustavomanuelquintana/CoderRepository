import React from "react";
import Modal from "react-bootstrap/Modal";
import Zoom from "react-reveal/Zoom";
import {ListIcon} from '../../icons/index';

function ModalWindow(props) {
  const { order } = props;

  debugger;
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
              Proceso Compra
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3 className="success-message">
              Su orden se ha generado con éxito.
            </h3>
            <p><ListIcon widtth={"20px"} />Orden: {order.id}</p>
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-success" onClick={props.onHide}>
              Cerrar
            </button>
          </Modal.Footer>
        </Zoom>
      </Modal>
    </div>
  );
}
export default ModalWindow;
