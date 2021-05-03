function ImagePopup() {
  return (
    <div className="popup popup_content_photo">
      <div className="popup__container popup__container_content_photo">
        <button type="button" className="popup__close-button"/>
        <img src="" alt="" className="popup__photo"/>
        <h2 className="popup__title popup__title_content_photo"></h2>
      </div>
    </div>
  )
}

export default ImagePopup;
