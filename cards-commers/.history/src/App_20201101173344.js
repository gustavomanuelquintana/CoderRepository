import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
{/*import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";*/}

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
        <ItemCount onAdd={handleAdd}  stock={stock} initial={2} />
        <ItemDetailContainer titulo='Detalle Productos'/>
        {/*<ItemListContainer titulo='Nuestros Productos'/>*/}
    </div>
  );
}

export default App;
