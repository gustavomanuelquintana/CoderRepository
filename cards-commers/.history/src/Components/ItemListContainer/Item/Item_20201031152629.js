import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Item.css';




function Item(listProducts){   
    console.log(listProducts);
    return listProducts.map( (listProducts) => ({listProducts}) );

}

export default Item;