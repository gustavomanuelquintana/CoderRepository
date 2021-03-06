import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams} from 'react-router-dom';
import remeraNike from '../../Images/remera-nike.jpg';
import remeraAdidas from '../../Images/remera-adidas.jpg';
import remeraPuma from '../../Images/remera-puma.jpg';
import remeraTopper from '../../Images/remera-topper.jpg';
import remeraUnder from '../../Images/remera-under.jpg';
import remeraAllstar from '../../Images/remera-allstar.jpg';


const getDetailInfo = () => {
    return new Promise( (res) => {

        setTimeout( () => { 
            const products = [
                {
                  id: "0",
                  image: remeraNike,
                  productName: "Remera",
                  marca: "Nike",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "M",
                  color: "Blanco",
                  sku: "700020125628001",
                  precio: "$3.500",
                  cuotas: "",
                },
                {
                  id: "1",
                  image: remeraAdidas,
                  productName: "Remera",
                  marca: "Adidas",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Polyester 100%",
                  talle: "L",
                  color: "Celeste",
                  sku: "700020125628002",
                  precio: "$3.100",
                  cuotas: "",
                },
                {
                  id:"2",
                  image: remeraPuma,
                  productName: "Remera",
                  marca: "Puma",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "XS",
                  color: "Negro",
                  sku: "700020125628003",
                  precio: "$3.000",
                  cuotas: "",
                },
                {
                  id: "3",
                  image: remeraTopper,
                  productName: "Remera",
                  marca: "Topper",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Polyester 100%",
                  talle: "XL",
                  color: "Gris",
                  sku: "700020125628004",
                  precio: "$2.100",
                  cuotas: "",
                },
                {
                  id: "4",
                  image: remeraUnder,
                  productName: "Remera",
                  marca: "Under",
                  genero: "Masculino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "XXL",
                  color: "Negro/Blanco",
                  sku: "700020125628005",
                  precio: "$2.350",
                  cuotas: "",
                },
                {
                  id: "5",
                  image: remeraAllstar,
                  productName: "Remera",
                  marca: "All Star",
                  genero: "Femenino",
                  style: "Running",
                  calidad: "Algodon 100%",
                  talle: "S",
                  color: "Rojo",
                  sku: "700020125628006",
                  precio: "$1.800",
                  cuotas: "",
                },
            ]
            res(products);
        },2000);
    });
}


function ItemDetailContainer({tituloDetail}){
    const [itemDetail, setItemDetail] = useState(null);
    const [loading,setLoading] = useState(null);
    const { id } = useParams();
    let idItems;
    
  
    // Use effect
    useEffect( () => {
        setLoading(true);
        getDetailInfo(id).then( res => {
            setLoading(false);
            idItems = res.filter( (item) =>{
              return item.id === id;

            }).map( ({id, image, productName, marca,genero,style,calidad,talle,color,sku,precio,cuotas}) => {
                  return {id, image, productName, marca,genero,style,calidad,talle,color,sku,precio,cuotas};
            });
            setItemDetail(idItems);

        });
    },[]); // End useEffect
    console.log("itemDetail:" + itemDetail);

    return (<>
        <Spinner loading={loading}/>
        <div className="containerDetail">
            <Row>
              <Col>
              <ul>
                <li>Regresar al catálogo</li>
              </ul>
              </Col>
              <Col>
              <h2>{tituloDetail}</h2>
              </Col>
            </Row>
            <Row>
        {itemDetail && <ItemDetail item={itemDetail} />}
        </Row>
        </div>
        </>
    );
}



export default ItemDetailContainer;