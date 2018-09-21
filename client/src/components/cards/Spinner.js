import React from "react";
import { Card } from "reactstrap";

const Spinner = props => {
  return (
    <React.Fragment>
      <Card style={{ height: "400px" }} />
      <Card style={{ height: "400px" }} />
      <Card style={{ height: "400px" }} />
    </React.Fragment>
  );
};

export default Spinner;
