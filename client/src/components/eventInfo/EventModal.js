import React, { Component } from "react";
import {
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

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
    console.log(this.props);
    if (this.props.info === undefined) return <h1>undefined</h1>;
    return (
      <div className="event-modal shadow-lg">
        <div style={{ position: "relative" }}>
          <h2 className="bg-dark text-white p-4">{this.props.info.name}</h2>
          <div className="m-4">
            <p className="h3">
              <span className="text-muted pr-2">Секция: </span>
              {this.props.info.seat}
            </p>
            <p className="h3">
              <span className="text-muted pr-2">Билетов доступно: </span>
              {this.props.info.tickets}
            </p>
            <p className="h3">
              <span className="text-muted pr-2">Стоимость: </span>
              {this.props.info.price + " р."}
            </p>
            <InputGroup style={{ width: "130px", margin: "2rem 1rem" }}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText
                  bsSize="lg"
                  onClick={() => this.addVal(1)}
                  className="btn btn-danger"
                >
                  <b>+</b>
                </InputGroupText>
              </InputGroupAddon>
              <Input disabled placeholder={this.state.val} bsSize="lg" />
              <InputGroupAddon addonType="append">
                <InputGroupText
                  bsSize="lg"
                  onClick={() => this.addVal(-1)}
                  className="btn btn-secondary"
                >
                  <b>-</b>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <div className="modal-ui">
              <Button color="danger" className="btn-lg mr-2">
                Перейти к оплате
              </Button>
              <p className="h3" style={{ display: "block", width: "280px" }}>
                <span className="text-muted pr-2">Итого: </span>
                {this.props.info.price * this.state.val + " р."}
              </p>
            </div>
          </div>
          <Button
            className="close-modal-btn m-4 btn-lg"
            onClick={() => this.props.onClose()}
          >
            закрыть
          </Button>
        </div>
      </div>
    );
  }
}

export default EventModal;
