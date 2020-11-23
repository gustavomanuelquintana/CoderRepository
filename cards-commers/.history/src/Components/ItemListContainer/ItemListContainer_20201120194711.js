import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import imageHeader from '../../Images/imageHeader.png';
import {productoItems} from '../Products/Products';
import {getFirestore} from '../../firebase';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


/*const getList = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productoItems);
    }, 2000);
    
  });
};*/

function ItemListContainer({ titulo }) {
  const [itemList, setItemList] = useState([]);
  

  // Use effect
  useEffect(() => {
    const db = getFirestore();
    const itemCollections = db.collections('items');
    
    itemCollections.get().then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log('No results';)
      }
    });



  }, []); // End useEffect

  return (
    <Container className="ItemListContainer">
      <Row>
        <Col sm="12">
          <div class="cabecera">
          <h2>{titulo}</h2>
          <img  src={imageHeader}/>
          </div>
        </Col>
      </Row>
      <Row className="counterSearch mt-4">
  <Col sm="4"><p className="counterProductsStore">({itemList.length}) Products </p></Col>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="form-group">
            <input className="inputListContainer" type="text" name="" placeholder="Search product" className="form-control" id=""/>
          </div>
        </Col>
      </Row>
      <Row className="rowItemListContainer ">
          <ItemList items={itemList} />
      </Row>
    </Container>
  );
}



export default ItemListContainer;