import React from 'react';
import Col from 'react-bootstrap/Col';

function PanelHeading(){
    return(
        <div className="ContainerHeading">
            <Col sm="4">Elemento1</Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
        </div>
    )
}

export default PanelHeading;