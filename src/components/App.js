import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfileOpen] = React.useState(false);
  const  [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleProfileEditClick = () => {
    setIsEditProfileOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  return (
    <>
      <div className="page page_position_center">
        <Header/>
        <Main handleAddPlaceClick={handleAddPlaceClick} handleEditAvatarClick={handleEditAvatarClick}
              handleProfileEditClick={handleProfileEditClick}/>
        <Footer/>
      </div>

      <PopupWithForm title="Редактировать профиль" content="profile-edit"  isOpen={isEditProfilePopupOpen}>
        <input className="form__input form__input_info_name" autoComplete="off" id="profile-name-input" required
               minLength="2" maxLength="40" type="text" name="userName" placeholder="Имя"/>
        <span className="form__input-error profile-name-input-error"></span>
        <input className="form__input form__input_info_value" autoComplete="off" id="profile-job-input" required
               minLength="2" maxLength="200" type="text" name="userJob" placeholder="О себе"/>
        <span className="form__input-error profile-job-input-error"></span>
        <button className="form__submit-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Новое место" content="card-add" isOpen={isAddPlacePopupOpen}>
        <input className="form__input form__input_info_name" id="card-title-input" required autoComplete="off"
               minLength="2" maxLength="30" type="text" name="name" placeholder="Название"/>
        <span className="form__input-error card-title-input-error"></span>
        <input className="form__input form__input_info_value" autoComplete="off" required id="card-link-input"
               type="url" name="link" placeholder="Ссылка на картинку"/>
        <span className="form__input-error card-link-input-error"></span>
        <button className="form__submit-button" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm title="Обновить аваар" content="delete-card" isOpen={isEditAvatarPopupOpen}>
        <input className="form__input form__input_info_value" autoComplete="off" required id="avatar-link-input" type="url" name="link" placeholder="Ссылка на аватар"/>
        <span className="form__input-error form__input-error_content_avatar-renew avatar-link-input-error"></span>
        <button className="form__submit-button" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" content="delete-card">
        <button className="popup__approve-button" type="button">Да</button>
      </PopupWithForm>

    </>
  );
}

export default App;

// <div className="popup popup_content_profile-edit">
//     <div className="popup__container popup__container_content_form">
//         <button type="button" className="popup__close-button"></button>
//         <h2 className="popup__title">Редактировать профиль</h2>
//         <form name="profile" action="#" className="form" noValidate>
//             <input className="form__input form__input_info_name" autoComplete="off" id="profile-name-input" required
//                    minLength="2" maxLength="40" type="text" name="userName" placeholder="Имя"/>
//             <span className="form__input-error profile-name-input-error"></span>
//             <input className="form__input form__input_info_value" autoComplete="off" id="profile-job-input" required
//                    minLength="2" maxLength="200" type="text" name="userJob" placeholder="О себе"/>
//             <span className="form__input-error profile-job-input-error"></span>
//             <button className="form__submit-button" type="submit">Сохранить</button>
//         </form>
//     </div>

//
// <div className="popup popup_content_card-add">
//     <div className="popup__container popup__container_content_form">
//         <button type="button" className="popup__close-button"></button>
//         <h2 className="popup__title">Новое место</h2>
//         <form name="card" className="form" action="#" noValidate>
//             <input className="form__input form__input_info_name" id="card-title-input" required autoComplete="off"
//                    minLength="2"
//                    maxLength="30" type="text" name="name" placeholder="Название"/>
//             <span className="form__input-error card-title-input-error"></span>
//             <input className="form__input form__input_info_value" autoComplete="off" required id="card-link-input"
//                    type="url"
//                    name="link" placeholder="Ссылка на картинку"/>
//             <span className="form__input-error card-link-input-error"></span>
//             <button className="form__submit-button" type="submit">Создать</button>
//         </form>
//     </div>
// </div>
//
// <div className="popup popup_content_delete-card">
//     <div className="popup__container popup__container_content_form">
//         <button type="button" className="popup__close-button"></button>
//         <h2 className="popup__title popup__title_content_delete-card">Вы уверены?</h2>
//         <button className="popup__approve-button" type="button">Да</button>
//     </div>
// </div>
//
// <div className="popup popup_content_avatar-renew">
//     <div className="popup__container popup__container_content_form">
//         <button type="button" className="popup__close-button"></button>
//         <h2 className="popup__title popup__title_content_avatar-renew ">Обновить аватар</h2>
//         <form name="avatar" action="#" className="form" noValidate>
//             <input className="form__input form__input_info_value" autoComplete="off" required id="avatar-link-input"
//                    type="url"
//                    name="link" placeholder="Ссылка на аватар"/>
//             <span
//                 className="form__input-error form__input-error_content_avatar-renew avatar-link-input-error"></span>
//             <button className="form__submit-button" type="submit">Сохранить</button>
//         </form>
//     </div>
// </div>
