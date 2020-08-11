import React from "react";

const SocialIconLine = ({ color }) => {
  return (
    <React.Fragment>
      <div id="social" className="row justify-content-center mb-2 mx-2">
        <div className="col-auto mx-1">
          <a
            href="https://www.linkedin.com/in/robert-rocky-salerno-145a85bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                color === "white"
                  ? "fab fa-linkedin-in text-white"
                  : "fab fa-linkedin-in font-my-gradient"
              }
            ></i>
          </a>
        </div>
        <div className="col-auto mx-1">
          <a
            href="https://github.com/rrsalerno21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                color === "white"
                  ? "fab fa-github-square text-white"
                  : "fab fa-github-square font-my-gradient"
              }
            ></i>
          </a>
        </div>
        <div className="col-auto mx-1">
          <a
            href="https://stackoverflow.com/users/12925714/rrsalerno21?tab=profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                color === "white"
                  ? "fab fa-stack-overflow text-white"
                  : "fab fa-stack-overflow font-my-gradient"
              }
            ></i>
          </a>
        </div>
        <div className="col-auto mx-1">
          <a
            href="https://www.facebook.com/rockysalerno/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={
                color === "white"
                  ? "fab fa-facebook-square text-white"
                  : "fab fa-facebook-square font-my-gradient"
              }
            ></i>
          </a>
        </div>
        <div className="col-auto mx-1">
          <a
            href="assets/images/robert-salerno-full-stack-developer-resume.pdf"
            target="_blank"
          >
            <i
              className={
                color === "white"
                  ? "fas fa-file text-white"
                  : "fas fa-file font-my-gradient"
              }
            ></i>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialIconLine;
