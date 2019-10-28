import React from "react";
import Item from "./Item/Item";
import "./Skills.css";

const Skills = () => {
    let items  = ["HTML", "CSS", "JavaScript", "jQuery", "Node.Js", "Express", "React.js", "Redux", "Hooks", "MongoDB", "MySQL", "APIs", "JSON", "REST", "AJAX"]

    return(
        <div className="skills--container">
            <p className="skills--title">Skills</p>
            {items.map((item, index) => {
                return <Item name={item} key={index}/>
            })}
        </div>
    );
};

export default Skills;