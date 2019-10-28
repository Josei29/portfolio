import React from "react";
import "./Description.css";

const Description = () => {
    return(
        <div>
            <p className="name">JOSE JIMENEZ</p>
            <div className="description--container">
                <div className="description--text">Full-Stack Web developer based on Dallas, TX.</div>
                <div className="description--text">SMU Coding Bootcamp, May - November, 2018</div>
            </div>
        </div>
    );
};

export default Description;