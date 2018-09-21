import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

import { Link } from "react-router-dom";

class NavForm extends React.Component {
  state = {
    val: ""
  };
  onChange = () => {
    const elem = document.getElementById(this.props.formId);
    this.setState({
      val: "" + elem.value
    });
  };
  render() {
    return (
      <InputGroup className="mr-auto px-4" style={{ width: "90%" }}>
        <Input
          id={this.props.formId}
          onChange={this.onChange}
          placeholder="Найти концерты, исполнителей, места . . ."
        />
        <InputGroupAddon addonType="append">
          <Link
            to={"/search/" + this.state.val}
            onClick={() =>
              (document.getElementById(this.props.formId).value = "")
            }
            className="btn btn-secondary"
          >
            Поиск
          </Link>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

export default NavForm;
