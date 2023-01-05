import { faArrowRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ucusDurumu.css";

const UcusDurumu = () => {
  return (
    <div className="ucus-durumu">
      <div className="ucus-durumu-container">
        <div className="ud-item ud-item-date">
          <h4>
            Ucus no
            <span>
              <FontAwesomeIcon
                className="fa-icon-date 
          "
                icon={faCaretDown}
              />
            </span>
          </h4>
        </div>

        <div className="ud-item">
          <input
            className="input-field"
            type="text"
            placeholder="TK Ucus numarasini girin"
          />
        </div>

        <div className="ud-item ud-item-date">
          <h6>Sali</h6>
          <h4>
            27
            <span>
              <FontAwesomeIcon
                className="fa-icon-date 
          "
                icon={faCaretDown}
              />
            </span>
          </h4>
          <h5>Ara</h5>
        </div>
        <div className="ud-item ud-btn">
          <span className="ud-btn-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UcusDurumu;
