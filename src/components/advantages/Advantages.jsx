import "./advantages.scss";

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages__title">Наші переваги</h2>
        <div className="advantages__grid">
          <div className="advantage advantage-one">
            <h3 className="advantage__name">Завжди виконуємо ваші запити</h3>
            <p className="advantage__text">
              Різноманітний та багатий досвід консультація з професіоналами з IT
              відіграє важливу роль у формуванні
            </p>
          </div>
          <div className="advantage advantage-two">
            <h3 className="advantage__name">Професійний підхід</h3>
            <p className="advantage__text">
              Рекламні агенції мають досвід роботи у різних галузях і знають, як
              ефективно залучати цільову аудиторію
            </p>
          </div>
          <div className="advantage advantage-three">
            <h3 className="advantage__name">Креативність</h3>
          </div>
          <div className="advantage advantage-four">
            <h3 className="advantage__name">Доступ до новітніх технологій</h3>
            <p className="advantage__text">
              Рекламні агентства мають доступ до найпередовіших технологій у
              галузі маркетингу та реклами
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
