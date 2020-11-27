import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ImageNavBar from "../../Images/cards-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import NavBarItems from "react-bootstrap/NavBar";
import { HousePage } from "../icons/index";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

const staticCategories = [
  { id: "remeras", name: "Remeras" },
  { id: "gorras", name: "Gorros" },
  { id: "buzos", name: "Buzos" },
  { id: "camperas", name: "Camperas" },
  { id: "accesorios", name: "Accesorios" },
];

function NavBar() {
  return (
    <div class="panel panel-warning">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavBarItems.Brand href="/">
        <img className="Logo-navBar" src={ImageNavBar} />
      </NavBarItems.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="navLinks" style={{ color: "white" }} href="/">
            home <HousePage width={"20px"} />
          </Nav.Link>
          <Nav.Link className="navLinks" style={{ color: "white" }}>
            Promociones
          </Nav.Link>
          <NavDropdown
            className="DropdownCategory"
            title="Categorias"
            id="collasible-nav-dropdown"
          >
            {staticCategories.map((cat) => (
              <li key={cat.id}>
                <NavDropdown.Item
                  className="dropdown"
                  category={cat.name}
                  href={`/category/${cat.id}`}
                >
                  {cat.name}
                </NavDropdown.Item>
              </li>
            ))}
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} href="#memes">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
</div>
  );
}

export default NavBar;
