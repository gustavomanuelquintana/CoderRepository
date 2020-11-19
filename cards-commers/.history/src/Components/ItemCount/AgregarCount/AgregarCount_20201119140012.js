import React from 'react';

const agregarcount = {
    border:"none",
    margin:"0.2em auto",
    background:"#09ae85",
    fontFamily: 'Titillium Web',
    color:"white",
    fontSize:"1em",
}


const ItemCompra= (compra,setCompra,counter) => {
    return ({ stock}) => {
        if (stock <= 0) {
          alert("No hay stock");
        } else {
          setCompra({ isValid: true, cantidad: counter, item: itemcart.item });
        }
      };
  }


export default function AgregarCount({onAdd,item,counter}){
    let [compra, setCompra] = useState({
        isValid: false,
        cantidad: 0,
      });

      useEffect(()=>{
          ItemCompra(item, compra,setCompra,counter,stock);
      });
debugger;


    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>
    )
}