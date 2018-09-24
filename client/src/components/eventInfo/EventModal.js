import React, { Component } from "react";
import {
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import PropTypes from "prop-types";

import uuid from "uuid";

class EventModal extends Component {
  state = {
    val: 1
  };
  addVal = amt => {
    let newVal = this.state.val + amt;
    if (newVal >= 1 && newVal <= this.props.info.tickets) {
      this.setState({ val: newVal });
    }
  };
  render() {
    if (this.props.info === undefined) return <h1>undefined</h1>;
    return (
      <div className="event-modal shadow-lg">
        <div style={{ position: "relative" }}>
          <h3 className="modal-header bg-dark text-white p-4 text-nowrap">
            {this.props.info.name}
          </h3>
          <div className="m-4">
            <p className="h5">
              <span className="text-muted pr-2">Секция: </span>
              {this.props.info.seat}
            </p>
            <p className="h5">
              <span className="text-muted pr-2">Билетов доступно: </span>
              {this.props.info.tickets}
            </p>
            <p className="h5">
              <span className="text-muted pr-2">Стоимость: </span>
              {this.props.info.price + " р."}
            </p>
            <InputGroup style={{ width: "130px", margin: "1rem" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText
                  onClick={() => this.addVal(-1)}
                  className="btn btn-secondary"
                >
                  <b>-</b>
                </InputGroupText>
              </InputGroupAddon>
              <Input disabled placeholder={this.state.val} bssize="lg" />
              <InputGroupAddon addonType="append">
                <InputGroupText
                  bssize="lg"
                  onClick={() => this.addVal(1)}
                  className="btn btn-danger"
                >
                  <b>+</b>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div className="modal-ui">
              <Button
                color="danger"
                onClick={() => {
                  this.props.onBuy();
                  this.props.addToCart({
                    ...this.props.info,
                    val: this.state.val,
                    id: uuid()
                  });
                }}
                className="mr-2"
              >
                Добавить в корзину
              </Button>
              <p className="h5" style={{ display: "block", width: "200px" }}>
                <span className="text-muted pr-2">Итого: </span>
                {this.props.info.price * this.state.val + " р."}
              </p>
            </div>
          </div>
          <Button
            className="close-modal-btn m-4"
            onClick={() => this.props.onClose()}
          >
            закрыть
          </Button>
        </div>
      </div>
    );
  }
}

EventModal.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { addToCart }
)(EventModal);
