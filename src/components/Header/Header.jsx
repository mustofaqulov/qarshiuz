import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import {
  useEffect,
  useState,
  useRef,
} from 'react';
import Logo from '../../assets/icons/logo.svg';
import Hamburger from '../../assets/icons/navbar-hamburger.svg';
import CloseHamburger from '../../assets/icons/nav-menu-clouse.svg';
import SearchIcon from '../../assets/icons/search.svg';
import style from './header.module.scss';

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

  const navMenu = useRef();
  const hamburger = useRef();

  useEffect(() => {
    document.body.style.overflow = isOpenMenu
      ? 'hidden'
      : 'auto';
  }, [isOpenMenu]);

  const handleOtherClicks = ({ target }) => {
    if (
      !navMenu.current.contains(target) &&
      !hamburger.current.contains(target)
    ) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener(
      'click',
      handleOtherClicks,
    );
    return () => {
      window.removeEventListener(
        'click',
        handleOtherClicks,
      );
    };
  }, []);

  return (
    <header className={style.header}>
      <div
        className={classNames(
          'container',
          style['header-container'],
        )}
      >
        <button
          onClick={() => {
            setIsOpenMenu(true);
          }}
          className={classNames(style.hamburger)}
          ref={hamburger}
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
            ref={navMenu}
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
                    <li key={id}>
                      <botton
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
                      </botton>
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
      {/* {isOpenMenu && (
        <button
          onClick={() => setIsOpenMenu(false)}
          className={classNames(
            style['header-background'],
          )}
          aria-label="Close"
        />
      )} */}
    </header>
  );
}
