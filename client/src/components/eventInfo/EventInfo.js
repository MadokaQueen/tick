import React from "react";

import { Container } from "reactstrap";

import EventDescription from "./EventDescription";
import EventInfoCard from "./EventInfoCard";
import EventTickets from "./EventTickets";
import Headline from "../Headline";

const EventInfo = props => {
  const { info } = props;

  return (
    <Container>
      <div className="row">
        <div className="col-10 m-auto">
          <EventInfoCard info={info} />
        </div>
      </div>
      <div className="row">
        <div className="col-10 m-auto">
          <Headline text="Описание" />
          <EventDescription text={info.description} />
        </div>
      </div>
      <div className="row">
        <div className="col-10 m-auto pb-4">
          <Headline text="Выбор билетов" />
          <div className="shadow-lg" style={{ backgroundColor: "#fff" }}>
            <EventTickets info={info} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventInfo;
