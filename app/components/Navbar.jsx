import React from "react";
import Logo from '../assets/website-files/logo-vector.png'

const Navbar = () => {

  return (
    <nav id="nav" className="navbar navbar-expand-md navbar-light sticky-top">
      <a href="#/" id="pgm-brand" className="navbar-brand">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="pgm logo"
          height="75px"
          width="auto"
        />
      </a>
      <button
        aria-controls="responsive-navbar-nav"
        id="nav-toggle"
        type="button"
        aria-label="Toggle navigation"
        className="navbar-dark navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};

export default Navbar;
