import React from "react";
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer--container" id="contact">
            <p className="footer--text">JJIMENEZ.R98@GMAIL.COM</p>
            <p className="footer--text">(346) 327-5287</p>
            <a href="https://github.com/Josei29" target="_blank" rel="noopener noreferrer" className="footer--text">GITHUB</a>
            <a href="https://www.linkedin.com/in/jose-jimenez-35a827144/" target="_blank" rel="noopener noreferrer" className="footer--text">LINKEDIN</a>
        </div>
    );
};

export default Footer;