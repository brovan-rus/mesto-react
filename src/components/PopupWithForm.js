function PopupWithForm({content, title, children, isOpen}) {
  return (
    <div className={`popup popup_content_${content}, ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container popup__container_content_form`}>
        <button type="button" className="popup__close-button"/>
        <h2 className="popup__title">{title}</h2>
        <form name={content} className="form" action="#" noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
