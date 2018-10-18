import React, { Component } from "react";

import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input
} from "reactstrap";

import Headline from "../Headline";

import { connect } from "react-redux";
import { setUser } from "../../actions/userActions";
import PropTypes from "prop-types";

import axios from "axios";

var bcrypt = require("bcryptjs");

class ReqisterPage extends Component {
  state = {
    isEmail: true,
    isPassword: true,
    isFree: true
  };

  validate = () => {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    axios.get(`/api/users/byEmail/${email}/${Math.random()}/`).then(res => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmail = re.test(email.toLowerCase());
      let isPassword = password.length >= 6;
      let isFree = res.data[0] === undefined;
      this.setState({ isEmail, isPassword, isFree });
      if (isEmail && isPassword && isFree) {
        let hashedPassword = bcrypt.hashSync(password, 8);
        axios
          .post("/api/users/", { email, password })
          .then(window.location.assign("/"));
        this.props.setUser(email);
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col">
            <Headline text="Регистрация" />
          </div>
        </Row>
        <Row className="my-4">
          <div className="col-4" />
          <div className="col-4">
            <div className="bg-white p-4 card mb-4">
              <Form>
                <FormGroup className="mb-4 mr-sm-2">
                  <Label for="emailInput" className="mr-sm-2">
                    Адрес эл. почты
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="emailInput"
                    placeholder=""
                    invalid={!this.state.isEmail || !this.state.isFree}
                  />
                  <FormFeedback valid={false}>
                    {!this.state.isFree
                      ? "Этот адрес ел. почты занят"
                      : !this.state.isEmail
                        ? "Неверный адрес ел. почты"
                        : ""}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="mb-4 mr-sm-2">
                  <Label for="passwordInput" className="mr-sm-2">
                    Пароль
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="passwordInput"
                    placeholder=""
                    invalid={!this.state.isPassword}
                  />
                  <FormFeedback valid={false}>
                    Пароль должен состоять из 6 или более символов
                  </FormFeedback>
                </FormGroup>
                <Button block className="" onClick={() => this.validate()}>
                  Зарегистрироваться
                </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

ReqisterPage.propTypes = {
  setUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { setUser }
)(ReqisterPage);
