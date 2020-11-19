import React from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
export default function AgregarCount({onAdd,items,counter}){
    let [itemcart, setItem] = useState(items);
    let [compra, setCompra] = useState({
        isValid: true,
        cantidad: counter,
        item:itemcart.item,
      });

    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter, compra)}>Agregar al Carrito</button> 
        </div>
    )
}