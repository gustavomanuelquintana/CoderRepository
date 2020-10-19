import React from "react";
import ImageNavBar from '../Images/cards-commerce.png';

function NavBar(){
    const styleImage = {
        backgroundImage: `url(${ImageNavBar}) `
    }
    return (
    <div className="container">
        <div class="Logo-navBar">
            <img src="{ImageNavBar}" />
        </div>
        <div className="Links-navBar">

        </div>
    </div>

    )};

export default NavBar;