import React from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Cart from "./Components/Cart/Cart";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
 
  return (
    <div className="App">
      <Container-fluid>
      <BrowserRouter>
        <NavBar />
        <Container>
        <Switch>
          <Route exact path="/">
          <ItemListContainer titulo="Nuestros Productos" />
          </Route>
          <Route exact path="/item/:id">
          <ItemDetailContainer tituloDetail='Detalles de Productos'/>
          </Route>
          <Route exact path="/cart">
          <Cart titleCart='Proceso Finalización de Compra'/>
          </Route>
        </Switch>
        </Container>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
