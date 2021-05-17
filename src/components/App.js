import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState({ isOpened: false });
  const [currentUser, setCurrentUser] = React.useState({
    userName: "Загрузка...",
    userDescription: "Загрузка...",
    userAvatar: "../images/loading.jpg",
    userId: "",
  });

  React.useEffect(() => {
    api
      .getCurrentUser()
      .then(({ name, about, avatar, _id }) => {
        setCurrentUser({
          userName: name,
          userDescription: about,
          userAvatar: avatar,
          userId: _id,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleProfileEditClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isOpened: false });
  }

  function handleCardClick(card) {
    setSelectedCard({ ...card, isOpened: true });
  }

  function handleUpdateUser(name, description) {
    api
      .setCurrentUser({ userName: name, userDescription: description })
      .then(({ name, about, avatar, _id }) => {
        setCurrentUser({
          userName: name,
          userDescription: about,
          userAvatar: avatar,
          userId: _id,
        });
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page page_position_center">
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleProfileEditClick={handleProfileEditClick}
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <PopupWithForm
        title="Новое место"
        submitButtonText="Создать"
        content="card-add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_info_name"
          id="card-title-input"
          required
          autoComplete="off"
          minLength="2"
          maxLength="30"
          type="text"
          name="name"
          placeholder="Название"
        />
        <span className="form__input-error card-title-input-error"></span>
        <input
          className="form__input form__input_info_value"
          autoComplete="off"
          required
          id="card-link-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
        />
        <span className="form__input-error card-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        submitButtonText="Сохранить"
        content="delete-card"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          className="form__input form__input_info_value"
          autoComplete="off"
          required
          id="avatar-link-input"
          type="url"
          name="link"
          placeholder="Ссылка на аватар"
        />
        <span className="form__input-error form__input-error_content_avatar-renew avatar-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        submitButtonText="Да"
        content="delete-card"
        onClose={closeAllPopups}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
