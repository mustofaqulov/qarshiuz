import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../assets/icons/logo-white.svg';
import Facebook from '../../assets/icons/facebook-white.svg';
import Telegram from '../../assets/icons/telegram-white.svg';
import Email from '../../assets/icons/email.svg';
import EmailIcon from '../../assets/icons/email-icon.svg';
import Vkontakte from '../../assets/icons/vkontakte-white.svg';
import style from './footer.module.scss';
import { routePaths } from '../../constants/routers';
import { footerLinksData } from '../../utils/mock/footer-links.mock';

export function Footer() {
  const { pathname } = useLocation();

  if (
    !Object.values(routePaths).includes(pathname)
  ) {
    return null;
  }
  return (
    <footer className={style.footer}>
      <div
        className={classNames(
          'container',
          style['footer-content'],
        )}
      >
        <div
          className={classNames(
            style.content,
            style.logo,
          )}
        >
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={classNames(style.rights)}>
          <p
            className={classNames([
              [style.address],
              style['footer-info'],
            ])}
          >
            © {new Date().getFullYear()}{' '}
            Qarshiuz. All rights reserved
          </p>
        </div>

        <div
          className={classNames(
            style.content,
            style.phone,
          )}
        >
          <p
            className={classNames([
              style['footer-info'],
            ])}
          >
            tel. +998 99 999 99 91
          </p>
          <Email
            className={classNames([
              style['footer-info'],
            ])}
          />
        </div>
        <div className={style.navigation}>
          <span>
            <ul>
              {footerLinksData.map(
                ({ id, title, links }) => (
                  <li
                    className={classNames(
                      style[links],
                    )}
                    key={id}
                  >
                    <NavLink to={title}>
                      {title}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </span>
        </div>
        <div
          className={classNames([style.links])}
        >
          <h4>Terms of Service</h4>
          <h4>Privacy Policy</h4>
          <h4>General Info</h4>
        </div>
        <div
          className={classNames([style.icons])}
        >
          <Facebook />
          <Telegram />
          <Vkontakte />
          <a href="mailto:infoqarshi@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
