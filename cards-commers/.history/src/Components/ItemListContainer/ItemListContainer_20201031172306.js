import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';


const getList = () => {
    return new Promise( (res) => {
        let products;
        res(
            products = [
                {id:0, image:'https://www.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/5/1/510020aq7732100-1.jpg', productName:'Polo',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'M',
                color: 'Blanco',sku:'700020125628001', precio:'$2.500', cuotas:''},
                {id:1, image:'https://www.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/0/100020dq2636001-1.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Polyester 100%', talle:'L',
                color: 'Celeste',sku:'700020125628002', precio:'$2.500', cuotas:''},
                {id:2, image:'../../../Images/remera-puma.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'XS',
                color: 'Negro',sku:'700020125628003', precio:'$2.500', cuotas:''},
                {id:3, image:'../../../Images/remera-under.jpg', productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Polyester 100%', talle:'XL',
                color: 'Negro/Blanco',sku:'700020125628004', precio:'$2.500', cuotas:''},
                {id:4, image:'../../../Images/remera-topper.jpg', productName:'Remera',
                marca:'Nike',genero:'Masculino', style:'Running', calidad:'Algodon 100%', talle:'XXL',
                color: 'Negro/Blanco',sku:'700020125628005', precio:'$2.500', cuotas:''},
                {id:5, image:'../../../Images/remera-allstar.jpg', productName:'Remera',
                marca:'Nike',genero:'Femenino', style:'Running', calidad:'Algodon 100%', talle:'S',
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