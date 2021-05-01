function Main() {
    return (
        <main className="content page__content">
            <section className="profile content__profile">
                <div className="profile__photo"></div>
                <div className="profile__container">
                    <div className="profile__name-containter">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__edit-button"></button>
                    </div>
                    <p className="profile__job">Исследователь океана</p>
                </div>
                <button type="button" className="profile__plus-button"></button>
            </section>
            <section className="cards content__cards">
                <ul className="cards__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;