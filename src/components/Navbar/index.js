import React from "react";
import { NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1 className="navbar-brand">Peter Fotis</h1>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <NavLink
                    exact
                    to="/"
                    className="nav-link"
                    activeClassName= "nav-link active"
                >
                    About
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/portofolio"
                    className="nav-link"
                    activeClassName= "nav-link active"
                >
                    Portofolio
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                    exact
                    to="/contact"
                    className="nav-link"
                    activeClassName= "nav-link active"
                >
                    Contact
                </NavLink>
                </li>
            </ul>
        </div>
        </nav>
  );
}


export default Navbar;