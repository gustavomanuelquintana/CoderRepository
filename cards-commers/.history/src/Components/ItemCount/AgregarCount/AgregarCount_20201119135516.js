import React from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}

const ItemCompra= (cart,countercart,setCountercart) => {
    let counter = 0;
    let itemCounter = cart.forEach( value => counter += value.cantidad);
    setCountercart(counter)
  }


export default function AgregarCount({onAdd,item,counter}){
    let [compra, setCompra] = useState({
        isValid: false,
        cantidad: 0,
      });

      useEffect(()=>{
          ItemCompra(item, compra,setCompra);
      });
debugger;


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>
    )
}