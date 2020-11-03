import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import remeraNike from "../../Images/remera-nike.jpg";
import remeraAdidas from "../../Images/remera-adidas.jpg";
import remeraPuma from "../../Images/remera-puma.jpg";
import remeraTopper from "../../Images/remera-topper.jpg";
import remeraUnder from "../../Images/remera-under.jpg";
import remeraAllstar from "../../Images/remera-allstar.jpg";

const getList = () => {
  return new Promise((res) => {
    setTimeout(() => {
      let products;
      res(
        (products = [
          {
            id: 0,
            image: remeraNike,
            productName: "Remera",
            marca: "Nike",
            genero: "Masculino",
            style: "Running",
            calidad: "Algodon 100%",
            talle: "M",
            color: "Blanco",
            sku: "700020125628001",
            precio: "$3.500",
            cuotas: "",
          },
          {
            id: 1,
            image: remeraAdidas,
            productName: "Remera",
            marca: "Adidas",
            genero: "Femenino",
            style: "Running",
            calidad: "Polyester 100%",
            talle: "L",
            color: "Celeste",
            sku: "700020125628002",
            precio: "$3.100",
            cuotas: "",
          },
          {
            id: 2,
            image: remeraPuma,
            productName: "Remera",
            marca: "Puma",
            genero: "Femenino",
            style: "Running",
            calidad: "Algodon 100%",
            talle: "XS",
            color: "Negro",
            sku: "700020125628003",
            precio: "$3.000",
            cuotas: "",
          },
          {
            id: 3,
            image: remeraTopper,
            productName: "Remera",
            marca: "Topper",
            genero: "Masculino",
            style: "Running",
            calidad: "Polyester 100%",
            talle: "XL",
            color: "Gris",
            sku: "700020125628004",
            precio: "$2.100",
            cuotas: "",
          },
          {
            id: 4,
            image: remeraUnder,
            productName: "Remera",
            marca: "Under",
            genero: "Masculino",
            style: "Running",
            calidad: "Algodon 100%",
            talle: "XXL",
            color: "Negro/Blanco",
            sku: "700020125628005",
            precio: "$2.350",
            cuotas: "",
          },
          {
            id: 5,
            image: remeraAllstar,
            productName: "Remera",
            marca: "All Star",
            genero: "Femenino",
            style: "Running",
            calidad: "Algodon 100%",
            talle: "S",
            color: "Rojo",
            sku: "700020125628006",
            precio: "$1.800",
            cuotas: "",
          },
        ])
      );
    }, 2000);
  });
};

function ItemListContainer({ titulo }) {
  const [itemList, setItemList] = useState([]);

  // Use effect
  useEffect(() => {
    getList().then((mercaderia) => {
      setItemList(mercaderia);
    });
  }, []); // End useEffect

  return (
    <Container className="ItemListContainer">
      <Row>
        <Col sm="12">
          <h2>{titulo}</h2>
        </Col>
      </Row>
      <Row>
        <Col sm="3">
          <ItemList items={itemList} />
        </Col>
      </Row>
    </Container>
  );
}



export default ItemListContainer;