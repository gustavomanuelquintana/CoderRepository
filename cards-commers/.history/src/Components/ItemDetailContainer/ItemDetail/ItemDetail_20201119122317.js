import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCount from "../../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useCartContext } from "../../../Components/Context/cartContext";


function ItemDetail(item) {
  //Estados ItemDetail para
  const {onAdd} = useCartContext();
  let [compra, setCompra] = useState({
    isValid: false,
    id: null,
    cantidad: 0,
    nombre: "",
    precio: 0,
  });
  let [itemcart, setItem] = useState(item);

  let availableProducts = 14;
  //Function add to Cart
  const handleAdd = (counter) => {
    return ({ stock, onAdd(compra) }) => {
      if (stock <= 0) {
        alert("No hay stock");
      } else {
        setCompra({ isValid: true, cantidad: counter, item: itemcart.item });
      }
    };
  };
  //Function button Buy
  const handleBuy = () => {
    
    //onAdd(compra);
  };

  return (
    <Container>
      <Row key={item.item.id} className="ItemDetail">
        <Col xs="6" sm="4">
          <div className="containerSectionDetail">
            <div className="imgDetail">
              <img src={item.item.image} />
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
                  {item.item.productName} {item.item.color}
                </span>{" "}
              </p>
              <p className="details">
                {" "}
                <span>Marca:</span> {item.item.marca}
              </p>
              <p className="details">
                {" "}
                <span>Género:</span> {item.item.genero}
              </p>
              <p className="details">
                {" "}
                <span>Estilo:</span> {item.item.style}
              </p>
              <p className="details">
                {" "}
                <span>Calidad / Talle:</span> {item.item.calidad} -{" "}
                {item.item.talle}
              </p>
            </div>
          </div>
        </Col>
        <Col sm="4">
          <div className="containerSectionDetail">
            <h3>
              <span className="skuDetail">SKU:{item.item.sku}</span>
            </h3>
            <div className="precioDetail">
              <h3>
                <span className="costDetail">${item.item.precio} </span>
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
                availableProducts={availableProducts}
                initial={1}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <div class="detail-section">
            <p class="fontDetail">{item.item.detail1}</p>
            <p class="fontDetail">{item.item.detail2}</p>
            <p class="fontDetail">{item.item.detail3}</p>
            <p class="fontDetail">{item.item.detail4}</p>
          </div>
        </Col>
        <Col sm="4">
          <div class="shipping">
            <p class="shipping-p">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-truck"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                />
              </svg>
              Envío Gratis a todo el país
            </p>
          </div>
        </Col>
        <Col sm="4">
          <div class="detail-section">
            <Link to="/cart">
              {compra.cantidad <= 0
                ? compra.isValid
                : "no hay articulos" && (
                    <button
                      onClick={handleBuy}
                      class="btn btn-secondary btn-lg btn-block"
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-arrow-right-square-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
                        />
                      </svg>
                      Comprar
                    </button>
                  )}
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;