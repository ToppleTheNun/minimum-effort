import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinkJson } from "../../types";

type NavbarLinkProps = {
  link: NavbarLinkJson;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
  if (link.href.startsWith("/")) {
    return (
      <Link className="navbar-item" to={link.href}>
        {link.name}
      </Link>
    );
  }
  return (
    <a className="navbar-item" href={link.href}>
      {link.name}
    </a>
  );
};

export default NavbarLink;
