import React from "react";
import Check from "./check/check";
import "./Item.css";

const Item = (props) => {
    return(
        <div className="item--container">
            <Check /><span style={{marginLeft: "15px"}}>{props.name}</span>
        </div>
    );
};

export default Item;