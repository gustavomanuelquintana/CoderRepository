import React from "react";
import ImageNavBar from "../Images/cards-logo.png";
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
        <div className="Logo-navBar col-2">
          <img src={ImageNavBar} alt='logo' />
        </div>
        <div className="Links-navBar col-8 mt-3">
          <ul className="List-navBar">
            <li><a style={styleFont} href="#">Home</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Promotions </a></li>
            <li><a href="#">Galery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="carrito-navBar col-2">
            <h1>Probando</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
