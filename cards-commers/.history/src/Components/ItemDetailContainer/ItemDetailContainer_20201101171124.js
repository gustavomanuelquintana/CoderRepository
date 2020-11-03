import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import remeraNike from '../../Images/remera-nike.jpg';


const getDetailInfo = () => {
    return new Promise( (res) => {
        setTimeout( () => {
            let products;
        res(
            products = [
                {id:0, image:remeraNike, productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Blanco',sku:'700020125628001', precio:'$3.500', cuotas:''}
            ]
        )
        },2000);
    });
}


function ItemDetailContainer({titulo}){
    const [itemDetail, setItemDetail] = useState([]);
  
    // Use effect
    useEffect( () => {
        getDetailInfo().then( mercaderia => {
            setItemDetail(mercaderia);
        });
    },[]); // End useEffect

    return (
        <div className="container">
            <h2>{titulo}</h2>
        <ItemDetail items={itemDetail} />
        </div>
    );
}



export default ItemDetailContainer;