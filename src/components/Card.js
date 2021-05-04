import React from "react";

function Card({ card }) {
  return (
    <li>
      <div className="card">
        <button type="button" className="card__trash-button" />
        <img className="card__image" src={card.link} alt={card.name} />
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like-button" />
            <span className="card__like-counter">55</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
