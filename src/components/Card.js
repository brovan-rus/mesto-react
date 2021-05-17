import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card._id === currentUser.id;
  const isLikedByMe = card.likes.some((like) => like._id === currentUser.id);

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li>
      <div className="card">
        <button
          type="button"
          className={
            isOwn ? "card__trash-button" : "card__trash-button_inactive"
          }
        />
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="card__description">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button
              type="button"
              className={
                isLikedByMe ? "card__like-button" : "card__like-button_active"
              }
            />
            <span className="card__like-counter">{card.likes.length}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
