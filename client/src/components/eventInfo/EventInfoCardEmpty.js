import React from "react";

import { Container } from "reactstrap";

const EventInfoCardEmpty = props => {
  return (
    <Container>
      <div className="row">
        <div className="col-10 m-auto">
          <div
            className="shadow hor-card w-100 my-4"
            style={{ height: "400px" }}
          >
            <div
              style={{
                position: "relative",
                width: "275px",

                backgroundColor: "#292929"
              }}
            />
            <div className="hor-card-text w-100">
              <div className="p-0">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "320px",
                    alignItems: "center"
                  }}
                />
                <div className="price-and-date" style={{ height: "80px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventInfoCardEmpty;
