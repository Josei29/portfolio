import React from "react";
import Project from "./Project/Project";
import "./Projects.css";

const Projects = () => { 
    let projects = [{
        name: "Seagull Construction",
        url: "https://www.seagullconstructions.com/",
        github: "https://github.com/Josei29/Seagull",
        imgUrl: "./assets/seagull.png",
        desc: "App created with React.js and also implementing Formspree.io to send E-Mails."
    },
    {
        name: "React-Burger",
        url: "https://react-burger-a411b.firebaseapp.com/",
        github: "https://github.com/Josei29/react-burger",
        imgUrl: "./assets/react-burger.png",
        desc: "React App implementing Redux and Firebase with user authentication."
    },
    {
        name: "CashManage",
        url: "https://whispering-coast-30037.herokuapp.com/",
        github: "https://github.com/Josei29/Project3",
        imgUrl: "./assets/budget.png",
        desc: "Keep track of your money, set a budget and easily send money to other users! (React.js)."
    },
    {
        name: "Clicky-Game",
        url: "https://rocky-journey-33670.herokuapp.com/",
        github: "https://github.com/Josei29/React-Game",
        imgUrl: "./assets/clicky.png",
        desc: "Fun application made with React.js."
    }, 
    {
        name: "Giphy API",
        url: "https://josei29.github.io/APIHomework/",
        github: "https://github.com/Josei29/APIHomework",
        imgUrl: "./assets/giphy.png",
        desc: "Display Gifs using AJAX calls, popullating the page dynamically each time."
    }, 
    {
        name: "Trivia Game",
        url: "https://josei29.github.io/TriviaGame/",
        github: "https://github.com/Josei29/TriviaGame",
        imgUrl: "./assets/oscar.jpg",
        desc: "Dynamically generates HTML elements, also applied setTimeout() methods."
    }];

    return(  
        <div className="projects--container">
            <p className="projects--title" id="projects">Projects</p>
            {projects.map((project, index) => {
                return <Project 
                            name={project.name} 
                            url={project.url}
                            github={project.github}
                            imgUrl={project.imgUrl}
                            desc={project.desc}
                            key={index}
                        />
            })}
        </div>
    );
};

export default Projects;