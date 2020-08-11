import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../images/robert-salerno-full-stack-developer-resume.pdf";

const NavBar = () => {
  return (
    <nav
      id="nav-bar"
      className="navbar navbar-light bg-white py-0 border-bottom shadow-sm rounded"
    >
      <Link
        id="name-banner"
        className="navbar-brand p-3 my-gradient text-white"
        to="/"
      >
        Rocky Salerno
      </Link>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/#about-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              id="outline-button"
              className="nav-link btn btn-outline-primary"
              href="/#contact-me"
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
