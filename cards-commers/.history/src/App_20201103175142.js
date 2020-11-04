import React from "react";
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
{/* import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';*/}



function App() {
 
  return (
    <div className="App">
        <NavBar />
        {/*<ItemDetailContainer tituloDetail='Detalles de Productos'/> */}
        <ItemListContainer titulo='Nuestros Productos'/>
    </div>
  );
}

export default App;
