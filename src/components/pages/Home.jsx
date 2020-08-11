import React from "react";
import Hero from "../Hero";
import AboutMe from "../AboutMe";
import HomePortfolio from "../HomePortfolio";
import Contact from "../Contact";

const Home = ({ projects }) => {
  return (
    <React.Fragment>
      <Hero />
      <AboutMe />
      <HomePortfolio projects={projects} />
    </React.Fragment>
  );
};

export default Home;
