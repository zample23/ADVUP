import { useState, useEffect } from 'react';
import logoBlack from './../../img/logo_black.svg';
import logoPink from './../../img/logo_pink.svg';
import './header.scss';

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    if (burgerMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [burgerMenu]);

  return (
    <header className="header" id="anchormain">
      <div className="container">
        <div
          className={
            burgerMenu ? `header__grid header__grid-tablet` : 'header__grid'
          }
        >
          <div className="header__logo">
            <a href="#anchormain">
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
                <a
                  className="header__nav-link"
                  href="#anchorform"
                  onClick={() => setBurgerMenu(false)}
                >
                  Блогерам
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#anchoradvantages"
                  onClick={() => setBurgerMenu(false)}
                >
                  Рекламодавцям
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#anchorprojects"
                  onClick={() => setBurgerMenu(false)}
                >
                  Кейси
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#anchorcontacts"
                  onClick={() => setBurgerMenu(false)}
                >
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
