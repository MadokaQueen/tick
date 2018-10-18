import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { setUser } from "../../actions/userActions";
import PropTypes from "prop-types";

import { Button, Nav, NavItem } from "reactstrap";

class LogIn extends Component {
  render() {
    let { user } = this.props.user;

    return (
      <React.Fragment>
        {user === "none" && (
          <Nav>
            <NavItem>
              <Link to="/login" className="mx-2 link pt-2">
                Войти
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/register" className="mx-2 link pt-2">
                Регистрация
              </Link>
            </NavItem>
          </Nav>
        )}
        {user !== "none" && (
          <React.Fragment>
            <Button
              color="link"
              className="link"
              onClick={() => {
                this.props.setUser("none");
                window.location.reload(true);
                window.location.assign("/");
              }}
            >
              Выйти
            </Button>
            <span className="nav-link link small pr-4">{user}</span>
          </React.Fragment>
        )}
        <Link to="/cart" className="link pt-2">
          <h5>
            <span className="badge badge-pill badge-light">
              <FontAwesomeIcon
                fixedWidth
                icon={faShoppingCart}
                size="lg"
                className="pr-2"
              />
              {this.props.cart.cart.length}
            </span>
          </h5>
        </Link>
      </React.Fragment>
    );
  }
}

LogIn.propTypes = {
  cart: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});

export default connect(
  mapStateToProps,
  { setUser }
)(LogIn);
