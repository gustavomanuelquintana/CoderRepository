import React from "react";
import ImageNavBar from "../../Images/cards-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Dropdown from "react-bootstrap/Dropdown";
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
      <Nav.Link className="navLinks" href="#features">home</Nav.Link>
      <Nav.Link className="navLinks" href="#pricing">Promociones</Nav.Link>
      <NavDropdown className="btn from-top" title="Catalogo" id="collasible-nav-dropdown">
        <NavDropdown.Item className="dropdown" href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown" href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item className="dropdown" href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">
        <CartWidget />
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </NavBarItems.Collapse>
</NavBarItems>
  );
}

export default NavBar;
