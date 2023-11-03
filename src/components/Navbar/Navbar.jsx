/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { Tab } from '../LanguageTab/Tab';
import { NavLink } from './NavLink';
import { links } from '../../utils/mock';
import AddIcon from '../../assets/icons/add-icon-white.svg';
import Logo from '../../assets/icons/logo.svg';
import style from './navbar.module.scss';

export function Navbar() {
  return (
    <header
      className={classNames('container', [
        style.header,
      ])}
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
