import React from "react";
import ImageNavBar from "../../Images/cards-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import NavBarItems from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css";


const staticCategories = [
  {id:'remeras', name: 'Remeras'},
  {id:'gorras', name: 'Gorros'},
  {id:'buzos', name: 'Buzos'},
  {id:'camperas', name: 'Camperas'},
  {id:'accesorios', name: 'Accesorios'}
];

function NavBar() {

  return (
    <NavBarItems className="NavBar" collapseOnSelect expand="lg" >
  <NavBarItems.Brand href="/">
    <img className="Logo-navBar" src={ImageNavBar}/>
  </NavBarItems.Brand>
  <NavBarItems.Toggle aria-controls="responsive-navbar-nav" />
  <NavBarItems.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="navLinks" href="/">home</Nav.Link>
      <Nav.Link className="navLinks">Promociones</Nav.Link>
      <NavDropdown className="DropdownCategory" title="Categorias" id="collasible-nav-dropdown">
        {
          staticCategories.map( cat => 
          <NavDropdown.Item className="dropdown" category={cat.name} href={`/category/${cat.id}`}>{cat.name}</NavDropdown.Item>
          )
        }
      </NavDropdown>
    </Nav>
    <Nav>
        <CartWidget />
    </Nav>
  </NavBarItems.Collapse>
</NavBarItems>
  );
}

export default NavBar;
