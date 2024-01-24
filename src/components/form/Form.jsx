import "./form.scss";

const Form = () => {
  return (
    <section className="form-section">
      <div className="container-small">
        <h2 className="form-section__title" id="form">
          Залишити заявку
        </h2>

        <p className="form-section__description">
          Рекламні агенції мають досвід роботи у різних галузях і знають, як
          ефективно залучати цільову аудиторію
        </p>

        <form
          action="#"
          className="form"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form__profession-box">
            <div className="form__label">Діяльність</div>
            <div className="form__profession">
              <input
                type="radio"
                name="profession"
                id="bloger"
                value="Блогер"
              />
              <label htmlFor="bloger">Блогер</label>
              <input
                type="radio"
                name="profession"
                id="advertiser"
                value="Рекламодавець"
              />
              <label htmlFor="advertiser">Рекламодавець</label>
            </div>
          </div>

          <div className="form__input-box">
            <label className="form__label" htmlFor="name">
              Ваше ім'я
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Введіть ваше ім'я"
            />
          </div>

          <div className="form__input-box">
            <label className="form__label" htmlFor="mail">
              Пошта
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              placeholder="Введіть електронну пошту"
            />
          </div>

          <div className="form__input-box">
            <label className="form__label" htmlFor="tel">
              Телефон
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Введіть ваш номер телефону"
            />
          </div>

          <div className="form__comments">
            <label className="form__label" htmlFor="comments">
              Коментарі
            </label>
            <textarea
              name="comments"
              id="comments"
              placeholder="Залиште свій коментар"
            ></textarea>
          </div>

          <div className="form__ending">
            <button className="form__button button" type="submit">
              Відправити
            </button>

            <div className="form__consent">
              Натиснувши кнопку, ви погоджуєтесь на{" "}
              <a href="#!">обробку персональних даних</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
