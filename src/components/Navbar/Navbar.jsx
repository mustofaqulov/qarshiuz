import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../Button/Button';
import AddIcon from '../../assets/icons/add-icon-white.svg';
import Logo from '../../assets/icons/logo.svg';
import style from './navbar.module.scss';
import { LanguageTab } from '../LanguageTab/LanguageTab';

const navbarData = [
  { id: 1, text: 'About Us', link: '/about' },
  { id: 2, text: 'News', link: '/news' },
  { id: 3, text: 'Events', link: '/events' },
  { id: 4, text: 'Category', link: '/category' },
  { id: 5, text: 'Home', link: '/' },
];

export function Navbar() {
  const setActive = ({ isActive }) =>
    isActive
      ? style.active
      : style['nav-list_link'];

  return (
    <header className={style.header}>
      <div
        className={classNames(
          'container',
          style['header-container'],
        )}
      >
        <Link to="/">
          <Logo />
        </Link>
        <nav className={style.nav}>
          <ul className={style['nav-list']}>
            {navbarData.map(
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
        </nav>
        <div className={style['header-btn']}>
          <Button
            btnClass="primary"
            title="Add new"
            icon={<AddIcon />}
          />
          <LanguageTab />
        </div>
      </div>
    </header>
  );
}
