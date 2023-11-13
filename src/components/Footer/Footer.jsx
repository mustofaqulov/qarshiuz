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
          <span>
            <Link
              to="/"
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
          </span>
          <span>
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
          </span>
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
            <ul>
              <li>
                <NavLink to="">Catalog</NavLink>
              </li>
              <li>
                <NavLink to="">About Us</NavLink>
              </li>
              <li>
                <NavLink to="">Events</NavLink>
              </li>
            </ul>

            <ul>
              <li>
                <NavLink to="">Local new</NavLink>
              </li>
              <li>
                <NavLink to="">
                  Children&apos;s park
                </NavLink>
              </li>
              <li>
                <NavLink to="">
                  Concert hall
                </NavLink>
              </li>
            </ul>

            <ul>
              <li>
                <NavLink to="">Library</NavLink>
              </li>
              <li>
                <NavLink to="">
                  Nightclubs
                </NavLink>
              </li>
              <li>
                <NavLink to="">Zoo</NavLink>
              </li>
            </ul>
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
