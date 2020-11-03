import React from "react";
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
 
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Row>
        <ItemListContainer titulo='Nuestros Productos'/>
        </Row>
        <Row>
        <ItemDetailContainer titulo='Detalles de productos'/>
        </Row>
        </Container>
    </div>
  );
}

export default App;
