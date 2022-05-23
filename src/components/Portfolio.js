import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    name: "Recipe Finder",
    description: "Can't find a recipe based on what in your stock well recipe finder here to help!",
    image: "../assets/small/projects/recipe.png",
    link: "",
    repo: "https://github.com/TiffanyLandon/team-3-project.git",
  },
  {
    id: 1,
    name: "Employee Info",
    description:"Input information about your employees",
    image:"",
    link:"",
    repo:"https://github.com/TiffanyLandon/Employee-Info.git",
  },
  {
    id: 2,
    name:"",
    description:"",
    image:"",
    link:"",
    repo:"",
  }

];
function Portfolio() {
  return (
    <div className="container pt-4">
      <div className="row">
        <h2 className="text-center">Protfolio</h2>
      {projects.map(p => (
        <Project id= {p.id} name={p.name} description={p.description} image={p.image} link={p.link} repo={p.repo}/>
      ))}
      </div>
    </div>
  );
}

export default Portfolio;