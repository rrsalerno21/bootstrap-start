import React from "react";

const ProjectCard = (prop) => {
  return (
    <React.Fragment>
      <div className="card card-top-spacing shadow p-3 mb-5 bg-white rounded">
        <img
          src="./assets/images/forget-me-not-app-dashboard-jpg.jpg"
          className="card-img-top shadow"
          alt="Forget Me Not app dashboard"
        />
        <div className="card-body">
          <h5 className="card-title">Forget Me Not</h5>
          <p className="card-text">
            Securly keep track of your to-do lists while viewing current COVID
            data by state.
          </p>
          <a
            href="https://secret-journey-60945.herokuapp.com/"
            className="btn btn-primary my-gradient"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check It Out
          </a>
          <br />
          <a
            href="https://github.com/rrsalerno21/project-2"
            target="_blank"
            rel="noopener noreferrer"
            className="my-1"
          >
            View GitHub
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
