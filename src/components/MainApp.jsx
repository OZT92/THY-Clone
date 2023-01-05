import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./mainApp.css";
import {
  faClock,
  faPlane,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import Ucak from "./tabs/Ucak";
import CheckIn from "./tabs/CheckIn";
import UcusDurumu from "./tabs/UcusDurumu";

const MainApp = () => {
  return (
    <div className="main-app">
      <div className="hero-text">
        <span>MERHABA</span>
        <h2>Nereyi kesfetmek istersiniz?</h2>
      </div>
      <div class="warpper">
        <input className="radio" id="one" name="group" type="radio" checked />
        <input className="radio" id="two" name="group" type="radio" />
        <input className="radio" id="three" name="group" type="radio" />
        <input className="radio" id="four" name="group" type="radio" />
        <div className="tabs">
          <label className="tab" id="one-tab" for="one">
            <FontAwesomeIcon className="tab-icon" icon={faPlane} />{" "}
            <span>Ucak</span>
          </label>
          {/* <label className="tab" id="two-tab" for="two">
            <FontAwesomeIcon className="tab-icon" icon={faHotel} />{" "}
            <span>Ucak + Otel</span>
          </label> */}
          <label className="tab" id="three-tab" for="three">
            <FontAwesomeIcon className="tab-icon" icon={faTicketAlt} />{" "}
            <span>Check-in / Bilet yonetimi</span>
          </label>
          <label className="tab" id="four-tab" for="four">
            <FontAwesomeIcon className="tab-icon" icon={faClock} />{" "}
            <span>Ucus durumu</span>
          </label>
        </div>
        <div className="panels">
          <div className="panel" id="one-panel">
            <Ucak />
          </div>
          {/* <div className="panel" id="two-panel">
            <Otel />
          </div> */}
          <div className="panel" id="three-panel">
            <CheckIn />
          </div>
          <div className="panel" id="four-panel">
            <UcusDurumu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
