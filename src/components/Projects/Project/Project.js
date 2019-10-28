import React from "react";
import "./Project.css";

const Project = (props) => {
    console.log(props)
    return(
        <div className="project">
            <img 
                src={props.imgUrl} 
                alt="Screenshot"
                className="project--img"    
            />
            <p className="project--name">{props.name}</p>
            <p className="project--desc">{props.desc}</p>
            <a 
                href={props.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project--link"    
            >Try Me!
            </a>
            <a 
                href={props.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project--link"    
            >Github
            </a>
        </div>
    );
};

export default Project;