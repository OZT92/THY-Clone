import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./checkIn.css";

const CheckIn = () => {
  return (
    <div className="checkin">
      <div className="hotel-finder-container">
        <div className="hf-item">
          <form>
            <input
              className="input-field"
              type="text"
              placeholder="Bilet ya da rezervasyon kodu (PNR)"
            />
          </form>
        </div>

        <div className="hf-item">
          <input
            className="input-field"
            type="text"
            placeholder="Yolcunun soyadi"
          />
        </div>

        <div className="ff-item ff-btn">
          <span className="hf-btn-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className="sss">
        <p>Rezervasyon kodu (PNR) ve bilet numarasi nedir?</p>
        <p>Havalimanlarındaki online/mobil check-in olanakları</p>
      </div>
    </div>
  );
};

export default CheckIn;
