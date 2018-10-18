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

class LoginPage extends Component {
  state = {
    accepted: true
  };

  validate = () => {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;
    let correctPassword;
    axios({
      method: "get",
      url: `/api/users/byEmail/${email}/${Math.random()}`
    }).then(res => {
      let isRegistered = res.data[0] !== undefined;

      if (isRegistered) {
        correctPassword = password === res.data[0].password;
      }
      let accepted = isRegistered && correctPassword;
      this.setState({ accepted });
      if (accepted) {
        this.props.setUser(email);
        window.location.assign("/");
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <div className="col">
            <Headline text="Вход" />
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
                    invalid={!this.state.accepted}
                  />
                  <FormFeedback valid={false}>
                    Неверный адрес ел. почты или пароль
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
                    invalid={!this.state.accepted}
                  />
                  <FormFeedback valid={false}>
                    Неверный адрес ел. почты или пароль
                  </FormFeedback>
                </FormGroup>
                <Button block className="" onClick={() => this.validate()}>
                  Войти
                </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { setUser }
)(LoginPage);
