import React from "react";

import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <Nav className="m-auto">
      <NavItem>
        <Link to="/howtobuy" className="mx-2 link">
          Как купить билет
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/ticketback" className="mx-2 link">
          Возврат билетов
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/FAQ" className="mx-2 link">
          Частые вопросы
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/contacts" className="mx-2 link">
          Контакты
        </Link>
      </NavItem>
    </Nav>
  );
};

export default NavLinks;
