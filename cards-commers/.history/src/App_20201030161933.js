import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

function App() {
  let stock= 14;
  const handleAdd = (counter) => {
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
        <ItemListContainer titulo='Aquí van los Items'/>
        <ItemCount onAdd={handleAdd}  stock={stock} initial={2} />
    </div>
  );
}

export default App;
