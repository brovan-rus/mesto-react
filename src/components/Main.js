function Main() {
    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__photo" onClick={handleEditAvatarClick}></div>
                <div className="profile__container">
                    <div className="profile__name-containter">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button" onClick={handleProfieEditClick}></button>
                    </div>
                    <p className="profile__job">Исследователь океана</p>
                </div>
                <button type="button" className="profile__plus-button" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="cards content__cards">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    );
}

function handleEditAvatarClick() {
    document.querySelector('.popup_content_avatar-renew').classList.add('popup_opened');
}

function handleProfieEditClick() {
    document.querySelector('.popup_content_profile-edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
    document.querySelector('.popup_content_card-add').classList.add('popup_opened');
}

export default Main;