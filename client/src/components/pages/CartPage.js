import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Container, Table, Button } from "reactstrap";

import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";
import PropTypes from "prop-types";

class CartPage extends Component {
  state = {};

  getSum = () => {
    let sum = 0;
    let arr = this.props.cart.cart.map(i => i.val * i.price);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };
  render() {
    const { cart } = this.props.cart;
    return (
      <Container className="my-4" style={{ minHeight: "900px" }}>
        <div className="p-4 shadow" style={{ backgroundColor: "#fff" }}>
          <Table
            borderless
            className="m-4 p-4"
            style={{ fontSize: "22px", backgroundColor: "$fff" }}
          >
            <thead>
              <tr>
                <th>Название</th>
                <th>Сектор</th>
                <th>Количество</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 && (
                <tr>
                  <td className="text-muted">название</td>
                  <td className="text-muted">сектор</td>
                  <td className="text-muted">количество</td>
                  <td> </td>
                </tr>
              )}
              {cart.map(cartItem => (
                <tr key={cartItem.id}>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.seat}</td>
                  <td>{cartItem.val}</td>
                  <td>
                    <Button
                      onClick={() => this.props.removeFromCart(cartItem.id)}
                    >
                      убрать
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className="row">
          <div className="col-6 mr-auto">
            <h2 className="m-4">
              <span className="text-muted">Итого к оплате: </span>
              {this.getSum() + " р."}
            </h2>
          </div>
        </div>

        {this.getSum() > 0 && (
          <div className="row">
            <div className="col-6 m-auto">
              <Button className="btn-danger btn-block btn-lg m-4">
                <h2>Перейти к оплате</h2>
              </Button>
            </div>
          </div>
        )}
      </Container>
    );
  }
}

CartPage.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(CartPage);
