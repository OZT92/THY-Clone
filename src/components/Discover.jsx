import React from "react";
import "./discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover-container">
        <div className="row">
          <div className="col">
            <h4> İstanbul'da Stopover: En keyifli sürpriz! </h4>
            <hr />
            <img
              src="https://cdn.turkishairlines.com/m/6567c2abf22cf697/original/Stopover.webp"
              alt="Ortakoy manzara"
            />

            <p>
              İstanbul Havalimanı'ndan aktarmalı seyahat eden yolcularımız için
              hazırladığımız İstanbul'da Stopover programı, anlaşmalı
              otellerimizde ücretsiz konaklama ve şehri keşfetme fırsatı
              sunuyor.
            </p>

            <button className="discover-btn">Kesfet</button>
          </div>
          <div className="col">
            <h4> Touristanbul: Benzersiz bir deneyim! </h4>
            <hr />
            <img
              src="https://cdn.turkishairlines.com/m/16a1746c7150923a/original/touristanbul.jpgp"
              alt="FSM manzara"
            />

            <p>
              İstanbul’da 6 ile 24 saat arası aktarması bulunan dış hat
              yolcularımız için sunduğumuz Touristanbul hizmetimizden ücretsiz
              şekilde faydalanarak, şehri keşfederken benzersiz anılar
              biriktirebilirsiniz.
            </p>

            <button className="discover-btn">Kesfet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
