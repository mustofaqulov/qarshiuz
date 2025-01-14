import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Hamburger from '../../assets/icons/navbar-hamburger.svg';
import CloseHamburger from '../../assets/icons/nav-menu-clouse.svg';
import SearchIcon from '../../assets/icons/search.svg';
import style from './header.module.scss';
import { LanguageTab } from '../LanguageTab/LanguageTab';

const linksData = [
  { id: 1, text: 'Home', link: '/' },
  { id: 2, text: 'Events', link: '/events' },
  { id: 3, text: 'News', link: '/news' },
  { id: 4, text: 'About Us', link: '/about' },
];

export function Header() {
  const [isOpenMenu, setIsOpenMenu] =
    useState(false);
  const navClasses = classNames(
    style.nav,
    isOpenMenu ? style['nav-menu'] : '',
  );

  const activeClass = ({ isActive }) =>
    classNames(
      style['nav-list_link'],
      isActive ? style.active : '',
    );
  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add(style.hidden);
    } else {
      document.body.classList.remove(
        style.hidden,
      );
    }
  }, [isOpenMenu]);
  const handleOtherClicks = () => {
    setIsOpenMenu((isOpen) => !isOpen);
  };

  return (
    <header className={style.header}>
      <div
        className={classNames(
          'container',
          style['header-container'],
        )}
      >
        <button
          onClick={handleOtherClicks}
          className={classNames(style.hamburger)}
        >
          <Hamburger />
        </button>

        <Link to="/">
          <Logo />
        </Link>

        <nav className={navClasses}>
          <div
            className={classNames(
              style['nav-content'],
            )}
          >
            <button
              onClick={() => setIsOpenMenu(false)}
              className={style['nav-close-btn']}
            >
              <CloseHamburger />
            </button>
            <ul
              className={classNames(
                style['nav-list'],
              )}
            >
              {linksData.map(
                ({ id, text, link }) => {
                  return (
                    <li
                      key={id}
                      className={style.show}
                    >
                      <button>
                        <NavLink
                          to={link}
                          className={activeClass}
                        >
                          {text}
                        </NavLink>
                      </button>
                    </li>
                  );
                },
              )}
              {linksData.map(
                ({ id, text, link }) => {
                  return (
                    <li
                      key={id}
                      className={style.hide}
                    >
                      <button
                        onClick={setIsOpenMenu.bind(
                          null,
                          !isOpenMenu,
                        )}
                      >
                        <NavLink
                          to={link}
                          className={activeClass}
                        >
                          {text}
                        </NavLink>
                      </button>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </nav>
        <div>
          <button>
            <SearchIcon />
          </button>
          <LanguageTab />
        </div>
      </div>
    </header>
  );
}
