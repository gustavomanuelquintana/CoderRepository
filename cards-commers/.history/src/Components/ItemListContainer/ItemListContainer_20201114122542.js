import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import {productoItems} from '../Products/Products';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const getList = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productoItems);
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
    <Container>
      <Row>
        <Col sm="12">
          <h2>{titulo}</h2>
        </Col>
      </Row>
      <Row>
  <Col sm="4"><p className="counterProductsStore">({itemList.length}) Products </p></Col>
        <Col sm="4"This is the Store Page></Col>
        <Col sm="4">
          <div className="form-group">
            <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
          </div>
        </Col>
      </Row>
      <Row className="rowItemListContainer">
          <ItemList items={itemList} />
      </Row>
    </Container>
  );
}



export default ItemListContainer;