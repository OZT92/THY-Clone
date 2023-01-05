import { faChevronRight } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./card.css";

const Card = ({ title, img, content }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          className="book-flight-icon"
          src={img}
          alt="Suitcase, ticket, plane"
        />
      </div>
      <div className="book-flight-content">
        <h2>
          {title}
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </h2>

        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
