import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faAngleDown,
  faComments,
  faEarthAmericas,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top-partial">
        <p className="header-top-item">Corporate Clup</p>
        <p className="header-top-item">Miles&Smiles</p>
        <p className="header-top-item">
          <span>
            <FontAwesomeIcon className="header-top-icon" icon={faComments} />
          </span>
          Geri bildirim
        </p>
        <p className="header-top-item">
          <span>
            <FontAwesomeIcon className="header-top-icon" icon={faSearch} />
          </span>
          Ara
        </p>
        <p className="header-top-item">
          <span>
            <FontAwesomeIcon
              className="header-top-icon"
              icon={faEarthAmericas}
            />
          </span>
          TR - INT
          <span>
            <FontAwesomeIcon className="header-top-icon" icon={faAngleDown} />
          </span>
        </p>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img
            className="nav-logo-img"
            src="https://cdn.turkishairlines.com/m/2190da9e53a70e4e/original/THY-LOGO.png"
            alt="THY logo"
          />
        </div>
        <div className="navbar-right">
          <div className="navbar-right-left">
            <p className="navbar-item">PLANLA & UC</p>
            <p className="navbar-item">SEYAHAT DENEYIMI</p>
            <p className="navbar-item">KESFET</p>
          </div>
          <div className="navbar-right-right">
            <p className="navbar-item-fixed">Uye Ol</p>

            <button className="login-btn">
              GIRIS YAP
              <FontAwesomeIcon className="user-icon" icon={faUser} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
