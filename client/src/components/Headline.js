import React from "react";
const Headline = props => {
  return (
    <div className="small-header text-dark">
      <h5>{props.text}</h5>
    </div>
  );
};

export default Headline;
