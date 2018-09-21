import React from "react";

const HorizontalEmpty = () => {
  return (
    <div className="shadow hor-card" style={{ opacity: 1 }}>
      <div style={{ position: "relative" }}>
        <div
          style={{ width: "240px", height: "350px" }}
          className="bg-secondary"
        />
      </div>
      <div className="hor-card-text w-100">
        <div className="p-4" />
        <div className="p-0">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100%",
              alignItems: "center"
            }}
          />
          <div className="price-and-date">
            <p className="m-1 mb-2" style={{ color: "#f5f5f5" }}>
              date
            </p>
            <p className="m-1" style={{ color: "#f5f5f5" }}>
              price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalEmpty;
