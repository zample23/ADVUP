import "./content.scss";
import contentImg from "./../../img/content_image.png";

const Content = () => {
  return (
    <section className="content ">
      <div className="container">
        <div className="content__grid">
          <div className="content__row-1 content__row">
            <div className="content__add">Рекламне агенство ADVUP</div>
            <div className="content__title">
              Новий потік клієнтів вашому продукту
            </div>
            <button className="content__button button">Приступимо</button>
          </div>

          <div className="content__row-2 content__row">
            <div className="content__image">
              <img
                src={contentImg}
                alt="Новый поток клиентов вашему продукту"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
