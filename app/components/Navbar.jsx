import { IKImage } from 'imagekitio-react';
import { NavLink } from '../styles/navbar';

/**
 * Links:
 * - Vision
 * - Team
 * - Mint Now
 * - Home
 *
 */


const Navbar = () => {
  return (
    <div className="container">
      <nav id="nav" className="navbar navbar-expand-md navbar-light sticky-top">
        <a href="/splash" id="pgm-brand" className="navbar-brand">
          <IKImage
            path="/logo-vector_1gzBYRGiHGR4.png"
            transformation={[{
              height: "130"
            }]}
            loading="lazy"
            lqip={{active: true}}
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
            <NavLink
              title="HOME"
              href="/home"
            >
              HOME
            </NavLink>
            <NavLink
              title="VISION"
              href="/vision"
            >
              VISION
            </NavLink>
            <NavLink
              title="TEAM"
              href="/team"
            >
              TEAM
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
