import React from "react";
import {
  faArrowRight,
  faCalendar,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ucak.css";

const Ucak = () => {
  return (
    <div className="ucak">
      <div className="panel-title">
        <div className="radio-btns">
          <div className="radio-btn">
            <form>
              <input className="check-box" type="radio" />
              <span className="check-box-text">Gidis-Donus</span>
            </form>
          </div>
          <div className="radio-btn">
            <input className="check-box" type="radio" />
            <span className="check-box-text">Tek yon</span>
          </div>
          <div className="radio-btn">
            <input className="check-box" type="radio" />
            <span className="check-box-text">Coklu ucus</span>
          </div>
        </div>
        <div className="radio-btns-right">
          <input className="check-box" type="radio" />
          <span className="odul-bilet">
            Odul bilet - Millerinizle bilet alin
          </span>
        </div>
      </div>
      <div className="flight-finder-container">
        <div className="ff-item">
          <input className="input-field" type="text" placeholder="Nereden" />
        </div>
        <FontAwesomeIcon className="change-icon" icon={faRepeat} />
        <div className="ff-item">
          <input className="input-field" type="text" placeholder="Nereye" />
        </div>
        <div className="ff-item ff-date">
          <span className="ff-date-icon">
            <FontAwesomeIcon icon={faCalendar} />
          </span>
          <span>Tarih</span>
        </div>
        <div className="ff-item">
          <h6>Yolcular</h6>
          <h4>1 Yolcu</h4>
          <h5>ECO</h5>
        </div>
        <div className="ff-item ff-btn">
          <span>Ucus ara </span>
          <span className="ff-btn-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className="onceki-aramalar">
        <p>Onceki aramalarim</p>
      </div>
    </div>
  );
};

export default Ucak;
