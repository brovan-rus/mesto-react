import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  handleEditAvatarClick,
  handleProfileEditClick,
  handleAddPlaceClick,
  handleCardClick,
}) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((answer) => {
        setCards(answer);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCardLike = (card) => {
    const isLikedByMe = card.likes.some(
      (like) => like._id === currentUser.userId
    );
    api
      .changeLikeCardStatus(card._id, isLikedByMe)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      )
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api.removeCard(card._id).then((answer) => {
      console.log(answer);
      setCards((state) => state.filter((c) => c._id === !answer._id));
    });
  };

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div
          className="profile__photo"
          style={{ backgroundImage: `url(${currentUser.userAvatar})` }}
          onClick={handleEditAvatarClick}
        />
        <div className="profile__container">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={handleProfileEditClick}
            />
          </div>
          <p className="profile__job">{currentUser.userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__plus-button"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="cards content__cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
