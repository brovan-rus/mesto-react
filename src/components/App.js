import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function App() {
  return (
      <>
          <div className="page page_position_center">
              <Header/>
              <Main/>
              <Footer/>
          </div>
          <div className="popup popup_content_profile-edit">
              <div className="popup__container popup__container_content_form">
                  <button type="button" className="popup__close-button"></button>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <form name="profile" action="#" className="form" novalidate>
                      <input className="form__input form__input_info_name" autocomplete="off" id="profile-name-input" required
                             minlength="2" maxlength="40" type="text" name="userName" placeholder="Имя" />
                          <span className="form__input-error profile-name-input-error"></span>
                          <input className="form__input form__input_info_value" autocomplete="off" id="profile-job-input" required
                                 minlength="2" maxlength="200" type="text" name="userJob" placeholder="О себе" />
                              <span className="form__input-error profile-job-input-error"></span>
                              <button className="form__submit-button" type="submit">Сохранить</button>
                  </form>
              </div>
          </div>

          <div className="popup popup_content_photo">
              <div className="popup__container popup__container_content_photo">
                  <button type="button" className="popup__close-button"></button>
                  <img src="" alt="" className="popup__photo" />
                      <h2 className="popup__title popup__title_content_photo">Казань</h2>
              </div>
          </div>
          <div className="popup popup_content_card-add">
              <div className="popup__container popup__container_content_form">
                  <button type="button" class="popup__close-button"></button>
                  <h2 className="popup__title">Новое место</h2>
                  <form name="card" class="form" action="#" novalidate>
                      <input className="form__input form__input_info_name" id="card-title-input" required autocomplete="off" minlength="2"
                             maxlength="30" type="text" name="name" placeholder="Название" />
                          <span className="form__input-error card-title-input-error"></span>
                          <input className="form__input form__input_info_value" autocomplete="off" required id="card-link-input" type="url"
                                 name="link" placeholder="Ссылка на картинку" />
                              <span className="form__input-error card-link-input-error"></span>
                              <button className="form__submit-button" type="submit">Создать</button>
                  </form>
              </div>
          </div>

          <div className="popup popup_content_delete-card">
              <div className="popup__container popup__container_content_form">
                  <button type="button" className="popup__close-button"></button>
                  <h2 className="popup__title popup__title_content_delete-card">Вы уверены?</h2>
                  <button className="popup__approve-button" type="button">Да</button>
              </div>
          </div>

          <div className="popup popup_content_avatar-renew">
              <div className="popup__container popup__container_content_form">
                  <button type="button" className="popup__close-button"></button>
                  <h2 className="popup__title popup__title_content_avatar-renew ">Обновить аватар</h2>
                  <form name="avatar" action="#" className="form" novalidate>
                      <input className="form__input form__input_info_value" autocomplete="off" required id="avatar-link-input" type="url"
                             name="link" placeholder="Ссылка на аватар" />
                          <span className="form__input-error form__input-error_content_avatar-renew avatar-link-input-error"></span>
                          <button className="form__submit-button" type="submit">Сохранить</button>
                  </form>
              </div>
          </div>
      </>
  );
}

export default App;
