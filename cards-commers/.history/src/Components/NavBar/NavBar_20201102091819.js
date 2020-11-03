import React from "react";
import ImageNavBar from "../../Images/cards-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavBar.css";

const styleFont = {
  fontSize: 20,
  borderBottom: "1px solid red",
};

function NavBar() {
  return (
    <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Al trote</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                           <li className={this.getNavLinkClass("/")}><NavLink to="/" >Listar</NavLink></li>
                           <li className={this.getNavLinkClass("/agregar")}><NavLink to="/agregar">Agregar</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
  );
}

export default NavBar;
