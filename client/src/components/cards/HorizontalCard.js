import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import HorizontalEmpty from "./HorizontalEmpty";
const HorizontalCard = props => {
  let { info } = props;

  if (info === undefined) {
    return <HorizontalEmpty />;
  }

  let coverSrc = "../images/covers/" + info.cover;
  return (
    <div className="shadow hor-card" style={{ height: "350px" }}>
      <div style={{ position: "relative" }}>
        <img src={coverSrc} alt={info.adress} />
      </div>
      <Link
        onClick={() => window.scrollTo(0, 0)}
        to={"/event/" + info.adress}
        className="mt-2 btn btn-danger card-buy card-hor-link"
      >
        Купить билеты
      </Link>
      <div className="hor-card-text w-100">
        <div className="p-4">
          <p className="font-weight-bold">{info.name}</p>
          <p className="font-weight-bold text-muted small">
            <FontAwesomeIcon
              fixedWidth
              icon={faMapMarkerAlt}
              size="lg"
              className="pr-2"
            />
            {info.place}
          </p>
          <p className="text-muted small">
            <FontAwesomeIcon
              fixedWidth
              icon={faCity}
              size="lg"
              className="pr-2"
            />
            {info.city}
          </p>
        </div>
        <div className="p-0">
          <div className="price-and-date">
            <p className="text-muted m-1 mb-2">
              <FontAwesomeIcon
                fixedWidth
                className="pr-2"
                icon={faCalendar}
                size="lg"
              />
              {info.date}
            </p>
            <p className="text-muted m-1">
              <FontAwesomeIcon
                fixedWidth
                className="pr-2"
                icon={faRubleSign}
                size="lg"
              />
              {(info.prices.length > 1
                ? info.prices[0] + " - " + info.prices[info.prices.length - 1]
                : info.prices[0]) + " р."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
