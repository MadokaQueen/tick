import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";

const HorizontalCard = props => {
  let { info } = props;

  let coverSrc = "../images/covers/" + info.cover;
  return (
    <div className="shadow hor-card w-100 my-4" style={{ height: "400px" }}>
      <div style={{ position: "relative", width: "auto" }}>
        <img src={coverSrc} alt={info.adress} style={{ width: "275px" }} />
      </div>
      <div className="hor-card-text w-100">
        <div className="p-4">
          <p className="font-weight-bold h3 pb-2">{info.name}</p>
          <p className="font-weight-bold text-muted h5">
            <FontAwesomeIcon
              fixedWidth
              icon={faMapMarkerAlt}
              size="lg"
              className="pr-2"
            />
            {info.place}
          </p>
          <p className="text-muted h6">
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center"
            }}
          >
            <Link
              to={"/event/" + info.adress}
              className="btn btn-danger card-hor-link btn-lg mb-4"
            >
              Купить билеты
            </Link>
          </div>
          <div className="price-and-date" style={{ flexDirection: "row" }}>
            <p className="text-muted m-1 mb-2 h6 p-3">
              <FontAwesomeIcon
                fixedWidth
                className="pr-2"
                icon={faCalendar}
                size="lg"
              />
              {info.date}
            </p>
            <p className="text-muted m-1 h6 p-3">
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
