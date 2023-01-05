import React from "react";
import Card from "./Card";
import "./cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        title="Ek hizmetler"
        img="https://www.turkishairlines.com/theme/img/icons/ek-hizmetler.svg"
        content="Seyahatinizi zenginleştirmenizi sağlayacak otel rezervasyonu ve araç kiralama gibi hizmetlerimizden faydalanabilirsiniz."
      />
      <Card
        title="Seyahat gereksinimleri"
        img="https://www.turkishairlines.com/theme/img/icons/seyahat-kisitlamalari.svg"
        content="Interaktif harita uygulamamizi kullanarak ulkelerin guncel seyahat gereksinimlerine erisebilirsiniz."
      />
      <Card
        title="Turkish Airlines Gift Card"
        img="https://www.turkishairlines.com/theme/img/icons/kampanya.svg"
        content="Turkish Airlines Gift Card satin alarak sevdiklerinize surpriz bir seyahat deneyimi armagan edebilir, onlara yeni yerler kesfetmenin heyecanini yasatabilirsiniz."
      />
    </div>
  );
};

export default Cards;
