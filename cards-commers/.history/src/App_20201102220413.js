import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
 
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer titulo='Nuestros Productos'/>
    </div>
  );
}

export default App;
