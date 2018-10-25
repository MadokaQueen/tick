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
                    Как купить
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
                <NavItem className="mb-2">
                  <Link
                    to="/requisites"
                    onClick={() => window.scrollTo(0, 0)}
                    className="link m-1 mr-4"
                  >
                    Реквизиты
                  </Link>
                </NavItem>
              </Nav>
            </div>
            <div className="col-6 mt-4 ">
              <div className="mx-4">
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  alt=""
                  src="./images/pay/01-mir-h250.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  alt=""
                  src="./images/pay/02-visa-h250.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  alt=""
                  src="./images/pay/03-mastercard-h250.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  alt=""
                  src="./images/pay/uniteller.png"
                />
                <img
                  style={{ height: "35px" }}
                  className="pr-2 pb-2"
                  alt=""
                  src="./images/pay/maestro.png"
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
