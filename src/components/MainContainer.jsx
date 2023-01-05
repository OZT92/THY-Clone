import React from "react";
import Cards from "./Cards";
import Discover from "./Discover";
import MainApp from "./MainApp";
import "./mainContainer.css";
import MiddleWrapper from "./MiddleWrapper";

const MainContainer = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero">
          <img
            src="https://cdn.turkishairlines.com/m/25a00299a122ba6e/original/1400x400-ana-1.png"
            alt="Trees with snow"
          />
        </div>
      </div>
      <div className="main-container">
        <MainApp />
        <Cards />
        <MiddleWrapper />
        <Discover />
      </div>
    </>
  );
};

export default MainContainer;
