import React, {useEffect,useContext } from 'react';
import './cart.css';
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from '../../icons/index';
//import { CartContext } from '../Context/cartContext';

function saveStatusCart(product, itemcart, setItemcart){
    setItemcart(product);
}


const Cartdetail = ({product}) => {
    const [itemcart , setItemcart] = useState([]);

    //const { increase, decrease, removeProduct } = useContext(CartContext);
useEffect(()=>{

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
                <p className="mb-1">${product.item.precio} </p>
                
            </div>
            <div className="col-sm-3 p-2 text-center detailItem ">
            <h5 className="mb-1">Cantidad</h5>
                 <p className="mb-0">{product.cantidad}</p>
            </div>
            <div className="col-sm-3  text-right ">
                 <button 
                 onClick={() => {}}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
                 </button>

                 {
                     product.cantidad > 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                      <MinusCircleIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.cantidad === 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                       <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default Cartdetail;