import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {CartContext} from './../Context/cartContext';

import CartItem from '../Cart/CartItem';



const CartProducts = () => {

    const { cart } = useContext(CartContext);
    console.log(cart);

    return (
        <Container>
        <Row>
            <Col sm="12">
                {
                    
                }
            </Col>
        </Row>
    </Container>
    )
}

export default CartProducts;