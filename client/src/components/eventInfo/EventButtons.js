import React from "react";

import { Button } from "reactstrap";

import { Link } from "react-router-dom";

const EventButtons = props => {
  return (
    <div className="buttons-event">
      <Link
        to="/cart"
        onClick={() => window.scrollTo(0, 0)}
        className="no-underline"
      >
        <Button color="danger" className="btn-lg p-4 m-4 btn-block">
          <h2>Перейти к оплате</h2>
        </Button>
      </Link>
      <Button
        className="btn-lg p-4 m-4 btn-block"
        onClick={() => props.onClose()}
      >
        <h2>Продолжить покупки</h2>
      </Button>
    </div>
  );
};

export default EventButtons;
