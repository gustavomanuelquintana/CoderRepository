import React from "react";
import ImageNavBar from "../Images/cards-logo.png";
import CartWidget from "./Components/CartWidget";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";

const styleFont = {
  fontSize: 20,
  borderBottom: "1px solid red",
};

function NavBar() {
  return (
    <div className=" col-12">
      <div className="header-navBar col-12">
        <div className="row col-12">
          <div className="Logo-navBar col-1">
            <a href="index.html">
            <img src={ImageNavBar} alt="logo" width="75" height="70" />
            </a>
          </div>
          <div className="Links-navBar col-10 mt-3">
            <ul className="List-navBar">
              <li>
                <Dropdown>
                  <Dropdown.Toggle  variant="danger" id="dropdown-basic">
                    Categorías
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item   href="#/action-1">
                      Deportes / Fitness
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Hogar / Electrodomésticos
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Vehículos</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <a style={styleFont} href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Promotions </a>
              </li>
              <li>
                <a href="#">Galery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="carrito-navBar col-1">
            <a href="#">
           { /*<img alt="" src={imageCarrito} width="70" height="70" />{" "}*/}
            <CartWidget />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
