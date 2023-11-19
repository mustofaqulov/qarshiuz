import {
  Link,
  NavLink,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';
import Logo from '../../assets/icons/logo-white.svg';
import Arrow from '../../assets/icons/arrow-up-white.svg';
import Facebook from '../../assets/icons/facebook-white.svg';
import Telegram from '../../assets/icons/telegram-white.svg';
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
          className={classNames([
            style['footer-info'],
          ])}
        >
          <div
            className={classNames(style.content)}
          >
            <Link
              to="/home"
              className={classNames([style.logo])}
            >
              <Logo />
            </Link>
            <p
              className={classNames([
                [style.address],
                style['footer-text'],
              ])}
            >
              © {new Date().getFullYear()}{' '}
              Qarshiuz. All rights reserved
            </p>
          </div>
          <div
            className={classNames(style.content)}
          >
            <p
              className={classNames([
                style['phone-num'],
                style['footer-text'],
              ])}
            >
              t. +998 99 999 99 91
            </p>
            <p
              className={classNames([
                [style.email],
                style['footer-text'],
              ])}
            >
              m. infoqarshi@gmail.com
            </p>
          </div>
        </div>
        <div
          className={classNames([
            style['footer-links'],
          ])}
        >
          <div
            className={classNames([
              style.navigation,
            ])}
          >
            <h3>
              Navigation <Arrow />
            </h3>

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
            className={classNames([
              [style.services],
            ])}
          >
            <div
              className={classNames([
                style.links,
              ])}
            >
              <h4>Terms of Service</h4>
              <h4>Privacy Policy</h4>
              <h4>General Info</h4>
            </div>
            <div
              className={classNames([
                style.icons,
              ])}
            >
              <Facebook />
              <Telegram />
              <Vkontakte />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
