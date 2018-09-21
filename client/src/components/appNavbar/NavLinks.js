import React from "react";

import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Nav className="m-auto">
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Концерты
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Детям
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Спектакли
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Фестивали
        </Link>
      </NavItem>
    </Nav>
  );
};

export default NavLinks;
