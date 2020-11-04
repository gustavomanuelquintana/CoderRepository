import React from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
 
  return (
    <div className="App">
      <Container>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer titulo="Nuestros Productos" />
          </Route>
          <Route exact path="/item/:id/">
          <ItemDetailContainer tituloDetail='Detalles de Productos'/>
          </Route>
        </Switch>
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
