import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Hamburger from '../../assets/icons/navbar-hamburger.svg';
import CloseHamburger from '../../assets/icons/nav-menu-clouse.svg';
import style from './header.module.scss';
import { LanguageTab } from '../LanguageTab/LanguageTab';

const linksData = [
  { id: 1, text: 'Home', link: '/' },
  { id: 2, text: 'Category', link: '/category' },
  { id: 3, text: 'Events', link: '/events' },
  { id: 4, text: 'News', link: '/news' },
  { id: 5, text: 'About Us', link: '/about' },
].reverse();

export function Header() {
  const [menu, setMenu] = useState(false);

  const navClasses = classNames(
    style['nav-container'],
    menu ? style['nav-menu'] : style.nav,
  );
  const setActive = ({ isActive }) =>
    isActive
      ? style.active
      : style['nav-list_link'];

  useEffect(() => {
    document.body.style.overflow = menu
      ? 'hidden'
      : 'auto';
  }, [menu]);
  return (
    <header className={style.header}>
      <div
        className={classNames(
          'container',
          style['header-container'],
        )}
      >
        <div
          className={classNames(style.hamburger)}
        >
          <button
            onClick={setMenu.bind(null, !menu)}
          >
            <Hamburger
              onClick={() => setMenu(!menu)}
            />
          </button>
        </div>

        <Link to="/">
          <Logo />
        </Link>

        <nav className={classNames(navClasses)}>
          <CloseHamburger
            className={style['nav-close-icon']}
            onClick={() => setMenu(!menu)}
          />
          <ul
            className={classNames(
              style['nav-list'],
            )}
          >
            {linksData.map(
              ({ id, text, link }) => {
                return (
                  <li key={id}>
                    <NavLink
                      to={link}
                      className={setActive}
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              },
            )}
          </ul>
          <div
            className={classNames(
              style['header-language'],
            )}
          >
            <LanguageTab />
          </div>
        </nav>
        <div className={style['header-btn']}>
          <LanguageTab />
        </div>
      </div>

      {menu && (
        <div
          onClick={setMenu.bind(null, false)}
          className={classNames(
            style['header-background'],
          )}
        />
      )}
    </header>
  );
}
