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

const myFunction= (itemcart,compra,stock,setCompra) => {
    return () => {
        if (stock <= 0) {
          alert("No hay stock");
        } else {
          const date= { isValid: true, cantidad: counter, item: itemcart.item };
          setCompra(date);
        }
      };
  }


export default function AgregarCount({onAdd,item,stock,counter}){
    let [compra, setCompra] = useState({
        isValid: false,
        id: null,
        cantidad: 0,
        nombre: "",
        precio: 0,
      });
      let [itemcart, setItem] = useState(item);

      useEffect(() => {
          myFunction(itemcart,compra,setCompra,stock);
      },[itemcart]);


debugger;

    return(
        <div>
            <button style={agregarcount} onClick={onAdd(counter)}>Agregar al Carrito</button> 
        </div>

    )
}