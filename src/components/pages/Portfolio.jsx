import React from "react";
import ProjectContainer from "../ProjectContainer";

const Portfolio = ({ projects }) => {
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3, 6);
  return (
    <React.Fragment>
      <h1 className="text-center text-black bg-light mb-0 pt-3 display-4">
        My Portfolio
      </h1>
      <hr className="my-hr bg-primary"></hr>
      <section
        id="portfolio"
        class="container-fluid p-3 mb-2 bg-light text-dark"
      >
        <ProjectContainer projects={firstRow} />
        <ProjectContainer projects={secondRow} />
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
