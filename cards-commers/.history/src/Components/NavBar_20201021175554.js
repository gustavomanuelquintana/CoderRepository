import React from "react";
import ImageNavBar from "../Images/cards-logo.png";
import imageCarrito from "../Images/carrito-img.png";
import './NavBar.css';

const styleFont = {
    fontSize: 20,
    borderBottom: '1px solid red'
}

function NavBar() {
  return (
    <div className=" col-12">
      <div className="header-navBar col-12">
        <div className="row col-12">
        <div className="Logo-navBar col-1">
          <img src={ImageNavBar} 
          alt='logo' 
          width="75"
          height="70"
          />
        </div>
        <div>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </div>
        <div className="carrito-navBar col-1">
          <img
          alt=""
          src= {imageCarrito}
          width="70"
          height="70"
        />{' '}
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
