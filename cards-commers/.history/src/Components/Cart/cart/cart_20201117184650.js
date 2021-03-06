import React, {useState,useEffect, useContext } from 'react';
import './cart.css';
import {useCartContext} from '../../Context/cartContext';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {

    const [statuscart, setStatuscart] = useState(product);
    const {onRemove} = useCartContext();

    const removeItem = () => {
        onRemove(product);
        console.log(statuscart);
        //onAdd(compra);
      };


    //const { increase, decrease, removeProduct } = useContext(CartContext);
    useEffect(()=>{
        setStatuscart(product);
        console.log("mounted");
        return(()=>{
            console.log("dismounted");
        })
    },[product]);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-3 p-2">
                <img
                alt={statuscart.item.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={statuscart.item.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2 detailItem">
                <h5 className="mb-1">{statuscart.item.productName}</h5>
                <p className="mb-1 typeSize">${statuscart.item.precio} </p>
                
            </div>
            <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0 typeSize">{statuscart.cantidad}</p>
            </div>
            <div className="col-sm-3  text-right ">
                 <button 
                 onClick={() => {}}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     statuscart.cantidad > 0 &&
                     <button
                    onClick={()=>{console.log("probando")}}
                    className="btn btn-danger btn-sm mb-1">
                      <MinusCircleIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default Cartdetail;