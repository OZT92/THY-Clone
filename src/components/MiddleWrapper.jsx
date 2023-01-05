import React from "react";
import "./middleWrapper.css";

const MiddleWrapper = () => {
  return (
    <div className="middle-wrapper">
      <img
        src="https://cdn.turkishairlines.com/m/77b90d1f6a7bfa42/original/Passenger-Rights.jpg"
        alt="Yolcu haklari"
      />
      <p>
        {" "}
        Yolcu hakları konusunda detaylı bilgilere erişmek için lütfen{" "}
        <span>tiklayin</span>
      </p>
    </div>
  );
};

export default MiddleWrapper;
