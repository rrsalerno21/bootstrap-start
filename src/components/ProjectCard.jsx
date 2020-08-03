import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <React.Fragment>
      <div className="card card-top-spacing shadow p-3 mb-5 bg-white rounded">
        <img
          src={project.img}
          className="card-img-top shadow"
          alt={project.name}
        />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.desc}</p>
          <a
            href={project.src}
            className="btn btn-primary my-gradient"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check It Out
          </a>
          <br />
          <a
            href={project.gH}
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            View GitHub
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
