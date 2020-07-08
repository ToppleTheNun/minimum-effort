import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { NavbarLinkJson } from "../types";

type NavbarLinkProps = {
  to: NavbarLinkJson;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ to }) => {
  const internal = /^\/(?!\/)/.test(to.href);

  if (internal) {
    return (
      <GatsbyLink className="navbar-item" to={to.href}>
        {to.name}
      </GatsbyLink>
    );
  }
  return (
    <a className="navbar-item" href={to.href}>
      {to.name}
    </a>
  );
};

export default NavbarLink;
