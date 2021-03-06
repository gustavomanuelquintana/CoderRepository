import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageIcon from '../../../Images/HeaderIcon.png';

function PanelHeading(){
    return(
        <Container className="text-center">
        <Row>
            <Col sm="4">
                <Col sm="1">
                    <img src={ImageIcon}/>
                </Col>
                <Col sm="1">
                    <p>Contactenos</p>
                </Col>
            </Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
            </Row>
            </Container>
    )
}

export default PanelHeading;