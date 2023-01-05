import { faAngleDoubleRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import "./carousel.css";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="cr-container">
            <div className="cr-1">
              <img
                className="d-block w-100"
                src="https://cdn.turkishairlines.com/m/6d856c7fca12576e/original/uefa-block.webp"
                alt="First slide"
              />

              <h2>UEFA Şampiyonlar Ligi tarihine yolculuk</h2>
              <p>
                Bu yıl Türk Hava Yolları resmi sponsorluğunda gerçekleşecek
                Avrupa’nın en büyük spor organizasyonuna yakından bakıyoruz.
              </p>
              <p>
                Detayli bilgi
                <span>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </span>
              </p>
            </div>

            <div className="cr-1">
              <img
                className="d-block w-100"
                src="https://cdn.turkishairlines.com/m/7956af177c96129d/original/CO2Mission_Block-1.webp"
                alt="First slide"
              />

              <h2>Uçuşunuzun karbon emisyonunu dengeleyin!</h2>
              <p>
                Uçuşunuzdan kaynaklanan karbon emisyonunu dengeleyerek dünyamızı
                iyileştirme çabamıza katkıda bulunun.
              </p>
              <p>
                Detayli bilgi
                <span>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </span>
              </p>
            </div>

            <div className="cr-1">
              <img
                className="d-block w-100"
                src="https://cdn.turkishairlines.com/m/bdd34937c7b95ac/original/Mobil_Uygulama_270x150_02.webp"
                alt="First slide"
              />

              <h2>
                Türk Hava Yolları mobil uygulamasını keşfedin, rahat edin!
              </h2>
              <p>
                Mobil uygulamamız ile bilet alma, mobil biniş kartı oluşturma,
                check-in gibi işlemlerinizi hızla gerçekleştirebilir; kampanya
                ve duyurularımızdan ilk siz haberdar olabilirsiniz.
              </p>
              <p>
                Detayli bilgi
                <span>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </span>
              </p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="cr-container">
            <div className="cr-1">
              <img
                className="d-block w-100"
                src="https://cdn.turkishairlines.com/m/6d20d0196da8f09d/original/holidays_270x150px.webp"
                alt="First slide"
              />

              <h2>
                Turkish Airlines Holidays ile tüm tatil ihtiyaçlarınız tek
                pakette!
              </h2>
              <p>
                Uçuş, konaklama, transfer ve araç kiralama gibi tüm seyahat
                ihtiyaçlarınızı bir arada sunan tatil paketlerimize göz atın, en
                avantajlı tatil fırsatlarını kaçırmayın!
              </p>
              <p>
                Detayli bilgi{" "}
                <span>
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </span>{" "}
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
