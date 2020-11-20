import React from 'react';
import {Link} from 'react-router-dom';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}

const myFunction= (cart,countercart,stock,setCountercart) => {
    let counter = 0;
    let itemCounter = cart.forEach( value => counter += value.cantidad);
    setCountercart(counter)
  }


export default function AgregarCount({onAdd,item, counter}){
    let [compra, setCompra] = useState({
        isValid: false,
        id: null,
        cantidad: 0,
        nombre: "",
        precio: 0,
      });
      let [itemcart, setItem] = useState(item);

      useEffect(() => {
          myFunction(itemcart,compra,setCompra );
      },[itemcart]);


debugger;

    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>

    )
}