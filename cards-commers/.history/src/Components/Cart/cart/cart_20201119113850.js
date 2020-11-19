import React, {useState,useEffect, useContext } from 'react';
import './cart.css';
import {useCartContext} from '../../Context/cartContext';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {
    const {increase,decrease} = useCartContext();


      const increaseItem = () => {
        increase(product);
        //onAdd(compra);
      };

      const decreaseItem = () => {
        decrease(product);
        //onAdd(compra);
      };


    //const { increase, decrease, removeProduct } = useContext(CartContext);
    useEffect(()=>{
        console.log("mounted");
        return(()=>{
            console.log("dismounted");
        })
    },[product]);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-3 p-2">
                <img
                alt={product.item.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={product.item.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2 detailItem">
                <h5 className="mb-1">{product.item.productName}</h5>
                <p className="mb-1 typeSize">${product.item.precio} </p>
                
            </div>
            <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0 typeSize">{product.cantidad}</p>
            </div>
            <div className="col-sm-3  text-right ">
                 <button 
                 onClick={increaseItem}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     product.cantidad > 0 &&
                     <button
                    onClick={decreaseItem}
                    className="btn btn-danger btn-sm mb-1">
                      <MinusCircleIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default Cartdetail;