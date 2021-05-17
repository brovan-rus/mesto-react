import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

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

  const [cards, setCards] = React.useState([]);

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
      console.log(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  };

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
          userId: _id,
          avatar: avatar,
        });
      })
      .catch((err) => console.log(err));
    closeAllPopups();
  }

  function handleUpdateAvatar(avatarRef) {
    api
      .avatarChange(avatarRef.current.value)
      .then(({ name, about, _id, avatar }) =>
        setCurrentUser({
          userName: name,
          userDescription: about,
          userAvatar: avatar,
          userId: _id,
        })
      )
      .catch((err) => console.log(err));
    avatarRef.current.value = "";
    closeAllPopups();
  }

  function handleCardAdd(name, link) {
    api
      .addNewCard({ name, link })
      .then((newCard) => setCards([newCard, ...cards]))
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onCardAdd={handleCardAdd}
      />

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
