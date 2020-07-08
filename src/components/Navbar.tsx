import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { Link as GatsbyLink } from "gatsby";

import minimumEffortLogo from "../images/minimum-effort-logo.png";
import navbarLinksJson from "../navbar-links.json";
import { NavbarLinksJson } from "../types";
import NavbarLink from "./NavbarLink";

const navbarLinks: NavbarLinksJson = navbarLinksJson;

const Navbar: React.FC = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const handleHamburgerClick = useCallback(() => {
    setHamburgerMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <GatsbyLink className="navbar-item" to="/">
          <img
            src={minimumEffortLogo}
            alt="Minimum Effort: Semi-Hardcore Raiding Guild on Thrall"
            width="112"
            height="28"
          />
        </GatsbyLink>

        <button
          aria-label="menu"
          aria-expanded="false"
          className={classNames("navbar-burger", {
            "is-active": isHamburgerMenuOpen,
          })}
          onClick={handleHamburgerClick}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="navbar-menu"
        className={classNames("navbar-menu", {
          "is-active": isHamburgerMenuOpen,
        })}
      >
        <div className="navbar-start">
          {navbarLinks.startLinks.map((startLink) => (
            <NavbarLink
              key={`${startLink.name}${startLink.href}`}
              to={startLink}
            />
          ))}
        </div>
        <div className="navbar-end">
          {navbarLinks.endLinks.map((endLink) => (
            <NavbarLink key={`${endLink.name}${endLink.href}`} to={endLink} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
