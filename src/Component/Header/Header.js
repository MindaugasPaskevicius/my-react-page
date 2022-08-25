import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          <img
            src="../images/images.jpg"
            alt="logo"
            width="45"
            height="35"
          />
        </a>
        <Link id="logo-letter" className="navbar-brand" to="/home">
          MY FIRST REACT PAGE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <NavLink
              className={"nav-link "}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "grey" : "",
                };
              }}
              to="/Home"
            >
              Home
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "grey" : "",
                };
              }}
              to="/Calculator"
            >
              Calculator
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "grey" : "",
                };
              }}
              to="/Todo"
            >
              Todo list
            </NavLink>
            <NavLink
              className={"nav-link"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "grey" : "",
                };
              }}
              to="/about"
            >
              About Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;