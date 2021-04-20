import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
        <li className="flex-sm-fill text-sm-center">
          <NavLink
          exact
            to="/"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            About
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Contact
          </NavLink>
        </li>
        <ul className = "flex-sm-fill text-sm-center">
        <li>
          <a
            className="nav-link resume icons"
            href={require("../assets/download/Resume.pdf")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/resume-color-80.png")}
              alt="resume"
              height="28"
              width="28"
              className="resume"
            />
          </a>
        </li>
        <li>
          <a
            className="nav-link icons"
            href="https://github.com/pfotis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/GitHub-icon.png")}
              alt="GitHub"
              height="25"
              width="25"
              className="github"
            />
          </a>
        </li>
        <li>
          <a
            className="nav-link icons"
            href="https://www.linkedin.com/in/peter-fotis-6a740a11a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../assets/images/LI-In-Bug.png")}
              alt="Linkedin"
              height="24"
              width="29"
              className="linkedin"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
