import React from "react";
import ProjectContainer from "./ProjectContainer";

const HomePortfolio = ({ hiLightProjs }) => {
  return (
    <React.Fragment>
      <section id="portfolio" class="container-fluid p-3 bg-light text-dark">
        <h2 class="text-center text-dark">My Portfolio</h2>
        <ProjectContainer hiLightProjs={hiLightProjs} />
      </section>
    </React.Fragment>
  );
};

export default HomePortfolio;
