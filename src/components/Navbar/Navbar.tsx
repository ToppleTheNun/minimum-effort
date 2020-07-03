import React from "react";

import minimumEffortLogo from "../../assets/minimum-effort-logo.png";

const Navbar: React.FC = () => (
  <nav
    className="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src={minimumEffortLogo}
          alt="Minimum Effort: Semi-Hardcore Raiding Guild on Thrall"
          width="112"
          height="28"
        />
      </a>

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
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-item">Roster</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-item">Mythic+</a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdAHwVHJ4Wj3uOOAIsiWYNSZ41X3lEfnVWes5XVjC4aM6wvoA/viewform"
        >
          Apply Now
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
