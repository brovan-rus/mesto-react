import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({
  handleEditAvatarClick,
  handleProfileEditClick,
  handleAddPlaceClick,
}) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState("../images/kusto.jpg");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCurrentUser()
      .then((answer) => {
        setUserName(answer.name);
        setUserDescription(answer.about);
        setUserAvatar(answer.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((answer) => {
        setCards(answer);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div
          className="profile__photo"
          style={{ backgroundImage: `url(${userAvatar})` }}
          onClick={handleEditAvatarClick}
        />
        <div className="profile__container">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={handleProfileEditClick}
            />
          </div>
          <p className="profile__job">{userDescription}</p>
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
            <Card card={card} key={card._id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
