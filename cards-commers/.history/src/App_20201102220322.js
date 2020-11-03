import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
 
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer titulo='Nuestros Productos'/>
        <ItemDetailContainer titulo='Detalles de productos'/>
    </div>
  );
}

export default App;
