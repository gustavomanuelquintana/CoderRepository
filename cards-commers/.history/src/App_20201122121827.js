import React from "react";
import './App.css';
import {CartProvider, useCartContext} from './Components/Context/cartContext';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import CartItem from "./Components/Cart/CartItem";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
 
  return (
    <CartProvider defaultCart={[]}>
      <Container-fluid>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer titulo="Nuestros Productos" />
          </Route>
          <Route exact path="/category/:categoryId">
          <ItemListContainer titulo="Nuestros productos" />
          </Route>
          <Route exact path="/item/:id">
          <ItemDetailContainer tituloDetail='Detalles de Productos'/>
          </Route>
          <Route exact path="/cart">
          <CartItem titleCart='Proceso Finalización de Compra'/>
          </Route>
        </Switch>
      </BrowserRouter>
      </Container-fluid>
    </CartProvider>
  );
}

export default App;
