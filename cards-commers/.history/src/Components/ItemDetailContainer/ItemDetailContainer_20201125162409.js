import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import detailProduct from "../../Images/detailProduct.png";
import { getFirestore } from "../../firebase";
import ItemDetail from "./ItemDetail/ItemDetail";
import { ReturnIcon } from "../icons/index";
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
    let idItem = id;
    console.log(idItem);

    debugger;
    itemCollection
      .get()
      .then((docSnapshot) => {
        if (docSnapshot.exists) {
          setItemDetail({ id: idItem, ...docSnapshot.data() });
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
        <Row>
          {itemDetail && <ItemDetail key={itemDetail.id} item={itemDetail} />}
        </Row>
      </div>
    </>
  );
}

export default ItemDetailContainer;
