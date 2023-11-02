/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import style from './navbar.module.scss';
import { Button } from '../Button/Button';
import { Tab } from '../LanguageTab/Tab';
import { NavLink } from './NavLink';
import Logo from '../../assets/icons/logo-black.svg?react';
import AddIcon from '../../assets/icons/add-icon-white.svg?react';

const links = [
  {
    to: '/home',
    title: 'Home',
  },
  {
    to: '/category',
    title: 'Category',
  },
  {
    to: '/events',
    title: 'Events',
  },
  {
    to: '/news',
    title: 'News',
  },
  {
    to: '/about-us',
    title: 'About us',
  },
];

export function Navbar() {
  return (
    <header
      className={classNames(
        [style.container],
        [style.header],
      )}
    >
      <div className="logo">
        <Logo />
      </div>
      <nav>
        <ul>
          {links.map(({ to, title }) => (
            <li key={to}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
        </ul>
        <Button
          btnClass="secondary"
          title="Add"
          icon={<AddIcon />}
        />
        <Tab />
      </nav>
    </header>
  );
}
