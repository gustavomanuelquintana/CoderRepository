import React from "react";
import {Link} from 'react-router-dom';
import ImageNavBar from "../../Images/cards-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import NavBarItems from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";

const styleFont = {
  fontSize: 20,
  borderBottom: "1px solid red",
};

function NavBar() {
  return (
    <NavBarItems className="NavBar" collapseOnSelect expand="lg" >
  <NavBarItems.Brand href="#home">
    <img className="Logo-navBar" src={ImageNavBar}/>
  </NavBarItems.Brand>
  <NavBarItems.Toggle aria-controls="responsive-navbar-nav" />
  <NavBarItems.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/"><Nav className="navLinks">home</Nav></Link>
      <Nav.Link className="navLinks">Promociones</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item className="dropdown" href="#action/3.1">Indumentaria</NavDropdown.Item>
        <NavDropdown.Item className="dropdown" href="#action/3.2">Calzado</NavDropdown.Item>
        <NavDropdown.Item className="dropdown" href="#action/3.3">Accesorios</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Boxeo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Fútbol</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">Tennis</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Natacion</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">Polo</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
        <CartWidget />
      </Nav.Link>
    </Nav>
  </NavBarItems.Collapse>
</NavBarItems>
  );
}

export default NavBar;
