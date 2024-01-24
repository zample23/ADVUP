import "./header.scss";
import logo from "./../../img/logo_black.svg";
import logoPink from "./../../img/logo_pink.svg";

const Header = () => {
  return (
    <header className="header ">
      <div className="container">
        <div className="header__grid">
          <div className="header__logo">
            <a href="#!">
              <img className="header__logo-pink" src={logoPink} alt="ADVUP" />
            </a>
            <a href="#!">
              <img
                className="header__logo-black hidden"
                src={logo}
                alt="ADVUP"
              />
            </a>
          </div>

          <nav className="header__nav">
            <ul>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#!">
                  Блогерам
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#!">
                  Рекламодавцям
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#!">
                  Кейси
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#!">
                  Контакти
                </a>
              </li>
            </ul>
          </nav>

          <a className="header__button button" href="#form">
            Залишити заявку
          </a>
          <div className="header__media-btn">
            <button className="nav-icon-btn">
              <div className="nav-icon"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
