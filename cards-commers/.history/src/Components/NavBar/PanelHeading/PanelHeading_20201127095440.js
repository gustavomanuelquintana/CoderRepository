import React from 'react';
import './PanelHeading.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageIcon from '../../../Images/HeaderIcon.png';
import {EmailIcon,PhoneIcon} from '../../icons/index';

function PanelHeading(){
    return(
        <Row>
            <Col sm="4">
                <div className="panlIzq">
                     <img src={ImageIcon}/>
                     <p className="ml-2"><EmailIcon width={"20px"}/>Contactenos</p>
                     <p className="ml-2"><PhoneIcon width={"20px"}/>Contactenos</p>
                </div>
            </Col>
            <Col sm="4">Elemento2</Col>
            <Col sm="4">Elemento3</Col>
            </Row>
    )
}

export default PanelHeading;