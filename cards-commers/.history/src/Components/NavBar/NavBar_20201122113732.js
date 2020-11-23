import React from "react";
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
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

const staticCategories = [
  {id:'remeras', name: 'Remeras'},
  {id:'Gorros', name: 'Gorros'},
  {id:'Buzos', name: 'Buzos'},
  {id:'Camperas', name: 'Camperas'},
  {id:'Accesorios', name: 'Accesorios'}
];

function NavBar() {

  return (
    <NavBarItems className="NavBar" collapseOnSelect expand="lg" >
  <NavBarItems.Brand href="#home">
    <img className="Logo-navBar" src={ImageNavBar}/>
  </NavBarItems.Brand>
  <NavBarItems.Toggle aria-controls="responsive-navbar-nav" />
  <NavBarItems.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
        <CartWidget />
    </Nav>
  </NavBarItems.Collapse>
</NavBarItems>
  );
}

export default NavBar;
