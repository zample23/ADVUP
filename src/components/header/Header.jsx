import { useState } from "react";
import logoBlack from "./../../img/logo_black.svg";
import logoPink from "./../../img/logo_pink.svg";
import "./header.scss";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <header className="header ">
      <div className="container">
        <div
          className={
            burgerMenu ? `header__grid header__grid-tablet` : "header__grid"
          }
        >
          <div className="header__logo">
            <a href="#!">
              <img
                className="header__logo-pink"
                src={burgerMenu ? logoBlack : logoPink}
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

          <a
            className="header__button button"
            href="#form"
            onClick={() => setBurgerMenu(false)}
          >
            Залишити заявку
          </a>
          <div className="header__media-btn">
            <button
              className="nav-icon-btn"
              onClick={() => setBurgerMenu(!burgerMenu)}
            >
              <div
                className={
                  burgerMenu ? `nav-icon nav-icon--active` : `nav-icon`
                }
              ></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
