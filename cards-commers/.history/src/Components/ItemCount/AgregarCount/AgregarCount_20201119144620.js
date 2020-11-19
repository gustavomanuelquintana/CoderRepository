import React,{useEffect, useState} from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}
const compra= (itemcart,compra,setCompra) => {
    let counter = 0;
    let itemCounter = cart.forEach( value => counter += value.cantidad);
    setCountercart(counter)
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
        compra(itemcart,compra,setCompra)
      });


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter,stock)}>Agregar al Carrito</button> 
        </div>
    )
}