import React from 'react';
import {useCartContext} from '../../Components/Context/cartContext';


const Cart = () => {
    const {cart} = useCartContext();
    console.log(`cart en pantalla: ${cart.cantidad}`);
    return (
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img src="" alt="image" style={{margin: "0 auto", maxHeight: "50px"}} className="img-fluid d-block"
           />
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{cart.item[0].color}</h5>
                <p className="mb-1">Precio:</p>
            </div>
            <div className="col-sm-2 p-2 text-center">
                <p className="mb-0">Cantidad:</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                <button onClick={() => {}} className="btn btn-primary btn-sm mr-2 mb-1">Incrementar</button>
                
            </div>
        </div>
    )
}

export default Cart;