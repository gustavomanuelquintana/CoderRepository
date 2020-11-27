import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PanelHeading(){
    return(
        <div className="ContainerHeading">
            <Row>
            <Col sm="4">Elemento1</Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
            </Row>
        </div>
    )
}

export default PanelHeading;