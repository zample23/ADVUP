import './footer.scss';
import logoBlack from './../../img/logo_black.svg';
import iconTwitter from './../../img/socials/socials_twitter.svg';
import iconTelegram from './../../img/socials/socials_telegram.svg';
import iconFacebook from './../../img/socials/socials_facebook.svg';
import iconTwitch from './../../img/socials/socials_twitch.svg';
import iconInstagram from './../../img/socials/socials_instagram.svg';

const Footer = () => {
  return (
    <footer className="footer" id="anchorcontacts">
      <div className="container">
        <div className="footer__top">
          <div className="footer__left-column">
            <div className="footer__logo">
              <a href="#anchormain">
                <img src={logoBlack} alt="Logo" />
              </a>
            </div>
            <p className="footer__note">
              З іншого боку рамки та місце навчання кадрів дозволяє оцінити
              значення напрямів прогресивного розвитку!
            </p>
          </div>

          <div className="footer__right-column">
            <span className="footer__questions">Залишились питання?</span>
            <a href="#!" className="footer__button button">
              Пошта
            </a>
          </div>
        </div>

        <div className="footer__middle">
          <nav className="footer__nav">
            <ul>
              <li className="footer__nav-item">
                <a href="#anchorform" className="footer__nav-link">
                  Блогерам
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#anchoradvantages" className="footer__nav-link">
                  Рекламодавцям
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#anchorfooter" className="footer__nav-link">
                  Угода користувача
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#anchorprojects" className="footer__nav-link">
                  Наші кейси
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#anchorfooter" className="footer__nav-link">
                  Допомога
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__lower">
          <div className="footer__copyright">
            © 2024 ADVUP. All rights reserved.
          </div>
          <ul className="footer__socials">
            <li className="footer__social">
              <a href="#!">
                <img src={iconTwitter} alt="Twitter" />
              </a>
            </li>
            <li className="footer__social">
              <a href="#!">
                <img src={iconTelegram} alt="Telegram" />
              </a>
            </li>
            <li className="footer__social">
              <a href="#!">
                <img src={iconFacebook} alt="Facebook" />
              </a>
            </li>
            <li className="footer__social">
              <a href="#!">
                <img src={iconTwitch} alt="Twitch" />
              </a>
            </li>
            <li className="footer__social">
              <a href="#!">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
