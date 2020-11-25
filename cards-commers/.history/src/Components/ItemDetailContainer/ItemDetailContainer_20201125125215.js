import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import detailProduct from "../../Images/detailProduct.png";
import { getFirestore } from "../../firebase";
import ItemDetail from "./ItemDetail/ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ tituloDetail }) {
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  debugger;
  // Use effect
  useEffect(() => {
    const db = getFirestore();
    let itemCollection = db.collection("items").doc(id);

    debugger;
    itemCollection
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          setItemDetail(docSnapshot.data(id));
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {});
  }, []); // End useEffect

  return (
    <>
      <Spinner loading={loading} />
      <div className="containerDetail">
        <Row>
          <Col sm="2" xs="5">
            <Link class="regresar" to="/">
              {" "}
              <ul>
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
              <h2>{tituloDetail}</h2>
          </Col>
        </Row>
        <Row>
          {itemDetail && <ItemDetail key={itemDetail.id} item={itemDetail} />}
        </Row>
      </div>
    </>
  );
}

export default ItemDetailContainer;
