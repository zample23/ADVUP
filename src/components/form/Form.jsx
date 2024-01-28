import { useState } from "react";
import "./form.scss";

const Form = () => {
  const [formData, setFormData] = useState({
    activity: "",
    name: "",
    mail: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
        >
          <div className="form__profession-box">
            <div className="form__label">Діяльність</div>
            <div className="form__profession">
              <input
                type="radio"
                name="profession"
                id="bloger"
                value="bloger"
                onChange={(event) =>
                  setFormData({ ...formData, activity: event.target.value })
                }
                checked={formData.activity === "bloger"}
              />
              <label htmlFor="bloger">Блогер</label>
              <input
                type="radio"
                name="profession"
                id="advertiser"
                value="advertiser"
                onChange={(event) =>
                  setFormData({ ...formData, activity: event.target.value })
                }
                checked={formData.activity === "advertiser"}
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
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
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
              value={formData.mail}
              onChange={(event) =>
                setFormData({ ...formData, mail: event.target.value })
              }
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
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
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
              value={formData.comment}
              onChange={(event) =>
                setFormData({ ...formData, comment: event.target.value })
              }
            ></textarea>
          </div>

          <div className="form__ending">
            <button
              className="form__button button"
              type="submit"
              onClick={handleSubmit}
            >
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
