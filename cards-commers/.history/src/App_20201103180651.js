import React from "react";
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
          <ItemListContainer titulo="Nuestros Productos" />
          </Route>
          <Route path="/detail/:id/">
          <ItemDetailContainer tituloDetail='Detalles de Productos'/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
