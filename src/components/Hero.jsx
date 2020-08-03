import React from "react";
import { rockyPhoto } from "../images/";
import SocialIconLine from "./SocialIconLine";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center bg-white">
        <h1 className="display-4">Full Stack Web Developer</h1>
        <p className="lead">
          I create functional and dynamic web apps, and I love what I do.
        </p>

        <SocialIconLine />

        <img
          id="rocky-image"
          className="img-fluid"
          src={rockyPhoto}
          alt="Rocky's Profile"
        />

        <a href="#about-me">
          <i id="down-arrow" className="fas fa-angle-down"></i>
        </a>
      </section>
    </React.Fragment>
  );
};

export default Hero;
