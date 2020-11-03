import React from "react";
import NavBarItems from "./Components/NavBar/NavBarItems";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
{/*import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";*/}

function App() {
 
  return (
    <div className="App">
        <NavBarItems />
        {/*<ItemDetailContainer titulo='Detalle Productos'/>*/}
        <ItemListContainer titulo='Nuestros Productos'/>
    </div>
  );
}

export default App;
