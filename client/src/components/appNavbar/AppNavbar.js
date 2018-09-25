import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import LogIn from "./LogIn";
import NavLinks from "./NavLinks";
import NavForm from "./NavForm";
import NavCity from "./NavCity";
import { Link } from "react-router-dom";
class AppNavbar extends Component {
  state = {
    isOpen: false,
    fixedNav: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (!this.state.fixedNav && window.scrollY > 150) {
        this.setState({ fixedNav: true });
      }
      if (this.state.fixedNav && window.scrollY < 120) {
        this.setState({ fixedNav: false });
      }
    });
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition timeout={500} classNames="fade">
            <Navbar dark expand="sm" className="bg-main-color">
              <Container>
                <LogIn />
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <NavLinks />
                  <h4 style={{ color: "white" }}>+7-495-127-71-19</h4>
                </Collapse>
              </Container>
            </Navbar>
          </CSSTransition>
          <CSSTransition timeout={500} classNames="fade">
            <Navbar dark expand="sm" className="bg-dark-color p-0">
              <Container>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/"
                  className="link m-1 p-0 d-b"
                  style={{ height: "60px" }}
                >
                  <img
                    src="../images/logo.png"
                    alt=""
                    style={{
                      height: "100%"
                    }}
                  />
                </Link>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <NavForm formId="form1" />
                </Collapse>
                <NavCity className="my-4" />
              </Container>
            </Navbar>
          </CSSTransition>

          {this.state.fixedNav && (
            <CSSTransition timeout={500} classNames="moveIn">
              <Navbar
                dark
                expand="sm"
                className="w-100 p-0 nav-fixed bg-dark-color"
                style={{ zIndex: "2000" }}
              >
                <Container>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to="/"
                    className="link m-1 p-0 d-b"
                    style={{ height: "40px" }}
                  >
                    <img
                      src="../images/logo.png"
                      alt=""
                      style={{
                        height: "100%"
                      }}
                    />
                  </Link>
                  <LogIn />
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <NavForm formId="form2" />
                  </Collapse>
                  <NavCity className="my-2" />
                </Container>
              </Navbar>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}
// или может экспортировать кирилла из страны?
export default AppNavbar;
