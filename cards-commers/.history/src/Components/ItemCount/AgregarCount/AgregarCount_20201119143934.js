import React from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
export default function AgregarCount({onAdd,stock,item,counter}){
    let [compra, setCompra] = useState({
        isValid: false,
        id: null,
        cantidad: 0,
        nombre: "",
        precio: 0,
      });
      debugger;
      let [itemcart, setItem] = useState(item);


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter,stock)}>Agregar al Carrito</button> 
        </div>
    )
}