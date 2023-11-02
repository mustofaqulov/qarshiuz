/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { Tab } from '../LanguageTab/Tab';
import { NavLink } from './NavLink';
import Logo from '../../assets/icons/logo.svg';
import AddIcon from '../../assets/icons/add-icon-white.svg';
import style from './navbar.module.scss';

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
    to: '/abou',
    title: 'Abou us',
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
      <Link to="/home" className="logo">
        <Logo />
      </Link>
      <nav>
        <ul>
          {links.map(({ to, title }) => (
            <li key={to}>
              <NavLink to={to}>{title}</NavLink>
            </li>
          ))}
        </ul>
        <Button
          btnClass="primary"
          title="Add new"
          icon={<AddIcon />}
        />
        <Tab />
      </nav>
    </header>
  );
}
