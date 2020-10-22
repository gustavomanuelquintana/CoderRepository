import React from "react";
import ImageNavBar from "../Images/cards-logo.png";
import './NavBar.css';

const styleFont = {
    fontSize: 20,
    borderBottom: '1px solid red'
}

function NavBar() {
  return (
    <div className="container">
      <div className="header-navBar col-12">
        <div className="row">
        <div className="Logo-navBar col-2">
          <img src={ImageNavBar} alt='logo' />
        </div>
        <div className="Links-navBar col-10">
          <ul className="List-navBar">
            <li><a style={styleFont} href="#">Home</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Promotions </a></li>
            <li><a href="#">Galery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
