import React from 'react';

function Cart({titleCart}){
    return (
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img alt="image" style={{margin: "0 auto", maxHeight: "50px"}} className="img-fluid d-block"
           />
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">Nombre del Producto</h5>
            </div>
        </div>
    )
}


export default Cart;