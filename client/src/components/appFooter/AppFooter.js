import React, { Component } from "react";
import { Container, Nav, NavItem } from "reactstrap";

import { Link } from "react-router-dom";
class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="app-footer">
        <Container className="pb-4" style={{ position: "relative" }}>
          <div className="corner-block">
            <h4 className="link">Название Билеты</h4>
          </div>
          <div className="row">
            <div className="col-3 mt-4">
              <Nav vertical>
                <h5>Как купить</h5>
                <NavItem className="mb-2">
                  <Link
                    to="/FAQ"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Часто задаваемые вопросы
                  </Link>
                </NavItem>
                <NavItem className="mb-2">
                  <Link
                    to="/howtobuy"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Как купить билет
                  </Link>
                </NavItem>
                <NavItem className="mb-2">
                  <Link
                    to="/ticketback"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Возврат билетов
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="col-6 mt-4 ">
              <div className="mx-4" />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AppNavbar;
