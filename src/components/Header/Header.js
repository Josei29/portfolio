import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="header--container">
            <a href="#projects" className="header--link" >PROJECTS</a>
            <a href="#contact" className="header--link">CONTACT</a>
        </div>
    );
};

export default Header;