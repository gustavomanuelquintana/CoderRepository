import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";
import Col from "react-bootstrap/Col";
import ItemCount from "../../ItemCount/ItemCount";
import { BuyIcon, TrackIcon } from "../../icons/index";
import { ButtonSuccess } from "../../ButtonGlobal/index";
import "./ItemDetail.css";
import { useCartContext } from "../../../Components/Context/cartContext";

function ItemDetail({ item }) {
  //Estados ItemDetail para
  const { onAdd } = useCartContext();
  let [compra, setCompra] = useState({
    isValid: false,
    id: null,
    cantidad: 0,
  });
  let [itemcart, setItem] = useState(item);

  let stock = 14;
  //Function add to Cart

  const handleAdd = (counter) => {
    return ({ stock }) => {
      if (stock <= 0) {
        alert("No hay stock");
      } else {
        const date = { isValid: true, cantidad: counter, item: item };
        setCompra(date);
        onAdd(date);
      }
    };
  };
  const handleBuy = () => {};
  //Function button Buy

  return (
    <Container>
      <Fade bottom cascade>
        <Row key={item.id} className="ItemDetail">
          <Col xs="6" sm="4">
            <div className="containerSectionDetail">
              <div className="imgDetail">
                <img src={"/images/" + item.image} />
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4">
            <div className="containerSectionDetail">
              <div className="infoDetail">
                <p className="details">
                  {" "}
                  <span className="infoMainDetail">
                    {" "}
                    {item.productName} {item.color}
                  </span>{" "}
                </p>
                <p className="details">
                  {" "}
                  <span>Marca:</span> {item.marca}
                </p>
                <p className="details">
                  {" "}
                  <span>Género:</span> {item.genero}
                </p>
                <p className="details">
                  {" "}
                  <span>Estilo:</span> {item.style}
                </p>
                <p className="details">
                  {" "}
                  <span>Calidad / Talle:</span> {item.calidad} - {item.talle}
                </p>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="containerSectionDetail">
              <h3>
                <span className="skuDetail">SKU:{item.sku}</span>
              </h3>
              <div className="precioDetail">
                <h3>
                  <span className="costDetail">${item.precio} </span>
                </h3>
                <div className="cuotasDetail">
                  <h6>
                    12 Cuotas <span className="cuotasDetail">Sin interés</span>
                  </h6>
                </div>
              </div>
              <div className="counter">
                <ItemCount
                  onAdd={handleAdd}
                  item={item}
                  stock={stock}
                  initial={1}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div class="detail-section">
              <p class="fontDetail">{item.detail1}</p>
              <p class="fontDetail">{item.detail2}</p>
              <p class="fontDetail">{item.detail3}</p>
              <p class="fontDetail">{item.detail4}</p>
            </div>
          </Col>
          <Col sm="4">
            <div class="shipping">
              <p class="shipping-p">
                <TrackIcon width={"20px"} />
                Envío Gratis a todo el país
              </p>
            </div>
          </Col>
          <Col sm="4">
            <div class="col-sm-9">
              <Link to="/cart">
                {compra.cantidad <= 0
                  ? compra.isValid
                  : "no hay articulos" && (
                      <ButtonSuccess text={"Comprar"} onClick={handleBuy} />
                    )}
              </Link>
            </div>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default ItemDetail;
