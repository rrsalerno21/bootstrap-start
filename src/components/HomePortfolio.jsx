import React from "react";
import ProjectContainer from "./ProjectContainer";

const HomePortfolio = ({ hiLightProjs }) => {
  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="container-fluid p-3 bg-light text-dark"
      >
        <h2 className="text-center text-dark">My Portfolio</h2>
        <ProjectContainer hiLightProjs={hiLightProjs} />

        <div className="text-center">
          <a
            className="btn btn-outline-primary"
            href="./portfolio.html"
            role="button"
          >
            View More
          </a>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePortfolio;
