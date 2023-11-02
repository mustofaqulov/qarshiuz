import classNames from 'classnames';
import Logo from '../../assets/icons/logo-white.svg';
import Arrow from '../../assets/icons/arrow-up-white.svg';
import Facebook from '../../assets/icons/facebook-white.svg';
import Telegram from '../../assets/icons/telegram-white.svg';
import Vkontakte from '../../assets/icons/vkontakte-white.svg';
import { FooterLinks } from './FooterLinks';
import style from './footer.module.scss';

export function Footer() {
  return (
    <footer>
      <div
        className={classNames(
          [style.container],
          style['footer-content'],
        )}
      >
        <div
          className={classNames([
            style['footer-info'],
          ])}
        >
          <span>
            <div
              className={classNames([style.logo])}
            >
              <Logo />
            </div>
            <p
              className={classNames([
                [style.address],
                style['footer-text'],
              ])}
            >
              © 2023 Qarshiuz. All rights
              reserved
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
                <FooterLinks to="/catalog">
                  Catalog
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/about">
                  About Us
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/events">
                  Events
                </FooterLinks>
              </li>
            </ul>

            <ul>
              <li>
                <FooterLinks to="/local-new">
                  Local new
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/childrens-park">
                  Children's park
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/Concert-hall">
                  Concert hall
                </FooterLinks>
              </li>
            </ul>

            <ul>
              <li>
                <FooterLinks to="/library">
                  Library
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/nightclubs">
                  Nightclubs
                </FooterLinks>
              </li>
              <li>
                <FooterLinks to="/zoo">
                  Zoo
                </FooterLinks>
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
