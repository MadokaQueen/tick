import React from "react";

import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Nav className="m-auto">
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Как купить билет
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Возврат билетов
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/category" className="mx-2 link">
          Часто задаваемые вопросы
        </Link>
      </NavItem>
    </Nav>
  );
};

export default NavLinks;
