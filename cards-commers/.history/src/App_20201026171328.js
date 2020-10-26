import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  const inCharge = (counter) => {
    return ({stock}) => {
      if (stock <=0){
        alert('No hay stock')
      }else {
        alert(`Se van agregar ${counter} articulos`)
      }
    }
  }

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer titulo='Ofertas de la semana'/>
        <ItemCount onAdd={inCharge}  stock="12" initial="1" />
    </div>
  );
}

export default App;
