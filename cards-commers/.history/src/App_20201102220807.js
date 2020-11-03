import React from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
{/* import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";*/}


function App() {
 
  return (
    <div className="App">
        <NavBar />
        <ItemDetailContainer titulo='Nuestros Productos'/>
        {/* <ItemListContainer titulo='Nuestros Productos'/>*/}
    </div>
  );
}

export default App;
