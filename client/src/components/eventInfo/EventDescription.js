import React from "react";

const EventDescription = props => {
  return (
    <React.Fragment>
      {props.text.split("<br/>").map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </React.Fragment>
  );
};

export default EventDescription;
