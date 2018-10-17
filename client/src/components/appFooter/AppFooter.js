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
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              className="link m-1 p-0 d-b"
              style={{ height: "80px" }}
            >
              <img
                src="../images/logo.png"
                alt=""
                style={{
                  height: "100%"
                }}
              />
            </Link>
          </div>
          <div className="row">
            <div className="col-6 mt-4">
              <Nav vertical>
                <NavItem className="mb-2">
                  <Link
                    to="/FAQ"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Частые вопросы
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
                <NavItem className="mb-2">
                  <Link
                    to="/contacts"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Контакты
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="col-6 mt-4 ">
              <div className="mx-4">
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  src="./images/pay/master.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  src="./images/pay/visa.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  src="./images/pay/maestro.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  src="./images/pay/uniteller.png"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AppNavbar;
