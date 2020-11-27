import React from 'react';
import './PanelHeading.css';
import Container from 'react-bootstrap/Container';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageIcon from '../../../Images/HeaderIcon.png';
import {EmailIcon,PhoneIcon,TrackIcon,ExclamationIcon,GeoIcon} from '../../icons/index';

function PanelHeading(){
    return(
        <Row>
            <Col sm="3">
                <div className="panlIzq">
                     <img src={ImageIcon}/>
                     <p className="ml-2"><EmailIcon width={"20px"}/>Contactenos</p>
                     <p className="ml-2"><PhoneIcon width={"20px"}/>0800-333-CARD(1705)</p>
                </div>
            </Col>
            <Col sm="6">
                <div className="dateCentral">
                    <h6><TrackIcon color={"orange"} width={"20px"}/>Envío Gratis a partír de <span>$5300</span></h6>
                </div>
                <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
            </Col>
            <Col sm="3">
                <div className="panlRight">
                     <p><ExclamationIcon width={"20px"}/>¿Cómo Comprar?</p>
                     <p><GeoIcon width={"20px"}/>Sucursales</p>
                </div></Col>
            </Row>
    )
}

export default PanelHeading;