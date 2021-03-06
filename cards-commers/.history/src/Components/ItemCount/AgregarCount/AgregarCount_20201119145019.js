import React,{useEffect, useState} from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
const valueCompra = (itemcart,compra,setCompra,counter) => {
    if(compra.length > 0){
        setCompra({ isValid: true, cantidad: counter, item: itemcart.item });
    } else {
        compra
    }
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
      

      useEffect( () => {
        valueCompra(itemcart,compra,setCompra,counter)
      });


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter,stock)}>Agregar al Carrito</button> 
        </div>
    )
}