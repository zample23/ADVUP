import { useState } from "react";
import validation from "./validation";
import "./form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    activity: "",
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleValidation = (event) => {
    event.preventDefault();

    const validationErrors = validation(formData);

    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        activity: "",
        name: "",
        email: "",
        phone: "",
        comment: "",
      });
    }

    setErrors(validationErrors);
  };

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
          onSubmit={handleValidation}
        >
          <div className="form__profession-box">
            <div className="form__label">Діяльність</div>
            <div className="form__profession">
              <input
                type="radio"
                name="activity"
                id="bloger"
                value="bloger"
                onChange={handleInput}
                checked={formData.activity === "bloger"}
              />
              <label htmlFor="bloger">Блогер</label>
              <input
                type="radio"
                name="activity"
                id="advertiser"
                value="advertiser"
                onChange={handleInput}
                checked={formData.activity === "advertiser"}
              />
              <label htmlFor="advertiser">Рекламодавець</label>
            </div>
            {errors.activity && <p className="error">{errors.activity}</p>}
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
              value={formData.name}
              onChange={handleInput}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form__input-box">
            <label className="form__label" htmlFor="email">
              Пошта
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Введіть електронну пошту"
              value={formData.email}
              onChange={handleInput}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form__input-box">
            <label className="form__label" htmlFor="phone">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Введіть ваш номер телефону"
              value={formData.phone}
              onChange={handleInput}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form__comments">
            <label className="form__label" htmlFor="comment">
              Коментар (необов'язковий)
            </label>
            <textarea
              name="comment"
              id="comment"
              placeholder="Залиште свій коментар"
              value={formData.comment}
              onChange={handleInput}
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
