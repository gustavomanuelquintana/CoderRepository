import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import remeraNike from '../../Images/remera-nike.jpg';
import remeraAdidas from '../../Images/remera-adidas.jpg';
import remeraPuma from '../../Images/remera-puma.jpg';
import remeraTopper from '../../Images/remera-topper.jpg';
import remeraUnder from '../../Images/remera-under.jpg';
import remeraAllstar from '../../Images/remera-allstar.jpg';


const getList = () => {
    return new Promise( (res) => {
        let products;
        res(
            products = [
                {id:0, image:remeraNike, productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Blanco',sku:'700020125628001', precio:'$2.500', cuotas:''},
                {id:1, image:remeraAdidas, productName:'Remera',
                marca:'Adidas',genero:'Femenino', style:'Running', calidad:'Polyester 100%', talle:'L',
                color: 'Celeste',sku:'700020125628002', precio:'$2.500', cuotas:''},
                {id:2, image:remeraPuma, productName:'Remera',
                marca:'Puma',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'XS',
                color: 'Negro',sku:'700020125628003', precio:'$2.500', cuotas:''},
                {id:3, image:remeraTopper, productName:'Remera',
                marca:'Topper',genero:'Masculino', style:'Running', calidad:'Polyester 100%', talle:'XL',
                color: 'Gris',sku:'700020125628004', precio:'$2.500', cuotas:''},
                {id:4, image:remeraUnder, productName:'Remera',
                marca:'Under',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'XXL',
                color: 'Negro/Blanco',sku:'700020125628005', precio:'$2.500', cuotas:''},
                {id:5, image:remeraAllstar, productName:'Remera',
                marca:'All Star',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'S',
                color: 'Negro/Blanco',sku:'700020125628006', precio:'$2.500', cuotas:''}
            ]
        )
    });
}


function ItemListContainer({titulo}){
    const [itemList, setItemList] = useState([]);
  
    // Use effect
    useEffect( () => {
        getList().then( mercaderia => {
           setItemList(mercaderia);
        });
    },[]); // End useEffect

    return (
        <div className="container">
            <h2>{titulo}</h2>
        <ItemList items={itemList} />
        </div>
    );
}



export default ItemListContainer;