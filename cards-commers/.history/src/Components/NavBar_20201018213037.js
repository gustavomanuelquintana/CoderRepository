import React from "react";
import ImageNavBar from "../Images/cards-commerce.png";

function NavBar() {
  return (
    <div className="container">
      <div className="header-navBar">
        <div className="Logo-navBar">
          <img src="https://e7.pngegg.com/pngimages/485/98/png-clipart-eastleigh-nairobi-e-commerce-web-application-graphy-online-shopping-digital-business-logo-web-application.png" />
        </div>
        <div className="Links-navBar">
          <ul className="List-navBar">
            <li><a>¿Quienes somos?</a></li>
            <li><a>Information</a></li>
            <li><a>Promociones </a></li>
            <li><a>Galeria </a></li>
            <li><a>Contacto</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
