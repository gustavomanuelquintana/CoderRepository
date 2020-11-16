import React, { useContext } from 'react';
//import { CartContext } from '../Context/cartContext';


const Cartdetail = ({product}) => {

    //const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.item.name}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.productName}</h5>
                <p className="mb-1">Price: {product.price} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.cantidad}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <button 
                 onClick={() => {}}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                    {/*<PlusCircleIcon width={"20px"}/> */}
                    +
                 </button>

                 {
                     product.cantidad > 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                        {/* <MinusCircleIcon width={"20px"}/> */}
                        -
                    </button>
                 }

                {
                     product.cantidad === 1 &&
                     <button
                    onClick={() => {}}
                    className="btn btn-danger btn-sm mb-1">
                        {/*<TrashIcon width={"20px"}/> */}
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default Cartdetail;