import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageIcon from '../../../Images/HeaderIcon.png';

function PanelHeading(){
    return(
        <Container>
        <Row>
            <Col sm="4">
                <div className="panlIzq">
                     <img src={ImageIcon} width="20px"/>
                     <p>Contactenos</p>
                </div>
            </Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
            </Row>
            </Container>
    )
}

export default PanelHeading;