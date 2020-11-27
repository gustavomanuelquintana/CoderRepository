import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { getFirestore } from "../../firebase";
import ItemDetail from "./ItemDetail/ItemDetail";
import { ReturnIcon } from "../icons/index";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ItemDetailContainer({ tituloDetail }) {
  const [loaded, setLoaded] = useState(false);
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  debugger;
  // Use effect
  useEffect(() => {
    const db = getFirestore();
    let itemCollection = db.collection("items").doc(id);
    let idItem = id;
    console.log(idItem);

    debugger;
    itemCollection
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          setItemDetail({ id: idItem, ...docSnapshot.data() });
          setLoaded(true);
        }
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {});
  }, []); // End useEffect

  return (
    <>
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
            <h2>{tituloDetail}</h2>
          </Col>
        </Row>
        {!loaded && (
          <div class="spinner">
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
          </div>
        )}
        <Row>
        {loaded && <ItemDetail key={itemDetail.id} item={itemDetail} />}
        </Row>
      </div>
    </>
  );
}

export default ItemDetailContainer;
