import React, {setState} from "react";
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  const [loading,setLoading]
 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
          <ItemListContainer titulo="Nuestros Productos" />
          </Route>
          <Route exact path="/detail/:id/">
          <ItemDetailContainer tituloDetail='Detalles de Productos'/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
