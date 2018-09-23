import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class LogIn extends Component {
  render() {
    return (
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
    );
  }
}

LogIn.propTypes = {
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {}
)(LogIn);
