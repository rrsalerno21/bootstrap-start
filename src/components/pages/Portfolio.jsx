import React, { Component } from "react";
import ProjectContainer from "../ProjectContainer";

class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { projects } = this.props;
    const firstRow = projects.slice(0, 3);
    const secondRow = projects.slice(3, 6);
    return (
      <div className="bg-light">
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
      </div>
    );
  }
}

export default Portfolio;
