import React from "react";
import Portfolio from "./Portfolio";

const Projects = ({ }) [
    {
    id: 0,
    title: "Runbuddy",
    languages: "react, jsx, css, js",
    packages: "apollo-server-express, bcrypt, Express.js, graphql, if-env, jsonwebtoken, mongoose, nodemon, react-confirm-alert, react-popup-alert, uuid, concurrently",
    image: "/img/runbuddy.png",
    description: "Allow users to enter information into a daily calender",
    repo: "https://github.com/TiffanyLandon/Daily-Work-calender.git",
    },
    {
        id:1,
        title:"Recipe",
        languages:"javascript, html, css, ",
        packages:"npm",
        images:"",
        description:"Allow user to look up recipes based on their drinks.",
        repo:"https://github.com/WILLCUBA/recipe-finder.githttps://github.com/WILLCUBA/recipe-finder.git",
        

    }
];

function Projects() {
    return (
        <div>
            <p clasName= "challenges">Portfolio</p>

            <Portfolio projects= {projects}/>
        </div>
    );
}


export default Projects;