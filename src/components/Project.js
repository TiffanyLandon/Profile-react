import React from "react";

const Project = (props) => {
  return (
    <div className="col-4 d-flex justify-content-around pt-2">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title text-dark">{props.name}{props.id}</h5>
          <p className="card-text text-secondary">{props.description}</p>
          <a href={props.link}><button className='button'>View Website</button></a>
          <a href={props.repo}><button className='button'>View Repo</button></a>
        </div>
      </div>
    </div>

  );
}

export default Project;