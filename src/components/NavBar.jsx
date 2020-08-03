import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="navbar navbar-light bg-white py-0 border-bottom shadow-sm rounded"
    >
      <button
        id="name-banner"
        className="navbar-brand p-3 my-gradient text-white"
      >
        Rocky Salerno
      </button>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="./portfolio.html">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="public/docs/robert-salerno-full-stack-developer-resume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./index.html#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              id="outline-button"
              className="nav-link btn btn-outline-primary"
              href="./index.html#contact-me-section"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
