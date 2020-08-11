import React from "react";
import { Link } from "react-router-dom";
import ProjectContainer from "./ProjectContainer";

const HomePortfolio = ({ projects }) => {
  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="container-fluid p-3 bg-light text-dark"
      >
        <h2 className="text-center text-dark">My Portfolio</h2>
        <ProjectContainer projects={projects} />

        <div className="text-center">
          <Link
            className="btn btn-outline-primary"
            to="/portfolio"
            role="button"
          >
            View More
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePortfolio;
