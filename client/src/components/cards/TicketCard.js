import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";

const TicketCard = props => {
  let { info } = props;

  let coverSrc = "../images/covers/" + info.cover;

  return (
    <Card className="shadow" style={{ opacity: 0 }}>
      <CardImg top width="100%" src={coverSrc} alt={info.adress} />
      <CardBody>
        <CardTitle style={{ minHeight: "55px" }}>{info.name}</CardTitle>
        <CardText style={{ minHeight: "40px" }}>
          <FontAwesomeIcon
            fixedWidth
            icon={faMapMarkerAlt}
            size="lg"
            className="pr-2"
          />
          {info.place}
        </CardText>
        <CardText style={{ minHeight: "40px" }}>
          <FontAwesomeIcon
            fixedWidth
            icon={faCalendar}
            size="lg"
            className="pr-2"
          />
          {info.date}
        </CardText>
        <CardText style={{ minHeight: "40px" }}>
          <FontAwesomeIcon
            fixedWidth
            icon={faRubleSign}
            size="lg"
            className="pr-2"
          />
          {(info.prices.length > 1
            ? info.prices[0] + " - " + info.prices[info.prices.length - 1]
            : info.prices[0]) + " р."}
        </CardText>

        <Link
          onUpdate={() => window.scrollTo(0, 0)}
          to={"/event/" + info.adress}
          className="btn btn-danger"
        >
          Купить билеты
        </Link>
      </CardBody>
    </Card>
  );
};

export default TicketCard;
