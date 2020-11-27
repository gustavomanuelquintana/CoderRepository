import React from 'react';
import './PanelHeading.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageIcon from '../../../Images/HeaderIcon.png';

function PanelHeading(){
    return(
        <Container>
            <Col sm="4">
                <div className="panlIzq">
                     <img src={ImageIcon}/>
                     <p>Contactenos</p>
                </div>
            </Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
            </Container>
    )
}

export default PanelHeading;