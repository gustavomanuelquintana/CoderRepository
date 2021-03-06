import React, {useState,useEffect, useContext } from 'react';
import './cart.css';
import {useCartContext} from '../../Context/cartContext';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = () => {
    const {increase,decrease, removeItem} = useCartContext();

    const {cart} = useCartContext();

      const increaseItem = () => {
        increase(product);
        console.log(statuscart);
        //onAdd(compra);
      };

      const decreaseItem = () => {
        decrease(product);
        console.log(statuscart);
        //onAdd(compra);
      };

      const removeItemUnit = () => {
        removeItem(product);
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
                alt={cart[0][0].item.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={statuscart.item.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2 detailItem">
                <h5 className="mb-1">{cart[0][0].item.productName}</h5>
                <p className="mb-1 typeSize">${statuscart.item.precio} </p>
                
            </div>
            <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0 typeSize">{cart[0][0].cantidad}</p>
            </div>
            <div className="col-sm-3  text-right ">
                 <button 
                 onClick={increaseItem}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     cart[0][0].cantidad > 0 &&
                     <button
                    onClick={decreaseItem}
                    className="btn btn-danger btn-sm mb-1 mr-3">
                      <MinusCircleIcon width={"20px"}/>
                    </button>
                 }
                  {
                     cart[0][0].cantidad === 1 &&
                     <button
                    onClick={removeItemUnit}
                    className="btn btn-danger btn-sm mb-1">
                      remove
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default Cartdetail;