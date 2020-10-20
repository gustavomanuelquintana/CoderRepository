import React from "react";
import ImageNavBar from "../Images/cards-logo.png";

const styleFont = {
    fontSize: 20,
    borderBottom: '1px solid red'
}

function NavBar() {
  return (
    <div className="container">
      <div className="header-navBar">
        <div className="Logo-navBar">
          <img src={ImageNavBar} alt='logo' />
        </div>
        <div className="Links-navBar">
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
  );
}

export default NavBar;
