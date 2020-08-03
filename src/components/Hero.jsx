import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="jumbotron text-center bg-white">
        <h1 className="display-4">Full Stack Web Developer</h1>
        <p className="lead">
          I create functional and dynamic web apps, and I love what I do.
        </p>

        <div id="social" className="row justify-content-center mb-2 mx-2">
          <div className="col-auto mx-1">
            <a
              href="https://www.linkedin.com/in/robert-rocky-salerno-145a85bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in font-my-gradient"></i>
            </a>
          </div>
          <div className="col-auto mx-1">
            <a
              href="https://github.com/rrsalerno21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square font-my-gradient"></i>
            </a>
          </div>
          <div className="col-auto mx-1">
            <a
              href="https://stackoverflow.com/users/12925714/rrsalerno21?tab=profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-stack-overflow font-my-gradient"></i>
            </a>
          </div>
          <div className="col-auto mx-1">
            <a
              href="https://www.facebook.com/rockysalerno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square font-my-gradient"></i>
            </a>
          </div>
          <div className="col-auto mx-1">
            <a
              href="assets/images/robert-salerno-full-stack-developer-resume.pdf"
              target="_blank"
            >
              <i className="fas fa-file font-my-gradient"></i>
            </a>
          </div>
        </div>

        <img
          id="rocky-image"
          className="img-fluid"
          src="public/images/rocky-photo.jpg"
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
