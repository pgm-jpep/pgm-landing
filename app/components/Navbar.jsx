import React from "react";
import Logo from '../assets/logo.png'

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
      <div className="collapse navbar-collapse" id="navbarToggler" style={{ justifyContent: 'space-between'}}>
        <div className="navbar-nav" id="nav-bar">
          <a
            id="nav-link"
            title="BUY AN APE"
            href="#/home#buy-an-ape"
            className="nav-link"
          >
            BUY
          </a>
          <a
            id="nav-link"
            title="ROADMAP"
            href="#/home#roadmap"
            className="nav-link"
          >
            ROADMAP
          </a>
          <span
            id="nav-link"
            title="TEAM"
            href="#/home#team"
            className="nav-link"
          >
            TEAM
          </span>
          <a
            id="nav-link"
            title="GALLERY"
            href="#/gallery"
            data-rb-event-key="/gallery"
            className="nav-link"
          >
            GALLERY
          </a>
          <a
            id="nav-link"
            title="PROVENANCE"
            href="#/provenance"
            data-rb-event-key="/provenance"
            className="nav-link"
          >
            PROVENANCE
          </a>
          <div className="nav-item dropdown">
            <a
              aria-haspopup="true"
              aria-expanded="false"
              id="nav-dropdown"
              href="#"
              className="dropdown-toggle nav-link"
              role="button"
            >
              MEMBERS
            </a>
          </div>
        </div>
        <div className="navbar-nav" id="nav-social">
          <a href="https://www.youtube.com/watch?v=Yqga_WgX58k">
            <i className="fa fa-youtube-play social-icon pr-lg-0"></i>
          </a>
          <a href="https://www.instagram.com/boredapeyachtclub">
            <i className="fa fa-instagram social-icon pr-lg-0"></i>
          </a>
          <a href="https://twitter.com/BoredApeYC">
            <i className="fa fa-twitter social-icon pr-lg-0"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
