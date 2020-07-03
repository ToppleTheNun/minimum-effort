import React from "react";
import { Link } from "react-router-dom";

import minimumEffortLogo from "../../assets/minimum-effort-logo.png";
import navbarLinks from "../../navbar-links.json";

const Navbar: React.FC = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img
          src={minimumEffortLogo}
          alt="Minimum Effort: Semi-Hardcore Raiding Guild on Thrall"
          width="112"
          height="28"
        />
      </Link>

      <button
        type="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </div>

    <div id="navbar-menu" className="navbar-menu">
      <div className="navbar-start">
        {navbarLinks.startLinks.map((startLink) => (
          <Link
            key={`${startLink.name}${startLink.href}`}
            className="navbar-item"
            to={startLink.href}
          >
            {startLink.name}
          </Link>
        ))}
      </div>
      <div className="navbar-end">
        {navbarLinks.endLinks.map((endLink) => (
          <Link
            key={`${endLink.name}${endLink.href}`}
            className="navbar-item"
            to={endLink.href}
          >
            {endLink.name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
