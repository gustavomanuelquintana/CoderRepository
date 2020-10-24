import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer titulo='Ofertas de la semana'/>
    </div>
  );
}

export default App;
